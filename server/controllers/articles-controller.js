const Article = require('../models/Article')

const create = function(req, res) {
  const { title, content, category } = req.body
  const author = req.user.id

  let inputData = {
    title, content, category, author
  }

  Article.create(inputData)
  .then(article => {
    console.log(article)
    res.status(201).json(article)
  })
  .catch(err => {
    console.log('create article error',err)
    res.status(400).json({msg: 'create article error', error: err})
  })
}

const getAll = function(req, res) {
  let inputData = {}
  if (req.query.category) {
    inputData.category = req.query.category
  }
  if (req.query.author) {
    inputData.author = req.query.author
  }

  Article
    .find(inputData)
    .populate('author', 'username')
    .exec(function(err, articles) {
      if (err) {
        console.log('retrieve all articles error',err)
        res.status(400).json({msg: 'retrieve all articles error', error: err})
      } else {
        console.log(articles)
        res.status(200).json(articles)
      }
    })
}

const getById = function(req, res) {
  let articleId = req.params.id
  Article
    .findById(articleId)
    .populate('author', 'username')
    .exec(function(err, article) {
      if (err) {
        console.log('retrieve article error',err)
        res.status(400).json({msg: 'retrieve article error', error: err})
      } else {
        console.log(article)
        res.status(200).json(article)
      }
    })
}

const update = function(req, res) {
  let { title, content, category } = req.body

  Article
    .findOneAndUpdate({
      _id: req.params.id,
      author: req.user.id
    }, {
      title, content, category
    }, { 
      new: true
    })
    .then(updated => {
      if (!updated) {
        return res.status(400).json({ 
          msg: 'you are not allowed to edit this article', 
          error: 'you are not allowed to edit this article'
        })
      }
      console.log(updated)
      res.status(200).json(updated)
    })
    .catch(err => {
      console.log('update error', err)
      res.status(400).json({ msg: 'update error', error: err })
    })
}

const remove = function(req, res) {
  Article
    .findOneAndRemove({
      _id: req.params.id,
      author: req.user.id
    })
    .then(removed => {
      if (!removed) {
        return res.status(400).json({ 
          msg: 'you are not allowed to remove this article', 
          error: 'you are not allowed to remove this article'
        })
      }
      console.log(removed)
      res.status(200).json(removed)
    })
    .catch(err => {
      console.log('remove error', err)
      res.status(400).json({ msg: 'remove error', error: err })
    })
}

module.exports = {
  create, getAll, getById, update, remove
}