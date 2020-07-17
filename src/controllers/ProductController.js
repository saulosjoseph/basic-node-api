const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  async list(req, res) {
    const { page = 1 } = req.params;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async get(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async create(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  },

  async remove(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }

}