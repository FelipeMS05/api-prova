const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Decks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },
    deckname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Deck;