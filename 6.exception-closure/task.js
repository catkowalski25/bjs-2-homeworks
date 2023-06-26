function parseCount(strToParse){
    let result = parseFloat(strToParse);
    if (Number.isNaN(result)) {
        throw Error("Невалидное значение");
    }
    return result;
}

function validateCount(strToParse) {
    let result;
    try {
        result = parseCount(strToParse); 
    } catch (error) {
        result = error;
    }
    return result;
}

class Triangle {
    constructor (a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw Error('Треугольник с такими сторонами не существует');
        }
    }
    
    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area(){
        const p = this.perimeter / 2;
        const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(square.toFixed(3))
    }
}

function getTriangle(a,b,c) {
    let result;
    try {
        result = new Triangle(a,b,c);
    } catch (error) {
        result = {
            get area() {return "Ошибка! Треугольник не существует"},
            get perimeter() {return "Ошибка! Треугольник не существует"}
        }   
    }
    return result;
}