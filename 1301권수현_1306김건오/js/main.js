let startBut = document.querySelector("#startButton");
startBut.onclick = start_game;

// START버튼 클릭시 버튼과 게임 이름 사라짐.
function start_game(){
    document.querySelector("#game_name").style.display="none";
    document.querySelector("#startButton").style.display="none";
    document.querySelector("#myomockButton").style.display="block";
};

let myoBut = document.querySelector("#myomockButton");
myoBut.onclick = myomock_sim;

// 묘목버튼 클릭시 묘목버튼 사라지고 묘목, 물주기 버튼 등장
function myomock_sim(){
    document.querySelector("#myomockButton").style.display="none";
    document.querySelector("#myomock").style.display="block";
    document.querySelector("#mulButton").style.display="block";
};

let mulBut = document.querySelector("#mulButton");
mulBut.onclick = mul_jugi;

// 물주기버튼 클릭시 물주기버튼 사라지고 물조리개 등장, 묘목->나무로 변함
function mul_jugi(){
    document.querySelector("#mulButton").style.display="none";
    document.querySelector("#myomock").style.display="none";
    document.querySelector("#mul1").style.display="block";
    document.querySelector("#changeNamu").style.display="block";
    document.querySelector("#completeButton").style.display="block";
};


let completeBut = document.querySelector("#completeButton");
completeBut.onclick = wanryo;

// 완료버튼 클릭시 완료버튼 다 사라지고 홈페이지 소개글 띄움
function wanryo(){
    document.querySelector("#completeButton").style.display="none";
    // document.querySelector("#changeNamu").style.display="none";
    document.querySelector("#mul1").style.display="none";
    document.querySelector("#intro").style.display="block";
    document.querySelector("#introBack").style.display="block";
};

let closeBut = document.querySelector("#closeButton");
closeBut.onclick = close;

// x버튼 클릭시 소개글 내림.
function close(){
    document.querySelector("#intro").style.display="none";
    document.querySelector("#introBack").style.display="none";
};
