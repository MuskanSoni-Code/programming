const unit = 50;
let rate = 0;
let percentage = 0;

if (unit <= 100) {
  rate = 5;
  percentage = 3;
} 
else if (unit <= 200) {
  rate = 7;
  percentage = 2;
} 
else if (unit <= 500) {
  rate = 10;
  percentage = 1.5;
} 
else {
  rate = 15;
}
let total = unit * rate;
const discount = (total / 100) * percentage;
const finalAmount = total - discount + 100; // extra fee

console.log("----------------------------------");
console.log("           ELECTRIC BILL           ");
console.log("----------------------------------");
console.log(`Units Consumed   : ${unit}`);
console.log(`Rate per Unit    : ₹${rate}`);
console.log(`Total Amount     : ₹${total}`);
console.log(`Discount (${percentage}%) : -₹${discount}`);
console.log(`Extra Charge     : ₹100`);
console.log("----------------------------------");
console.log(`Final Bill       : ₹${finalAmount}`);
console.log("----------------------------------");
