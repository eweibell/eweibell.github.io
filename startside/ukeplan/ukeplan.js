function isEven(num) {
  return (num % 2 == 0);
}

const ukeplanDenne = document.getElementById('ukeplan-denne')
const ukeplanNeste = document.getElementById('ukeplan-neste')

const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
    
var weekNumber = Math.ceil(days / 7);

const denneHref = ukeplanDenne.getAttribute('href')
console.log('denneHref', denneHref);

if (isEven(weekNumber)) {
    ukeplanDenne.setAttribute('href', './ukeplan/U2/index.html')
    ukeplanNeste.setAttribute('href', './ukeplan/U1/index.html')
}
else {
  ukeplanDenne.setAttribute('href', './ukeplan/U1/index.html')
  ukeplanNeste.setAttribute('href', './ukeplan/U2/index.html')
}
