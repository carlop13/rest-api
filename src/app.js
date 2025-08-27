import express from 'express';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json()); //Permite que los datos se envíen en formato JSON
/*
//Establecer ruta inicial
app.get("/", (req, res)=>{
res.send('Bienvenido a mi API')
});*/

app.use('/api/products', productsRoutes);

export default app;