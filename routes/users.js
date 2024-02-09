var express = require('express');
var router = express.Router();
const db = require("../models/index.js");
const bcrypt = require('bcryptjs')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const u = await db.Auth.User.findAll({ where: { username: "teszt_user" } });

  res.send(u);
});

router.get('/admin', function (req, res, next) {
  res.json({ data: "user admin" });
});


const CreateUser = async (req, res) => {
  console.log('api post', req.body, req.params, req.query);
  const userData = req.body;

  db.Auth.User.create(userData).then(async (userObj) => {
    let salt = await bcrypt.genSalt(10)
    userObj.password = await bcrypt.hash(userObj.password, salt)
    userObj.save().then(
      (data) => {
        res.status(200).json(data)
      }
    )
  })
    .catch((err) => {
      res.status(500).json(err);
    });
}


router.post('/', function (req, res, next) {
  CreateUser(req, res)
});

router.delete('/', function (req, res, next) {
  res.json({ data: "user admin" });
});

module.exports = router;
