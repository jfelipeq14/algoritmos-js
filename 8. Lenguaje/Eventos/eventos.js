const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

//Mala practica - No funcionan los eventos adicionales
// lista.childNodes.forEach((elemento) => {
//     elemento.addEventListener('click', (e)  => {
//         e.target.classList.toggle('activo');
//     });
// });
//Se pierden los eventListener


//Propagacion de eventos!!
lista.addEventListener('click', (e) => {
    //Condicional (Elemento tiene target y que tipo es)
    if(e.target && e.target.tagName === 'A'){
        e.target.classList.toggle('activo');
    }
})

btnAgregar.addEventListener('click', () => {
	const elemento = `
		<a href="#">
			Elemento <i class="bi bi-check-square-fill"></i>
		</a>
	`;

	lista.innerHTML += elemento;
});