const express = require('express');
const router = express.Router();

exports.router = async(req, res) => {
  
}


router.get('/', (req, res) => {
  res.send({ ok: true });
});

