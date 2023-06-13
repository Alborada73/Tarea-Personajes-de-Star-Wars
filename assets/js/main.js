const url = `https://swapi.dev/api/people`

const consultarAPI = (url) => {
    return new Promise(
        (resolve, reject) => {
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let {name,height,mass} = data;
                console.log(name,height,mass);
                resolve(data)
            });
        }

    )
              
}
    
function* generador1(){

    yield consultarAPI(`${url}/1?format=json`).then(resp => $("#lista1").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_rojo.png" class="img-aling-fluid rounded-start" alt="1 - 6">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));



    yield consultarAPI(`${url}/2?format=json`).then(resp => $("#lista1").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_rojo.png" class="img-aling-fluid rounded-start" alt="1 - 6">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
   

    yield consultarAPI(`${url}/3?format=json`).then(resp => $("#lista1").append(`<div class=card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_rojo.png" class="img-aling-fluid rounded-start" alt="1 - 6">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    


    yield consultarAPI(`${url}/4?format=json`).then(resp => $("#lista1").append(`<div class=card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_rojo.png" class="img-aling-fluid rounded-start" alt="1 - 6">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
   

    yield consultarAPI(`${url}/5?format=json`).then(resp => $("#lista1").append(`<div class=card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_rojo.png" class="img-aling-fluid rounded-start" alt="1 - 6">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
    
   
}



function* generador2(){

    yield consultarAPI(`${url}/6?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
  



    yield consultarAPI(`${url}/7?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
   
    yield consultarAPI(`${url}/8?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
  
    yield consultarAPI(`${url}/9?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
   
    yield consultarAPI(`${url}/10?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
    
    yield consultarAPI(`${url}/11?format=json`).then(resp => $("#lista2").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="7 - 11">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
}

function* generador3(){
    yield consultarAPI(`${url}/12?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
   

    yield consultarAPI(`${url}/13?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
   

    yield consultarAPI(`${url}/14?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
    

    yield consultarAPI(`${url}/15?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
   
    yield consultarAPI(`${url}/16?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
    
    yield consultarAPI(`${url}/17?format=json`).then(resp => $("#lista3").append(`<div class="card md-3" style="max-width: 540px;">
    <div class="row">
      <div class="col-3">
        <img src="./assets/img/boton_verde.png" class="img-aling-fluid rounded-start" alt="12 - 17">
      </div>
    <div class="col-md-5">
        <div class="card-body" id="card1">
          <h5 class="card-title"><strong>${resp.name}</strong></h5>
          <p class="card-text"></p>
          <p class="card-text">${resp.name} ${resp.height} ${resp.mass}</div><small class="text-body-secondary"></div></small></p>
        </div>
    </div>`));
    
}


const g1 = generador1()
const g2 = generador2()
const g3 = generador3()


$(document).ready(function() {
    $("#card1").mouseenter(function() {
        g1.next()
    })

    $("#card2").mouseenter(function() {
        g2.next()
    })

    $("#card3").mouseenter(function() {
        g3.next()
    })

}) 