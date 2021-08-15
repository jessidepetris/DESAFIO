function getexpirydate( nodays){

    var UTCstring;
    
    Today = new Date();
    
    nomilli=Date.parse(Today);
    
    Today.setTime(nomilli+nodays*24*60*60*1000);
    
    UTCstring = Today.toUTCString();
    
    return UTCstring;
    
    }
    
    function getcookie(cookiename) {
    
    var cookiestring=""+document.cookie;
    
    var index1=cookiestring.indexOf(cookiename);
    
    if (index1==-1 || cookiename=="") return "";
    
    var index2=cookiestring.indexOf(";",index1);
    
    if (index2==-1) index2=cookiestring.length;
    
    return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
    
    }
    
    function setcookie(name,value,duration){
    
    cookiestring=name+"="+escape(value)+";EXPIRES="+getexpirydate(duration);
    
    document.cookie=cookiestring;
    
    if(!getcookie(name)){
    
    return false;
    
    }
    
    else{
    
    return true;
    
    }
    
    }
    
    count= getcookie("counter");
    
    if(isNaN(count)){
    
    y=setcookie("counter",0,1);
    
    count=0;
    
    }
    
    count++;
    
    document.write("Visitaste esta pagina "+count+ " veces!!");
    
    y=setcookie("counter",count,1);
