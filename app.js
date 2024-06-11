let btn = document.getElementById('botonRandom');
let cita = document.getElementById('cita');
let autor = document.getElementById('autor');
function enteroRandom(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}

function cambiarCita(){
    let indiceRandom = enteroRandom(0, citas.length);
    cita.innerText = `"${citas[indiceRandom].texto}"`;
    autor.innerText = citas[indiceRandom].autor;
}
let indiceRandom = enteroRandom(0, citas.length);
cambiarCita();

btn.addEventListener('click', cambiarCita);