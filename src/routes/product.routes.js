const router = require('express-promise-router')();
const productController = require('../controlllers/product.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por consultar e atualizar dados no banco
router.get('/products/:id', productController.listaProduto);
router.put('/products/:id', productController.updateEstoque);
router.get('/products/', productController.listaTodosProdutos);
router.put('/product/preco/:id', productController.updatePreco);




module.exports = router;