let tareas = [];
let contadorId = 0;
function EnviarTarea() {
    inputTarea = document.getElementById("inputTarea");
    tareas = [
        ...tareas,
        {
            id: contadorId + 1,
            texto: inputTarea.value,
            completada: false,
        }
    ]
    contadorId++;
    inputTarea.value = "";
    CrearElemento()
}

function CrearElemento() {
    const ulElement = document.querySelector('ul');

    // Paso 2: Eliminar todos los li
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    for(let i = 0; i < tareas.length; i++) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let imgCompletar = document.createElement('img');
        let imgEliminar = document.createElement('img');
        imgCompletar.src = 'imagenes2/icons8-tick-30.png'
        imgEliminar.src = 'imagenes2/icons8-trash-30.png'
        li.setAttribute("id", tareas[i].id);
        li.setAttribute("class", "tarea");
        p.setAttribute("class", "texto-tarea")
        imgCompletar.setAttribute("class", "icon-completar");
        imgEliminar.setAttribute("class", "icon-eliminar");
        p.appendChild(document.createTextNode(tareas[i].texto));
        ulElement.appendChild(li).appendChild(p);
        ulElement.appendChild(li).appendChild(imgCompletar);
        ulElement.appendChild(li).appendChild(imgEliminar);
    }
}
