const mongoose = require('mongoose')

const caracteristicas = new mongoose.Schema({
    destreza: {
        type: Number,
        required: true
    },
    fuerza: {
        type: Number,
        required: true
    },
    agilidad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Caracteristicas', caracteristicas)