const EVEN = 'EVEN'
const ODD = 'ODD'

const minFromTo = (start, end) => {
    const min = Math.floor((end - start) / (60 * 1000));
    return min
}

const ukedager = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']

const timeTider = {
    'søndag': [[0, 0, 23, 59]],
    mandag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 40, 9, 50], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 30], [12, 30, 12, 40], [12, 40, 13, 50], [13, 55, 15, 5]],
    tirsdag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 40, 9, 50], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 35, 12, 45], [12, 45, 13, 55]],
    onsdag: [[8, 15, 8, 25], [8, 25, 9, 35], [9, 35, 9, 45], [9, 45, 10, 55], [10, 55, 11, 0], [11, 0, 12, 5]],
    torsdag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 40, 9, 50], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 35, 12, 45], [12, 45, 13, 55]],
    fredag: [[8, 15, 8, 30], [8, 30, 9, 40], [9, 40, 9, 50], [9, 50, 11, 0], [11, 0, 11, 25], [11, 25, 12, 35], [12, 35, 12, 45], [12, 45, 13, 55]],
    'lørdag': [[0, 0, 23, 59]],
};

const timeFagU1 = {
    'søndag': ['HELG'],
    mandag: ['Frokost', 'Engelsk', '', 'Programmering', 'FRI', 'Matte', '', 'Fransk', '', 'Naturfag'],
    tirsdag: ['Frokost', 'Uteskole', '', 'Uteskole', 'Uteskole', 'Uteskole', '', 'Uteskole', '', 'Uteskole'],
    onsdag: ['Frokost', 'Samfunnsfag', '', 'Matte', 'FRI', 'Norsk'],
    torsdag: ['Frokost', 'Naturfag', '', 'Norsk', 'FRI', 'Timen Livet', '', 'Fransk'],
    fredag: ['Frokost', 'KRLE', '', 'Gym', 'FRI', 'Matte', '', 'Samfunnsfag'],
    'lørdag': ['HELG'],
}
const skoledagenNow = new Date();

const ukedag = new Date().getDay()

const skoledagenDiv = document.getElementById('skoledagen')

console.log('skoledagenDiv getClientRects', skoledagenDiv.getClientRects())

const timeTiderIDag = timeTider[ukedager[ukedag]];
const minutterSkoledag = minFromTo(
    new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), timeTiderIDag.at(0).at(0), timeTiderIDag.at(0).at(1)),
    new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), timeTiderIDag.at(-1).at(2), timeTiderIDag.at(-1).at(3)))


timeTiderIDag.forEach((tt, index) => {
    const skoletimeStartDate = new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), tt[0], tt[1]);
    const skoletimeEndDate = new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), tt[2], tt[3]);
    const minutterSkoletime = minFromTo(skoletimeStartDate, skoletimeEndDate,)
    const prosentTimeTid = (minutterSkoletime / minutterSkoledag) * 100
    const skoletimeDiv = document.createElement('div')
    const klokkeDiv = document.createElement('div')
    const fagDiv = document.createElement('div')
    klokkeDiv.className = 'skoletimetid'
    fagDiv.className = 'skoletimefag'
    const contentKlokke = document.createTextNode(`${tt[0]}:${tt[1]}-${tt[2]}:${tt[3]}`)
    const contentFag = document.createTextNode(`${timeFagU1[ukedager[ukedag]][index]}`)
    fagDiv.appendChild(contentFag)
    klokkeDiv.appendChild(contentKlokke)
    skoletimeDiv.appendChild(fagDiv)
    skoletimeDiv.appendChild(klokkeDiv)
    skoledagenDiv.appendChild(skoletimeDiv)
    skoletimeDiv.style.width = prosentTimeTid + '%'
    const restMinAvSkoletime = minFromTo(skoledagenNow, skoletimeEndDate)
    console.log(restMinAvSkoletime)
});
skoledagenDiv.style.width = '82.5vw'