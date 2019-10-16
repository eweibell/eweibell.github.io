//document.getElementsByTagName("h1")[0].style.fontSize = "80px";
console.log('i klokke.js');
const klokke = document.getElementById('klokke')

const toSiffer = (innverdi) => {
    if (innverdi < 10) {
        return '0' + innverdi;
    }
    return innverdi;
}

klokke.style.color = 'black';

window.setInterval(function() {
  const klokke = document.getElementById('klokke')
  const now = new Date();
  klokke.innerHTML = toSiffer(now.getHours()) + ':' + toSiffer(now.getMinutes()) + '.' + toSiffer(now.getSeconds())
}, 1000);