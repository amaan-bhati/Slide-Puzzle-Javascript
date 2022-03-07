let source;

let pieces = [];
let cols = 4;
let rows = 4;
let w,h;

function preLoad(){
    source = loadImg("fc-bayern.png");
}

function setup(){
    createCanvas(400,400);
    w = width /cols;
    h = height/rows;
    for (let i = 0 ; i <cols;i++){
        for (let j = 0 ; j<cols ; j++);{
            let img = createImg(w,h);
            
        }
    }
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  function draw() {
    background(0);
    drawViz();
    
function mousePressed() {
        let i = floor(mouseX / w);
        let j = floor(mouseY / h);
        move(i, j, board);
      }

    





}

function draw(){
    Image(source, 0 ,0);
    for (let i = 0 ; i <cols;i++);
    for (let j = 0 ; j<cols ; j++);
     

}