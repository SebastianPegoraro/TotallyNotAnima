const express = require('express')
const router = express.Router()
const Caracteristicas = require('../models/caracteristicas')

//Crea las caracteristicas del personaje
// router.post('/', async (req, res) => {
//     const caracteristicas = new Caracteristicas({
//         destreza: req.body.destreza,
//         fuerza: req.body.fuerza,
//         agilidad: req.body.agilidad
//     })

//     try {
//         const newCaracteristicas = await caracteristicas.save()
//         res.status(201).json(newCaracteristicas)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })