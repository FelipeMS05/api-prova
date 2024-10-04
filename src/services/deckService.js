const deckRepository = require('../repositories/deckRepository');
const containsSpecialCharacters = require('../utils/validation')

class DeckService{
    async getDecks(){
        return deckRepository.findAll();
    }

    async createDeck(deck){
        if(deck.deckname.length > 60)
        {
        throw new Error('Nome do deck é maior que o máximo permitido');
        }

        if(deck.decription.lenght > 300){
            throw new Error('Descrição é maior que o máximo permitido')
        }
        if(deck.decription.lenght < 30){
            throw new Error('Descrição é menor que o máximo permitido')
        }

        return deckRepository.createdeck({deck});
    }
}

module.exports = new DeckService();