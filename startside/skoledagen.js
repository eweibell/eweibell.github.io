const EVEN = 'EVEN'
const ODD = 'ODD'

const ukedager = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']

const timeTider = {
    'søndag': [[0, 0, 23, 59]],
    mandag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 30], [12, 40, 13, 50], [13, 55, 15, 5]],
    tirsdag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 45, 13, 55]],
    onsdag: [[8, 15, 8, 25], [8, 25, 9, 35], [9, 45, 10, 55], [10, 55, 11, 0], [11, 0, 12, 5]],
    torsdag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 45, 13, 55]],
    fredag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 45, 13, 55]],
    'lørdag': [[0, 0, 23, 59]],
};

const timeFagU1 = {
    'søndag': ['HELG'],
    mandag: ['Frokost', 'Norsk', 'Programmering', 'Mat', 'Matte', 'MAF', 'Samfunnsfag'],
    tirsdag: ['Frokost', 'Gym', 'Naturfag', 'Mat', 'Norsk', 'KRLE'],
    onsdag: ['Frokost', 'Engelsk', 'Norsk', 'Mat', 'Samfunnsfag'],
    torsdag: ['Frokost', 'Matte', 'Engelsk', 'Mat', 'Timen Livet', 'MAF'],
    fredag: ['Frokost', 'Matte', 'Mat og Helse', 'Mat', 'Mat og Helse', 'Mat og Helse'],
    'lørdag': ['HELG'],
}

const ukedag = new Date().getDay()

const skoledagenDiv = document.getElementById('skoledagen')

timeTider[ukedager[ukedag]].forEach((tt, index) => {
    const skoletime = document.createElement('div')
    const skoletimeContent = document.createTextNode(`${timeFagU1[ukedager[ukedag]][index]} - ${tt[0]}:${tt[1]}-${tt[2]}:${tt[3]}`)
    skoletime.appendChild(skoletimeContent)
    skoledagenDiv.appendChild(skoletime)
});
