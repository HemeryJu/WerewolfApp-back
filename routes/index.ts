/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from 'express'
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.render('index', { title: 'Express' })
})

module.exports = router
