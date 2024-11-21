let greenIsBut = document.querySelector("#greenIsBox");
greenIsBut.onclick = greenIs;

// 
function greenIs(){
    document.querySelector("#greenMap").style.display="none";
    document.querySelector("#greenLand").style.display="none";
    document.querySelector("#greenIs").style.display="block";
};


let greenLandBut = document.querySelector("#greenLandBox");
greenLandBut.onclick = greenLand;

// 
function greenLand(){
    document.querySelector("#greenMap").style.display="none";
    document.querySelector("#greenIs").style.display="none";
    document.querySelector("#greenLand").style.display="block";
};


let greenMapBut = document.querySelector("#greenMapBox");
greenMapBut.onclick = greenMap;

// 
function greenMap(){
    document.querySelector("#greenLand").style.display="none";
    document.querySelector("#greenIs").style.display="none";
    document.querySelector("#greenMap").style.display="block";
};
