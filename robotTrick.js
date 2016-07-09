/**
 * Created by Noa on 7/8/2016.
 */
// DRY CODE
// class Robot {
//   constructor(x,y,faceDirection){
//     this.x = x;
//     this.y = y;
//     this.faceDirection = directions.east;
//   }
//   turnLeft() {
//     switch(this.faceDirection){
//          case directions.east:
//         this.faceDirection = directions.north;
//         break;
//       case directions.west:
//       this.faceDirection = directions.south;
//         break;
//       case directions.north:
//         this.faceDirection = directions.west;
//         break;
//       case directions.south:
//         this.faceDirection = directions.east;
//         break;
//     }
//   }
//   turnRight() {
//     switch(this.faceDirection){
//          case directions.east:
//         this.faceDirection = directions.south;
//         break;
//       case directions.west  :
//       this.faceDirection = directions.north;
//         break;
//       case directions.north:
//         this.faceDirection = directions.east;
//         break;
//       case directions.south :
//         this.faceDirection = directions.west;
//         break;
//     }
//   }
//   move() {
//     switch(this.faceDirection){
//       case directions.east:
//         this.x += 1;
//         break;
//       case directions.west  :
//       this.x -= 1;
//         break;
//       case directions.north:
//         this.y += 1;
//       case directions.south :
//         this.y -= 1;
//     }
//   }
// }
// var roboCop = new Robot(0,0);
// roboCop.turnRight();
// roboCop.turnRight();
// roboCop.turnRight();
// console.log(roboCop);

//EXECUTING CODE
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var move = document.querySelector('.move');
var trans = document.querySelector('.trans');
var directions = {
    north : 'north',
    south :'south',
    east :'east',
    west :'west'
}
function Robot () {

        this.el = document.querySelector('.robo');
        //this.el = document.createElement('div');
        //this.el.className = 'robo';
       // document.body.appendChild(this.el);
        this.x = 0;
        this.y = 0;
        this.faceDirection = directions.east;
        this.deg = 90;
    }
Robot.prototype.turnLeft = function() {
        this.deg -= 90;
        this.render();
        switch(this.faceDirection){
            case directions.east:
                this.faceDirection = directions.north;
                break;
            case directions.west:
                this.faceDirection = directions.south;
                break;
            case directions.north:
                this.faceDirection = directions.west;
                break;
            case directions.south:
                this.faceDirection = directions.east;
                break;
        }
    }
Robot.prototype.turnRight = function() {
        this.deg += 90;
        this.render();
        switch(this.faceDirection){
            case directions.east:
                this.faceDirection = directions.south;
                break;
            case directions.west  :
                this.faceDirection = directions.north;
                break;
            case directions.north:
                this.faceDirection = directions.east;
                break;
            case directions.south :
                this.faceDirection = directions.west;
                break;
        }
    }
Robot.prototype.move = function() {
        switch(this.faceDirection){
            case directions.east:
                this.x += 5;
                this.render();
                break;
            case directions.west  :
                this.x -= 5;
                this.render();
                break;
            case directions.north:
                this.y -= 5;
                this.render();
                break;
            case directions.south :
                this.y += 5;
                this.render();
                break;
        }
    }
Robot.prototype.render = function() {
        this.el.style.transform = 'rotate(' + this.deg + 'deg)';
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
    }
Transformer.prototype = new Robot();
Transformer.prototype.constructor = Transformer;

function Transformer() {}
Transformer.prototype.transform = function () {
    this.el.style.display = 'none';
}

var robotTrick = new Transformer();
move.addEventListener('click', robotTrick.move.bind(robotTrick));
left.addEventListener('click',robotTrick.turnLeft.bind(robotTrick));
right.addEventListener('click', robotTrick.turnRight.bind(robotTrick));
trans.addEventListener('click', robotTrick.transform.bind(robotTrick));




