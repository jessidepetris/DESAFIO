import express from "express";
import fs from "fs";

const app = express();
const server = app.listen(8080, () => {
    try {console.log('Escuchando en el puerto 8080')
    }
    catch (err){
        throw new Error(err);
      };

});

app.get('/', (req,res) => {
    res.send('Bienvenidos!');
});

app.get('/visitas', (req,res) => {
    res.send('Bienvenidos!');
});

app.get('/productos', (req,res) => {
    fs.promises.readFile('./productos.txt').then(data => data.toString('utf-8')).then(datos =>{
        res.JSON.parse(datos);
    })
});

app.get ('/item-random', (req,res)=> {
    let rand = (min,max)=>{
        return Math.floor(Math.random()*(max-min)) + min;
    }
    fs.promises.readFile('./productos.txt').then(data => data.toString('utf-8')).then(datos =>{
        const json = JSON.parse(datos);
        res.json({item:json[rand(0,json.length-1)]});
    })
});
