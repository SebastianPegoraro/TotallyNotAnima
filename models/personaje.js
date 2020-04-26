const mongoose = require('mongoose')
const caracteristicas = require('./caracteristicas')

const personajeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    },
    vitalidad: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Personaje', personajeSchema)