// Promesas
// resolve y reject -> Ejecutar funciones

//Se cumplio la promesa...
const promesaCumplida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = 2+2;
        if(result === 4){
            resolve('Se realizo la suma y el resultado es '+result);
        } else{
            reject('No dio lo que se esperaba');
        }
    }, 3000);
});

//Ejecucion cuando se cumple (Ese va a dar la info ahora mismo)
promesaCumplida.then((mensaje)=>{
    console.log(mensaje);
});

//Ejecucion cuando no se cumple
promesaCumplida.catch((mensaje)=>{
    console.log(mensaje);
});

//No se cumple la promesa
const promesaRechazada = new Promise((resolve, reject)=>{
    //Accion a ejecutar
    setTimeout(()=>{
        const result = 2+3;
        if(result === 4){
            resolve('Se realizo la suma y el resultado es '+result);
        } else{
            reject('No dio lo que se esperaba');
        }
    }, 3000);
});

//Ejecucion cuando se cumple
promesaRechazada.then((mensaje)=>{
    console.log(mensaje);
});

//Ejecucion cuando no se cumple (Ese va a dar la info ahora mismo)
promesaRechazada.catch((mensaje)=>{
    console.log(mensaje);
});