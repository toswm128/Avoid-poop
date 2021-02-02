const canvas = document.querySelector(".worm"); 
const ctx = canvas.getContext("2d");
const score = document.querySelector("h1");

const worm = [];

const maxW = canvas.width;
const maxH = canvas.height;

let point = -1;

let Rx;
let Ry;

let x = 31;
let y = 31;
let key;

let bodY;
let bodX;

function keyRead(e){
    if(e.key === "w" || e.key === "a"||e.key === "s" ||e.key === "d"){
        key = e.key;
    }
}

function touchRead(){
    const x1 = x-30;
    const x2 = x+30;
    const y1 = y-30;
    const y2 = y+30;
    const Rx1 = Rx-30;
    const Rx2 = Rx+30;
    const Ry1 = Ry-30;
    const Ry2 = Ry+30;
    if(x2>Rx1&&x1<Rx2){
        if(y2>Ry1&&y1<Ry2){
            apple();
        }
    }
}

function move(){
    if(key === "w"){
        y--;
        draw();
    }
    if(key === "a"){
        x--;
        draw();
    }
    if(key === "s"){
        y++;
        draw();
    }
    if(key === "d"){
        x++;
        draw();
    }

}

function headDraw(){
    ctx.strokeStyle="black"
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function bodyDraw(){
    ctx.strokeStyle="blue"
    ctx.beginPath();
    ctx.arc(bodX, bodY, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function appleDraw(){
    ctx.strokeStyle="red"
    ctx.beginPath();
    ctx.arc(Rx, Ry, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function draw(){
    ctx.clearRect(0,0,maxW,maxH);
    headDraw();
    bodyDraw();
    appleDraw();
}

function apple(){
    point++;
    score.innerText = point;
    Rx = Math.floor(Math.random()*maxW)
    Ry = Math.floor(Math.random()*maxH)
    ctx.strokeStyle="red"
    ctx.beginPath();
    ctx.arc(Rx, Ry, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function init(){
    draw();
    apple();
    window.addEventListener("keydown",keyRead)
    setInterval(move,1);
    setInterval(touchRead,1);
}

init();