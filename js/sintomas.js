/* THE CRITERIA USED IS BASED ON THE RECOMMENDATIONS OF THE SECRETARIAT OF HEALTH OF BRAZIL BUT HAS NO OFFICIAL SCOPE */
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var tosse = document.getElementById("tosse");
var coriza = document.getElementById("coriza");
var febrei = document.getElementById("febrei");
var febrea = document.getElementById("febrea");
var garganta = document.getElementById("garganta");
var respirar = document.getElementById("respirar");
var dorm = document.getElementById("dorm");
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var mancha = document.getElementById("mancha");
var verify = [];
var notVerify=[];
var verifyLeves=[];
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn-form");
var span = document.getElementsByClassName("close")[0];
var txtForm = document.getElementById("txtForm");
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var textGraveL = "Foi marcado um ou mais sintomas graves do COVID-19 além de sintomas leves. De acordo com o ministério da saúde seria recomendado procurar um médico com urgência para melhor diagnóstico.";
var textLeve = "Foi marcado um ou mais sintomas leves somente. De acordo com o ministério da saúde seria recomendado esperar um período de 14 dias em casa, e caso piorasse durante este período procurar um médico.";
var textGrave = "Foi marcado um ou mais sintomas graves do COVID-19 porém nenhum sintoma leve. De acordo com o ministério da saúde seria recomendado procurar um médico se os sintomas persistirem.";
var textNone = "Não foi marcado nenhum sintoma leve ou grave do COVID-19, recomendamos permanecer em casa e em caso de piora procurar um médico para um melhor diagnóstico."

function sintomas(){
    if(febrea.checked==true){
        verify.push("f");
    } 
    if(respirar.checked==true){
        verify.push("r");
    }
    if(tosse.checked==true){
        verifyLeves.push("t");
    } 
    if(dorm.checked==true){
        notVerify.push("d")
    }
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
    if(mancha.checked==true){
        notVerify.push("m")
    }
    if(coriza.checked==true){
        verifyLeves.push("c")
    }
    if(febrei.checked==true){
        verifyLeves.push("f")
    }
    if(garganta.checked==true){
        verifyLeves.push("g")
    }
    verifyLeves.indexOf("c")!=-1||verifyLeves.indexOf("t")!=-1||verifyLeves.indexOf("f")!=-1||
    verifyLeves.indexOf("g")!=-1 ? verify.indexOf("f")!=-1 || verify.indexOf("r")!=-1 ? 
    modalOpen(textGraveL): modalOpen(textLeve): verify.indexOf("f")!=-1 || verify.indexOf("r")!=-1 ? modalOpen(textGrave): modalOpen(textNone);
    febrea.checked=false;
    respirar.checked=false;
    tosse.checked=false;
    dorm.checked=false;
    mancha.checked=false;
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
    coriza.checked=false;
    febrei.checked=false;
    garganta.checked=false;
    verify=[];
    verifyLeves=[];
    notVerify=[];
}
function modalOpen(x){
    modal.style.display = "block";
    txtForm.innerHTML=x
}
span.onclick = function() {
    modal.style.display = "none";
}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */