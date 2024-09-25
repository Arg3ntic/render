const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Cours d\'introduction au Cloud',
    content: 'Ceci est une page quasi-vide',
    dbname: "ma_base_de_donnee",
    username : "ma_base_de_donnee_user",
    password : Xd2K35bDIrqunxh2LTDspWjT5IUGiVyk
  })
})

module.exports = router
