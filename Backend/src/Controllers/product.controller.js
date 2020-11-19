const Product = require("../models/product");

const productCtrl = {};

productCtrl.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};

productCtrl.createProduct = async (req, res, next) => {
  if ((req.body.name && req.body.description && req.body.price)) {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
    await product.save();
    res.json({
      status: "Produto creado"
    });
  } else {
    res.status(400)
    res.json({
      status: "Precisa colocar datos do formulario"
    })
  }
}

productCtrl.getProduct = async (req, res, next) => {
  const {
    id
  } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};

productCtrl.editProduct = async (req, res, next) => {
  const {
    id
  } = req.params;
  await Product.findByIdAndUpdate(id, {
    $set: req.body
  }, {
    new: true
  });
  res.json({
    status: "Produto Updated"
  });
};

productCtrl.deleteProduct = async (req, res, next) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({
    status: "Produto Deleted"
  });
};

module.exports = productCtrl;