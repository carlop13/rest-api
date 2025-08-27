import Product from "../models/Product.js";

//Listar productos petición get
export const getProducts = async (req, res) => {
  //Busqueda de todo por find()
  const products = await Product.find();
  res.json(products);
};

//Create product petición post
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, imgURL } = req.body;
    const newProduct = new Product({ name, price, category, imgURL });
    const productSave = await newProduct.save(); //-> Se usa save para guardar en la colección

    res.status(201).json(productSave);
    //console.log(req.body); -> Srive para ver la respuesta del server
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener producto por id petición get
export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const productsunique = await Product.findById({ _id: productId });
    res.json(productsunique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Actualizar producto por id petición put
export const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, category, imgURL } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: { name, price, category, imgURL } },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Eliminar producto por id petición delete
export const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteProduct = await Product.deleteOne({ _id: productId });
    res.json(deleteProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};