let numOne = 1;
let stringOne = "1";
let numThirty = 30;
let stringThirty = "30";
let numTen = 10;
let stringTen = "10";

if (numOne !== stringOne) {
	console.log("As variáveis numOne e stringOne tem o mesmo valor, mas tem tipos diferentes")
	console.log(numOne !== stringOne);
} else {
	console.log("As variáveis numOne e stringOne não tem o mesmo valor");
	console.log(numOne !== stringOne);
}

if (numThirty !== stringThirty) {
	console.log("As variáveis numThirty e stringThirty não tem o mesmo tipo");
	console.log(numThirty !== stringThirty);
} else {
	console.log("As variáveis numThirty e stringThirty tem o mesmo valor e mesmo tipo")
	console.log(numThirty !== stringThirty);
}

if (numTen == stringTen) {
	console.log("As variáveis numTen e stringTen tem o mesmo valor, mas tipos diferentes")
	console.log(numTen == stringTen);
} else {
	console.log("As variáveis numTen e stringTen não tem o mesmo valor");
	console.log(numTen == stringTen);
}