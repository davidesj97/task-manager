let tareasCreadas = [];
let tareasCompletas = [];
let contadorId = 0;

function EnviarTarea() {
    inputTarea = document.getElementById("inputTarea");
    tareasCreadas = [
        ...tareasCreadas,
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
    const tarea = tareasCreadas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        CrearElemento();
        listarTareasCompletadas()
        contadorTareasCompletadas();
    }
}

function CrearElemento() {
    const ulElement = document.querySelector('#tareas-creadas');
    let tareasPendientes = []
    while (ulElement?.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    tareasCreadas.forEach(tarea => {
        if(!tarea.completada) {
            tareasPendientes = [
                ...tareasPendientes,
                tarea
            ]
        }
    })
    if(tareasPendientes.length != 0) {
        tareasPendientes.forEach(tarea => {
            let li = document.createElement('li');
            let p = document.createElement('p');
            let imgCompletar = document.createElement('img');
            let imgEliminar = document.createElement('img');
            let botonCompletar = document.createElement('div')
            let botonEliminar = document.createElement('div')
            imgCompletar.src = 'imagenes2/icons8-tick-30.png'
            imgCompletar.addEventListener("click", () => CompletarTarea(tarea.id))
            imgEliminar.src = 'imagenes2/icons8-trash-30.png'
    
            li.setAttribute("id", tarea.id);
            li.setAttribute("class", "tarea");
            p.setAttribute("class", "texto-tarea")
            botonCompletar.setAttribute("class", "btnCompletar")
            botonEliminar.setAttribute("class", "btnEliminar")
            imgCompletar.setAttribute("class", "icon-completar");
            imgEliminar.setAttribute("class", "icon-eliminar");
    
            p.appendChild(document.createTextNode(tarea.texto));
            ulElement.appendChild(li).appendChild(p);
            ulElement.appendChild(li).appendChild(botonCompletar).appendChild(imgCompletar);
            ulElement.appendChild(li).appendChild(botonEliminar).appendChild(imgEliminar);
        })
    } else {
        let p = document.createElement('p');
        p.appendChild(document.createTextNode("No hay tareas pendientes"));
        ulElement.appendChild(p);
    }
}

function contadorTareasTotales() {
    const tareasTotales = tareasCreadas.length;
    let elementoTareasTotales = document.getElementById("tareas-totales");
    elementoTareasTotales.innerText = tareasTotales;
}

function contadorTareasCompletadas() {
    let tareasCompletadas = 0;
    let elementoTareasCompletadas = document.getElementById("tarea-compl");
    tareasCreadas.forEach(tarea => {
        if(tarea.completada) {
            tareasCompletadas++;
        }
    })
    elementoTareasCompletadas.innerText = tareasCompletadas
}

function listarTareasCompletadas() {
    const ulElement = document.querySelector('#tareas-completadas');
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    tareasCreadas.forEach(tarea => {
        if(tarea.completada === true) {
            let li = document.createElement('li');
            let p = document.createElement('p');
            let imgEliminar = document.createElement('img');
            let botonEliminar = document.createElement('div')

            imgEliminar.src = 'imagenes2/icons8-trash-30.png'

            li.setAttribute("id", tarea.id);
            li.setAttribute("class", "tarea");
            p.setAttribute("class", "texto-tarea");
            botonEliminar.setAttribute("class", "btnEliminar");
            imgEliminar.setAttribute("class", "icon-eliminar");

            p.appendChild(document.createTextNode(tarea.texto));
            ulElement.appendChild(li).appendChild(p);
            ulElement.appendChild(li).appendChild(botonEliminar).appendChild(imgEliminar);
        }
    })
}


CrearElemento();