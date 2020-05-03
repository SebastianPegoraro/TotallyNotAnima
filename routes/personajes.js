const express = require('express')
const router = express.Router()
const Player = require('../models/player')

// Get all pjs
router.get('/', async (req, res) => {
    try {
        const player = await Player.find()
        res.json(player)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

// Get one pj
router.get('/:id', getPlayer, (req, res) => {
    res.json(res.personaje)
})

// Create one pj
router.post('/', async (req, res) => {
    const player = new Player({

        name: req.body.name,
        stats: {
            dexterity: req.body.stats.dexterity,
            strength: req.body.stats.strength,
            agility: req.body.stats.agility,
            vitality: req.body.stats.vitality
        },
        fight: {
            turn: req.body.fight.turn,
            actions: req.body.fight.actions,
            attack: req.body.fight.attack,
            defense: req.body.fight.defense,
            damage: req.body.fight.damage
        }
    })

    try {
        const newPlayer = await player.save()
        res.status(201).json(newPlayer)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update one pj
router.patch('/:id', getPlayer, async (req, res) => {
    if(req.body.name != null){
        res.player.name = req.body.name
    }

    if(req.body.destreza != null){
        res.player.destreza = req.body.destreza
    }

    if(req.body.fuerza != null){
        res.player.fuerza = req.body.fuerza
    }

    if(req.body.agilidad != null){
        res.player.agilidad = req.body.agilidad
    }

    if(req.body.agilidad != null){
        res.player.vitalidad = req.body.vitalidad
    }

    try {
        const updatePlayer = await res.player.save()
        res.json(updatePlayer)        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete one pj
router.delete('/:id', getPlayer, async (req, res) => {
    try {
        await res.player.remove()
        res.json({ message: 'Se borró el personaje!' })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

async function getPlayer(req, res, next) {
    try {
        player = await Player.findById(req.params.id)
        if(player == null){
            return res.status(404).json({ message: 'No existe el personaje' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.player = player
    next()
}
