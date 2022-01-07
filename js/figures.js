console.log("Hello, world!");
// Square code block
console.group("Square")

// const squareSide = 5;
// console.log("the sides of the square are: " + squareSide + "cm");

function squarePerimeter(side) {
    return (side * 4);
}
// console.log("the perimeter of the square is: " + squarePerimeter() + "cm");

function squareArea(side) {
    return side * side;
}
// console.log("the area of the square is: " + squareArea + "cm^2");

console.groupEnd();
// Triangle code block
console.group("Triangle");

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// console.log("the sides of the triangle are: 1 = " + triangleSide1 + "cm," + " 2 = " + triangleSide2 + "cm," + " 3 = " + triangleBase + "cm");
// const triangleHeight = 5.5;
// console.log("the height of the triangle is: " + triangleHeight + "cm");

function trianglePerimeter(side1, side2, base) {
    return (side1 + side2 + base);
}
// console.log("the perimeter of the triangle is: " + trianglePerimeter + "cm");

function triangleArea(base, height){
    return (base * height) / 2;
}
// console.log("the area of the triangle is: " + triangleArea + "cm^2");

function triangleHeight(side1, side2, base) {
    if ((side1 === side2) && (side1 != base)) {
        const height = Math.sqrt((side1 ** 2) - ((base ** 2) / 4));
        return height;
    } else {
        alert("This triangle is not isosceles")
    }   
}

console.groupEnd();
// Circle code block
console.group("Circle");

// const circleRadius = 4;
function circleDiameter(radius) {
    return radius * 2;
}
// const PI = 3.1415;
const PI = Math.PI;
// console.log("the radius of the circle is: " + circleRadius + "cm");
// console.log("the diameter of the circle is: " + circleDiameter + "cm");
// console.log("PI is: " + PI);

function circlePerimeter(radius) {
    return  circleDiameter(radius) * PI;
}
// console.log("the perimeter of the circle is: " + circlePerimeter + "cm");

function circleArea(radius) {
    return  (radius * radius) * PI; 
}
// console.log("the area of the circle is: " + circleArea + "cm^2");

console.groupEnd();

// Linking with HTML
// Square
function calcSquarePerimeter() {
    const input = document.getElementById("SquareInput");
    const side = input.value;
    const perimeter = squarePerimeter(side);
    const paragraphResult = document.getElementById("resultSquare");
    paragraphResult.innerHTML = `The perimeter of the square is: ${perimeter}`;
}
function calcSquareArea() {
    const input = document.getElementById("SquareInput");
    const side = input.value;
    const area = squareArea(side);
    const paragraphResult = document.getElementById("resultSquare");
    paragraphResult.innerHTML = `The area of the square is: ${area}`;
}
// Triangle
function calcTrianglePerimeter() {
    let input = document.getElementById("TriangleInputSide1");
    const side1 = parseInt(input.value);
    input = document.getElementById("TriangleInputSide2");
    const side2 = parseInt(input.value);
    input = document.getElementById("TriangleInputBase");
    const base = parseInt(input.value);
    const perimeter = trianglePerimeter(side1, side2, base);
    const paragraphResult = document.getElementById("resultTriangle");
    paragraphResult.innerHTML = `The perimeter of the triangle is: ${perimeter}`;
}
function calcTriangleArea() {
    let input = document.getElementById("TriangleInputBase");
    const base = parseInt(input.value);
    input = document.getElementById("TriangleInputHeight");
    const height = parseInt(input.value);
    const area = triangleArea(base,height);
    const paragraphResult = document.getElementById("resultTriangle");
    paragraphResult.innerHTML = `The area of the triangle is: ${area}`;
}
function calcTriangleHeight() {
    let input = document.getElementById("TriangleInputSide1");
    const side1 = parseInt(input.value);
    input = document.getElementById("TriangleInputSide2");
    const side2 = parseInt(input.value);
    input = document.getElementById("TriangleInputBase");
    const base = parseInt(input.value);
    const height = triangleHeight(side1, side2, base);
    const paragraphResult = document.getElementById("resultTriangle");
    paragraphResult.innerHTML = `The heigth of the triangle is: ${height}`;
}
// Circle
function calcCircleDiameter() {
    let input = document.getElementById("CircleInput");
    const radius = parseInt(input.value);
    const diameter = circleDiameter(radius);
    const paragraphResult = document.getElementById("resultCircle");
    paragraphResult.innerHTML = `The diameter of the circle is: ${diameter}`;
}
function calcCirclePerimeter() {
    let input = document.getElementById("CircleInput");
    const radius = parseInt(input.value);
    const perimeter = circlePerimeter(radius);
    const paragraphResult = document.getElementById("resultCircle");
    paragraphResult.innerHTML = `The perimeter of the circle is: ${perimeter}`;
}
function calcCircleArea() {
    let input = document.getElementById("CircleInput");
    const radius = parseInt(input.value);
    const area = circleArea(radius);
    const paragraphResult = document.getElementById("resultCircle");
    paragraphResult.innerHTML = `The area of the circle is: ${area}`;
}