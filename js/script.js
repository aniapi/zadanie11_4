$(function(){
	//this code will execute after the DOM is loaded
});

function Phone(brand, price, system, color) {
    this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.system = system;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", operating system is " + this.system +" and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "iOS", "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1900, "Android", "black");
var OnePlusOne = new Phone("One Plus", 1500, "Android", "white");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();