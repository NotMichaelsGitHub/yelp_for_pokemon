const pokemon = require('pokemontcgsdk');

doIt();

function doIt() {

    pokemon.card.find('base1-4')
        .then(result => {
            console.log(result.card.name); // "Charizard"
        });


}
