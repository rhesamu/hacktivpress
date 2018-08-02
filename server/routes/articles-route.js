const router = require('express').Router()
const articlesController = require('../controllers/articles-controller')
const auth = require('../middlewares/auth')

router
  .route('/')
  .get(articlesController.getAll)
  .post(auth.isAuthenticated, articlesController.create)

router
  .route('/:id')
  .get(articlesController.getById)
  .put(auth.isAuthenticated, articlesController.update)
  .delete(auth.isAuthenticated, articlesController.remove)

module.exports = router