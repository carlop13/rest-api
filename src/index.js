import app from './app.js';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
app.listen(3000);

mongoose.connect(process.env.MONGODB_URI
).then(() => console.log("Conectado a la BD de Atlas"))
    .catch((error) => console.error(error))

    /*
export const createProduct = async (req,res) => {

    const { name, price, category, imgURL } = req.body;
    const newProduct = new Product({ name, price, category, imgURL });
    const productSave = await newProduct.save();

    res.status(201).json(productSave);
    console.log(req.body);
}
*/

console.log('Servidor escuchado en el puerto', 3000);