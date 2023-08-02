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
    CrearElemento();
    contadorTareasTotales();
}

function CompletarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        CrearElemento();
        contadorTareasCompletadas();
    }
}

function CrearElemento() {
    const ulElement = document.querySelector('ul');
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    tareas.forEach(tarea => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let imgCompletar = document.createElement('img');
        let imgEliminar = document.createElement('img');
        imgCompletar.src = 'imagenes2/icons8-tick-30.png'
        imgCompletar.addEventListener("click", () => CompletarTarea(tarea.id))
        imgEliminar.src = 'imagenes2/icons8-trash-30.png'

        li.setAttribute("id", tarea.id);
        li.setAttribute("class", "tarea");
        p.setAttribute("class", "texto-tarea")
        imgCompletar.setAttribute("class", "icon-completar");
        imgEliminar.setAttribute("class", "icon-eliminar");

        p.appendChild(document.createTextNode(tarea.texto));
        ulElement.appendChild(li).appendChild(p);
        ulElement.appendChild(li).appendChild(imgCompletar);
        ulElement.appendChild(li).appendChild(imgEliminar);
    })
}

function contadorTareasTotales() {
    const tareasTotales = tareas.length;
    let elementoTareasTotales = document.getElementById("tareas-totales");
    elementoTareasTotales.innerText = tareasTotales;
}

function contadorTareasCompletadas() {
    let tareasCompletadas = 0;
    let elementoTareasCompletadas = document.getElementById("tarea-compl");
    tareas.forEach(tarea => {
        if(tarea.completada) {
            tareasCompletadas++;
        }
    })
    elementoTareasCompletadas.innerText = tareasCompletadas
}
