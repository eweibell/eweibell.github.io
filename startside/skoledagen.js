const EVEN = 'EVEN'
const ODD = 'ODD'

let progressInterval = 0

var ukeNum = ''

const minFromTo = (start, end) => {
    const min = Math.floor((end - start) / (60 * 1000));
    return min
}

function isEven(num) {
  return (num % 2 == 0);
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

const timeFagU2 = {
    'søndag': ['HELG'],
    mandag: ['Frokost', 'Norsk', '', 'Kroppsøving', 'FRI', 'Matte', '', 'Fransk', '', 'KRLE'],
    tirsdag: ['Frokost', 'Norsk', '', 'Samfunnsfag', 'FRI', 'Programmering', '', 'Programmering',],
    onsdag: ['Frokost', 'Matte', '', 'Timen Livet', 'FRI', 'Engelsk'],
    torsdag: ['Frokost', 'Norsk', '', 'Naturfag', 'FRI', 'Fransk', '', 'Engelsk'],
    fredag: ['Frokost', 'Mat og Helse', '', 'Mat og Helse', 'FRI', 'Mat og Helse', '', 'Gym'],
    'lørdag': ['HELG'],
}

const currentSkoledagDate = new Date();
const startCurrentYearDate = new Date(currentSkoledagDate.getFullYear(), 0, 1);
const daysSkoledagen = Math.floor((currentSkoledagDate - startCurrentYearDate) /
    (24 * 60 * 60 * 1000));
    
function nextMorningDate() {

}     
var weekNumber = Math.ceil(daysSkoledagen / 7);

if (isEven(weekNumber)) {
    ukeNum = timeFagU1
}
else {
    ukeNum = timeFagU2
}

function timestampNow(minuttOffset = 0) {
    const now = new Date();
    const timeOffset = minuttOffset / 60;
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + timeOffset, now.getMinutes() + minuttOffset % 60);
}

function timestampOffset(dayOffset = 0, hour = 0, minute = 0) {
    const now = new Date();
    const hourOffest = minute / 60;
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + dayOffset, hour, minute);
}

const skoledagenNow = new Date();
// let offset = 0;
// const skoledagenNow = timestampNow(offset)
const ukedag = skoledagenNow.getDay()

const schedule = getScheduleForDate(skoledagenNow)
const skoledagenDiv = document.getElementById('skoledagen')
const skoledagNesteDiv = document.getElementById('nesteDag')
const skoledagEtterNesteDiv = document.getElementById('etterNesteDag')
const dropdownButton = document.getElementById('dropdownButton')
const skoleDagEndDate = new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), schedule.hours.at(-1).at(2), schedule.hours.at(-1).at(3))
const minLeftSkoledag = minFromTo(
    new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), schedule.hours.at(0).at(0), schedule.hours.at(0).at(1)),
    skoleDagEndDate)

console.log('skoledagenDiv getClientRects', skoledagenDiv.getClientRects())

function getScheduleForDate(date) {
    const skoledagDate = new Date(date);
    const startCurrentYearDate = new Date(skoledagDate.getFullYear(), 0, 1);
    const daysSkoledagen = Math.floor((skoledagDate - startCurrentYearDate) /
        (24 * 60 * 60 * 1000));     
    var weekNumber = Math.ceil(daysSkoledagen / 7);
    if (isEven(weekNumber)) {
        return {
            hours: timeTider[ukedager[skoledagDate.getDay()]],
            subjects: timeFagU1[ukedager[skoledagDate.getDay()]],
        }
    }
    else {
        return {
            hours: timeTider[ukedager[skoledagDate.getDay()]],
            subjects: timeFagU2[ukedager[skoledagDate.getDay()]],
        }
    }
}

const renderSkoletimer = (containerDiv, renderTimestamp, timeTiderToday, minutterSkoledag, subjectToday) => {
    containerDiv.innerHTML = '';
    timeTiderToday.forEach((tt, index) => {
        const skoletimeStartDate = new Date(renderTimestamp.getFullYear(), renderTimestamp.getMonth(), renderTimestamp.getDate(), tt[0], tt[1]);
        const skoletimeEndDate = new Date(renderTimestamp.getFullYear(), renderTimestamp.getMonth(), renderTimestamp.getDate(), tt[2], tt[3]);
        const minutterSkoletime = minFromTo(skoletimeStartDate, skoletimeEndDate,)
        const restMinAvSkoletime = minFromTo(renderTimestamp, skoletimeEndDate)
        const prosentTimeTid = (minutterSkoletime / minutterSkoledag) * 100
        const skoletimeDiv = document.createElement('div')
        const klokkeDiv = document.createElement('div')
        const fagDiv = document.createElement('div')
        skoletimeDiv.className = 'skoletime'
        klokkeDiv.className = 'skoletimetid'
        fagDiv.className = 'skoletimefag'
        if (restMinAvSkoletime < 0) {
            skoletimeDiv.className = 'skoletime ferdig'
        }
        const contentKlokke = document.createTextNode(`${tt[0]}:${tt[1]}-${tt[2]}:${tt[3]}`)
        const contentFag = document.createTextNode(`${subjectToday[index]}`)
        fagDiv.appendChild(contentFag)
        if (subjectToday[index] !== '') {
            klokkeDiv.appendChild(contentKlokke)
        }
        skoletimeDiv.appendChild(fagDiv)
        skoletimeDiv.appendChild(klokkeDiv)
        containerDiv.appendChild(skoletimeDiv)
        skoletimeDiv.style.width = prosentTimeTid + '%'
    });
}

function renderSkoledag(containerDiv, date, minSkoledag) {
    containerDiv.innerHTML = '';
    const skoledagenTimerDiv = document.createElement('div')
    skoledagenTimerDiv.className = 'skoledagen'
    containerDiv.appendChild(skoledagenTimerDiv)
    if (progressInterval === 0) {
        progressInterval = 1;
        progressIntervalSetup(skoleDagEndDate)
    }
    skoledagenTimerDiv.style.width = '82.5vw'
    renderSkoletimer(skoledagenTimerDiv, date, schedule.hours, minSkoledag, schedule.subjects)
}

function settInnNesteDager() {
    const minLeftSkoledag = minFromTo(
        new Date(skoledagenNow.getFullYear(), skoledagenNow.getMonth(), skoledagenNow.getDate(), schedule.hours.at(0).at(0), schedule.hours.at(0).at(1)),
        skoleDagEndDate)
    const skoledagNeste = document.createElement('div')
    const skoledagEtterNeste = document.createElement('div')
    skoledagNesteDiv.appendChild(skoledagNeste)
    skoledagEtterNesteDiv.appendChild(skoledagEtterNeste)
    skoledagNeste.className = 'line'
    skoledagEtterNeste.className = 'line'
    renderSkoledag(skoledagNeste, timestampOffset(1, 6, 0), minLeftSkoledag)
    renderSkoledag(skoledagEtterNeste, timestampOffset(2, 6, 0), minLeftSkoledag)
    dropdownButton.style.display = 'none'
}

const minLeft = document.createElement('div')

renderSkoledag(skoledagenDiv, skoledagenNow, minLeftSkoledag)

function progressIntervalSetup(skoleDagEndDate) {
    window.setInterval(() => {
        // offset = offset + (progressInterval / 60)
        const restMinAvSkoledag = minFromTo(timestampNow(), skoleDagEndDate)
        if (restMinAvSkoledag > 0) {
            minLeft.style.width = `${82.5 / minLeftSkoledag * (minLeftSkoledag - restMinAvSkoledag)}vw`;
        } else {
            minLeft.style.width = `82.5vw`;
        }
        renderSkoledag(skoledagenDiv, skoledagenNow, minLeftSkoledag)
        skoledagenDiv.appendChild(minLeft)
    }, progressInterval * 10000)
}
// minLeft.style.width = `${82.5 / minLeftSkoledag * (minLeftSkoledag - restMinAvSkoledag)}vw`;
minLeft.style.borderBottom = 'solid 5px rgb(160,160,160)'

