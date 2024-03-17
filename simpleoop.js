class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(this.x * this.y + this.y * this.y);
    }
}


let p = new Point(10,71);

p.distance();

console.log(p);