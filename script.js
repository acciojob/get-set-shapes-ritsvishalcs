//complete this code
class Rectangle {
	 constructor(width,height){
        this._width = width;
        this._height = height;
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height;
    }
    getArea(){
        return this.width * this.height;
    }
}
class Square extends Animal { constructor(side){
        super(side, side);
    }
    getPerimeter(){
        return this.width * 4;
}}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
