// import { normalize, schema } from 'normalizr';

const normalizr = require('normalizr');
const schema = normalizr.schema;
const normalize = normalizr.normalize;

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:\\Users\\Fernando\\Desktop\\players.json', 'utf8'));

const nationality = new schema.Entity('nationality')    
const team = new schema.Entity('team')

const player = new schema.Entity('player', {
    nationality : nationality,
    team: team
})


const normalizedData = normalize(data, [player]);

fs.writeFileSync('C:\\Users\\Fernando\\Desktop\\playersResult.json', JSON.stringify(normalizedData));

