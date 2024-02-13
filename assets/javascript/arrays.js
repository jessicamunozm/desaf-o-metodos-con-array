var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


// BOTÓN MOSTRAR/OCULTAR TABLA RADIOLOGÍA

let tablaRadio = document.querySelector ("#tablaRadio");
let ShowR = true;
function showHidetableR() {
if (ShowR) {
tablaRadio.style.display="none";
ShowR = false;
} else {
    tablaRadio.style.display="table";
    ShowR = true;
}
}

// TABLA RADIOLOGÍA
let tablaR = function(listaR) {
    let sTablaR = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
    for(let pctesR of listaR) {
        let filaR = "<tr> <td>"
        filaR += pctesR.hora;
        filaR += "</td>"
        
        filaR += "<td>" 
        filaR += pctesR.especialista;
        filaR += "</td>"

        filaR += "<td>"
        filaR += pctesR.paciente;
        filaR += "</td>"

        filaR += "<td>"
        filaR += pctesR.rut;
        filaR += "</td>"

        filaR += "<td>"
        filaR += pctesR.prevision;
        filaR += "</td>"

        filaR += "</tr>"

        sTablaR += filaR  
    }
        return sTablaR;
    }
document.getElementById("tablaRadio").innerHTML=tablaR(radiologia)

// BOTÓN MOSTRAR/OCULTAR TABLA TRAUMATOLOGÍA

let tablaTrauma = document.querySelector ("#tablaTrauma");
let ShowT = true;
function showHidetableT() {
if (ShowT) {
tablaTrauma.style.display="none";
ShowT = false;
} else {
    tablaTrauma.style.display="table";
    ShowT = true;
}
}

// TABLA TRAUMATOLOGÍA

let tablaT = function(listaT) {
    let sTablaT = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
    for(let pctesT of listaT) {
        let filaT = "<tr> <td>"
        filaT += pctesT.hora;
        filaT += "</td>"
        
        filaT += "<td>" 
        filaT += pctesT.especialista;
        filaT += "</td>"

        filaT += "<td>"
        filaT += pctesT.paciente;
        filaT += "</td>"

        filaT += "<td>"
        filaT += pctesT.rut;
        filaT += "</td>"

        filaT += "<td>"
        filaT += pctesT.prevision;
        filaT += "</td>"

        filaT += "</tr>"

        sTablaT += filaT  
    }
        return sTablaT;
    }
document.getElementById("tablaTrauma").innerHTML=tablaT(traumatologia)

// BOTÓN MOSTRAR/OCULTAR TABLA DENTAL

let tablaDental = document.querySelector ("#tablaDental");
let ShowD = true;
function showHidetableD() {
if (ShowD) {
tablaDental.style.display="none";
ShowD = false;
} else {
    tablaDental.style.display="table";
    ShowD = true;
}
}

// TABLA DENTAL

let tablaD = function(listaD) {
    let sTablaD = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
    for(let pctesD of listaD) {
        let filaD = "<tr> <td>"
        filaD += pctesD.hora;
        filaD += "</td>"
        
        filaD += "<td>" 
        filaD += pctesD.especialista;
        filaD += "</td>"

        filaD += "<td>"
        filaD += pctesD.paciente;
        filaD += "</td>"

        filaD += "<td>"
        filaD += pctesD.rut;
        filaD += "</td>"

        filaD += "<td>"
        filaD += pctesD.prevision;
        filaD += "</td>"

        filaD += "</tr>"

        sTablaD += filaD 
    }
        return sTablaD;
    }
document.getElementById("tablaDental").innerHTML=tablaD(dental)


// 1. Agregar las siguientes horas al arreglo de Traumatología (2 Puntos):

traumatologia.push (
    {hora: '9:00',  especialista: 'RENÉ POBLETE',    paciente: 'ANA GELLONA',    rut: '13123329-7',  prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR',     paciente: 'RAMIRO ANDRADE', rut: '12221451-K',  prevision: 'FONASA'},        
    {hora: '10:00', especialista: 'RAUL LOYOLA',     paciente: 'CARMEN ISLA',    rut: '10112348-3',  prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',   rut: '13453234-1',  prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',  paciente: 'SUSANA POBLETE', rut: '14345656-6',  prevision: 'FONASA'}
)

console.log (traumatologia)

// BOTÓN MOSTRAR/OCULTAR TABLA TRAUMATOLOGÍA CON PUSH

let tablaTraumaP = document.querySelector ("#tablaTraumaP");
let ShowTP = true;
function showHidetableTP() {
if (ShowTP) {
tablaTraumaP.style.display="none";
ShowTP = false;
} else {
    tablaTraumaP.style.display="table";
    ShowTP = true;
}
}

// TABLA TRAUMATOLOGÍA CON PUSH

let tablaTP = function(listaTP) {
    let sTablaTP = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
    for(let pctesTP of listaTP) {
        let filaTP = "<tr> <td>"
        filaTP += pctesTP.hora;
        filaTP += "</td>"
        
        filaTP += "<td>" 
        filaTP += pctesTP.especialista;
        filaTP += "</td>"

        filaTP += "<td>"
        filaTP += pctesTP.paciente;
        filaTP += "</td>"

        filaTP += "<td>"
        filaTP += pctesTP.rut;
        filaTP += "</td>"

        filaTP += "<td>"
        filaTP += pctesTP.prevision;
        filaTP += "</td>"

        filaTP += "</tr>"

        sTablaTP += filaTP
    }
        return sTablaTP;
    }
document.getElementById("tablaTraumaP").innerHTML=tablaTP(traumatologia)

// 2. Eliminar el primer y último elemento del arreglo de Radiología (1 Punto). 

radiologia.pop ();
radiologia.shift();

// BOTÓN MOSTRAR/OCULTAR TABLA RADIOLOGÍA POP SHIFT

let tablaRadioPS = document.querySelector ("#tablaRadioPS");
let ShowRPS = true;
function showHidetableRPS() {
if (ShowRPS) {
tablaRadioPS.style.display="none";
ShowRPS = false;
} else {
    tablaRadioPS.style.display="table";
    ShowRPS = true;
}
}

// TABLA RADIOLOGÍA POP SHIFT
let tablaRPS = function(listaRPS) {
    let sTablaRPS = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
    for(let pctesRPS of listaRPS) {
        let filaRPS = "<tr> <td>"
        filaRPS += pctesRPS.hora;
        filaRPS += "</td>"
        
        filaRPS += "<td>" 
        filaRPS += pctesRPS.especialista;
        filaRPS += "</td>"

        filaRPS += "<td>"
        filaRPS += pctesRPS.paciente;
        filaRPS += "</td>"

        filaRPS += "<td>"
        filaRPS += pctesRPS.rut;
        filaRPS += "</td>"

        filaRPS += "<td>"
        filaRPS += pctesRPS.prevision;
        filaRPS += "</td>"

        filaRPS += "</tr>"

        sTablaRPS += filaRPS
    }
        return sTablaRPS;
    }
document.getElementById("tablaRadioPS").innerHTML=tablaRPS(radiologia)

console.log(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
console.log(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
console.log(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

// 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
// separando por un guión cada dato desplegado y cada fila de información debe estar
// separada por un párrafo (2 Puntos). 

// BOTON PUNTO 3
let p3 = document.querySelector ("#dental3");
let ShowP3 = true;
function showHidetableDP3() {
if (ShowP3) {
p3.style.display="none";
ShowP3 = false;
} else {
    dental3.style.display="block";
    ShowP3 = true;
}
}

let pD3 = " ";
dental.forEach (function (d3) {
pD3 += (`<p> ${d3.hora} - ${d3.especialista} - ${d3.paciente} - ${d3.rut} - ${d3.prevision} </p>`);
})
    
document.getElementById("dental3").innerHTML = pD3;

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
// Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo //   

// BOTÓN MOSTRAR/OCULTAR PACIENTES

let p4 = document.querySelector ("#pacientes4");
let ShowP4 = true;
function showHideP4() {
if (ShowP4) {
pacientes4.style.display="none";
ShowP4 = false;
} else {
    pacientes4.style.display="block";
    ShowP4 = true;
}
}

// LISTADO TOTAL DE PACIENTES 
let pacientes = radiologia.concat(traumatologia, dental);
console.log (pacientes)

let pacientesTotal = " ";
pacientes.forEach (function(p) {
    pacientesTotal += (`<p>${p.paciente} </p>`) 
    })

document.getElementById("pacientes4").innerHTML = pacientesTotal;

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
// de Dental (1 Punto). 

// BOTÓN ISAPRE DENTAL

let p5 = document.querySelector ("#isapreD");
let ShowP5 = true;
function showHideP5() {
if (ShowP5) {
isapreD.style.display="none";
ShowP5 = false;
} else {
    isapreD.style.display="block";
    ShowP5 = true;
}
}

// LISTADO PACIENTES DENTAL ISAPRE
let isapre = dental.filter (function(paciente) {
return paciente.prevision === "ISAPRE"
});

let pacientesIsapre = " ";
isapre.forEach(function(paciente) {
    pacientesIsapre +=(`<p> ${paciente.paciente} </p>`)
});

document.getElementById("isapreD").innerHTML = pacientesIsapre;

// {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
// {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
// {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
// {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
// {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
// {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
// de Traumatología (1 Punto). 

// BOTÓN FONASA TRAUMATOLOGÍA

let p6 = document.querySelector ("#fonasaT");
let ShowP6 = true;
function showHideP6() {
if (ShowP6) {
fonasaT.style.display="none";
ShowP6 = false;
} else {
    fonasaT.style.display="block";
    ShowP6 = true;
}
}

// LISTADO PACIENTES FONASA TRAUMATOLOGIA

let fonasa = traumatologia.filter (function(paciente) {
    return paciente.prevision === "FONASA"
});

let pacientesFonasa = " ";
fonasa.forEach(function(paciente){
pacientesFonasa +=(`<p> ${paciente.paciente} </p>`)

})

document.getElementById("fonasaT").innerHTML = pacientesFonasa;

console.log(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
console.log(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
console.log(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);