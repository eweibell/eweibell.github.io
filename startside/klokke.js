//document.getElementsByTagName("h1")[0].style.fontSize = "80px";
console.log('i klokke.js');
const klokke = document.getElementById('klokke')

const toSiffer = (innverdi) => {
    if (innverdi < 10) {
        return '0' + innverdi;
    }
    return innverdi;
}

const setTime = function() {
    const now = new Date();
    klokke.innerHTML = toSiffer(now.getHours()) + ':' + toSiffer(now.getMinutes())
};
setTime();
window.setInterval(setTime, 1000);