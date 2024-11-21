let desertBut = document.querySelector("#desertBox");
desertBut.onclick = desert;

// 
function desert(){
    document.querySelector("#gameNo").style.display="none";
    document.querySelector("#webNo").style.display="none";
    document.querySelector("#desert").style.display="block";
};


let webNoBut = document.querySelector("#webNoBox");
webNoBut.onclick = webNo;

// 
function webNo(){
    document.querySelector("#gameNo").style.display="none";
    document.querySelector("#desert").style.display="none";
    document.querySelector("#webNo").style.display="block";
};


let gameNoBut = document.querySelector("#gameNoBox");
gameNoBut.onclick = gameNo;

// 
function gameNo(){
    document.querySelector("#webNo").style.display="none";
    document.querySelector("#desert").style.display="none";
    document.querySelector("#gameNo").style.display="block";
};
