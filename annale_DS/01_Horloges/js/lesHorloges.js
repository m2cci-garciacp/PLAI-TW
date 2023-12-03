//--------------------------------------------------------
// variables globales
//--------------------------------------------------------

const horlogesDescr = [
    {ville: 'Vancouver', decalage: -9, img: 'Canada.png'},
    {ville: 'New york', decalage: -6, img: 'USA.png'},
    {ville: 'Rio de Janeiro', decalage: -4, img: 'Brazil.png'},
    {ville: 'Londres', decalage: -1, img: 'Brazil.png'},
    {ville: 'Grenoble', decalage: 0, img: 'France.png'},
    {ville: 'Casablanca', decalage: 0, img: 'Morocco.png'},
    {ville: 'Wum', decalage: 0, img: 'Cameroon.png'},
    {ville: "Tai'an", decalage: +7, img: 'China.png'},
    {ville: 'Tokyo', decalage: +8, img: 'Japan.png'},
    {ville: "Sydney", decalage: +10, img: 'Australia.png'}
];

const lesHorloges = [];

/**
 * création des horloges
 * @type Number
 */
for (let i = 0; i < horlogesDescr.length; i++) {
    lesHorloges[i] = new Horloge('horloge' + (i + 1), horlogesDescr[i].ville,
            horlogesDescr[i].decalage, horlogesDescr[i].img);
}



