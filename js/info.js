/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var dashContainer = document.getElementById("dashItensBr");
var btn = document.getElementById("btn-form");
var btn2 = document.getElementById("btn2");
console.log(btn2)
var verify = false;
axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
    .then(function (response) {
        console.log(response)
        var json = response.data.data;
        for (i = 0; i < json.length; i++) {
            var state = json[i].state;
            var dead = json[i].deaths;
            var cases = json[i].cases;
            var atual = json[i].datetime;
            var container = document.createElement('div');
            var atributo = document.createAttribute('class');
            atributo.value = "itens";
            container.setAttributeNode(atributo);
            var h1 = document.createElement('h1');
            var p = document.createElement('p');
            var h21 = document.createElement('h2');
            var h22 = document.createElement('h2');
            var h23 = document.createElement('h2');
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            var span3 = document.createElement('span');
            dashContainer.appendChild(container);
            container.appendChild(h1);
            container.appendChild(p);
            h1.innerHTML = state;
            p.appendChild(h21);
            p.appendChild(span1);
            p.appendChild(h22);
            p.appendChild(span2);
            p.appendChild(h23);
            p.appendChild(span3);
            h21.innerHTML = "Confirmados:";
            span1.innerHTML = cases;
            h22.innerHTML = "Falecidos:";
            span2.innerHTML = dead;
            h23.innerHTML = "Atualização:";
            span3.innerHTML = atual;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
function br() {
    if (verify === false) {
        dashContainer.style.display = 'flex';
        verify = true;
        btn.innerHTML = 'Fechar';
    } else {
        dashContainer.style.display = 'none';
        verify = false;
        btn.innerHTML = 'Casos no Brasil';
    }
}

var api;
var select = document.getElementById("selectDash");
var dashItensCt = document.getElementById("dashItensCt");
var confirmD = document.getElementById("confirmD");
var faleD = document.getElementById("faleD");
var atualD = document.getElementById("atualD");
var stateD = document.getElementById("stateD");
var verifyCT = false;

axios.get('https://www.trackcorona.live/api/countries')
    .then(function (response) {
        api = response;
        api = api.data.data;
    })
    .catch(function (error) {
        console.log(error);
    })
function selected(){
    select = document.getElementById("selectDash")
}
function ct() {
    select = select.value;
    if (select <= 0) {
        alert("Selecione um país")
        selected();
    } else {
        if (verifyCT === false) {
            btn2.innerHTML = 'Fechar';
            verifyCT = true;
            dashItensCt.style.display = 'flex';
            var iter = (select) - 1
            stateD.innerHTML = api[iter].location;
            confirmD.innerHTML = api[iter].confirmed;
            faleD.innerHTML = api[iter].dead;
            atualD.innerHTML = api[iter].updated;
            selected();
        } else {
            btn2.innerHTML = 'Casos Mundo';
            stateD.innerHTML = 'state';
            confirmD.innerHTML = 0;
            faleD.innerHTML = 0;
            atualD.innerHTML = 0;
            verifyCT = false;
            dashItensCt.style.display = 'none';
            selected();
        }
    }

}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */