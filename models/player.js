const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    level: {
        type: Number,
        required: true,
        default: 1
    },
    name: {
        type: String,
        required: true
    },
    stats: {
        dexterity: {
            type: Number,
            required: true
        },
        strength: {
            type: Number,
            required: true
        },
        agility: {
            type: Number,
            required: true
        },
        vitality: {
            type: Number,
            required: true
        }
    },
    fight: {
        turn: {
            type: Number,
            required: true
        },
        actions: {
            type: Number,
            required: true
        },
        attack: {
            type: Number,
            required: true
        },
        defense: {
            type: Number,
            required: true
        },
        damage: {
            type: Number,
            required: true
        }
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Player', playerSchema)