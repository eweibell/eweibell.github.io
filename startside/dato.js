//document.getElementsByTagName("h1")[0].style.fontSize = "80px";
console.log('i dato.js');
const dato = document.getElementById('dato')

const now = new Date();
dato.innerHTML = now.getFullYear() + '.' + toSiffer(now.getMonth() + 1) + '.' + toSiffer(now.getDate());