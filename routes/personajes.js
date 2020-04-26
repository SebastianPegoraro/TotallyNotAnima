const express = require('express')
const router = express.Router()
const Personaje = require('../models/personaje')

// Get all pjs
router.get('/', async (req, res) => {
    try {
        const personajes = await Personaje.find()
        res.json(personajes)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

// Get one pj
router.get('/:id', getPersonaje, (req, res) => {
    res.json(res.personaje)
})

// Create one pj
router.post('/', async (req, res) => {
    const personaje = new Personaje({
        name: req.body.name,
        destreza: req.body.destreza,
        fuerza: req.body.fuerza,
        agilidad: req.body.agilidad
    })

    try {
        const newPersonaje = await personaje.save()
        res.status(201).json(newPersonaje)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update one pj
router.patch('/:id', getPersonaje, async (req, res) => {
    if(req.body.name != null){
        res.personaje.name = req.body.name
    }

    if(req.body.destreza != null){
        res.personaje.destreza = req.body.destreza
    }

    if(req.body.fuerza != null){
        res.personaje.fuerza = req.body.fuerza
    }

    if(req.body.agilidad != null){
        res.personaje.agilidad = req.body.agilidad
    }

    try {
        const updatePersonaje = await res.personaje.save()
        res.json(updatePersonaje)        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete one pj
router.delete('/:id', getPersonaje, async (req, res) => {
    try {
        await res.personaje.remove()
        res.json({ message: 'Se borró el personaje!' })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

async function getPersonaje(req, res, next) {
    try {
        personaje = await Personaje.findById(req.params.id)
        if(personaje == null){
            return res.status(404).json({ message: 'No existe el personaje' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.personaje = personaje
    next()
}
