console.log("=== EXCERCISE 1: VARIABLES and Data types ===");

const fullname = "Raymond";
let age = 22;
var isEnrolled = true;

console.log("Value:", fullName, "| Type:", typeof fullName);
console.log("Value:", age, "| Type:", typeof age);
console.log("Value:", isEnrolled, "|Type:", typeof isEnrolled);


console.log("\n=== EXERCISE 2: Operators and Type Coercion ===");

const strNUM = "5";
const actualNum = 10;

const additionResult = strNUM + actualNum;
console.log('"5" + 10 = "${additionResult}" (Type: ${typeof additionResult})');

const multiplicationResult = strNUM * actualNum;
console.log('"5" * 10 = ${multiplicationResult} (Type: ${typeof multiplicationResult})');

console.log("\n=== EXERCISE 3: Movie Ticket Pricing ===");

function getTicketPrice(buyerAge) {
    let ticketCategory;

    if (buyerAge < 5) {
        ticketCategory = "Free Entry";
    }else if (buyerAge >= 5 && buyerAge <= 17) {
        ticketCategory = "Child Discount ($8)";
    } else if (buyerAge >= 18 && buyerAge <= 64) {
    ticketCategory = "Full Price ($15)";
  } else if (buyerAge >= 65) {
    ticketCategory = "Senior Discount ($10)";
  } else {
    ticketCategory = "Invalid Age Provided";
  }

  return ticketCategory;
}

console.log("Age 3 Ticket:", getTicketPrice(3));   
console.log("Age 14 Ticket:", getTicketPrice(14)); 
console.log("Age 30 Ticket:", getTicketPrice(30));
console.log("Age 70 Ticket:", getTicketPrice(70)); 




console.log("\n=== EXERCISE 4: Ternary Operator ===");

let accountBalance = -12.50;


const accountStatus = accountBalance < 0 ? "Account Overdrawn" : "Account Active";

console.log(`Balance: $${accountBalance} -> Status: "${accountStatus}"`);


console.log("\n=== EXERCISE 5: Comprehensive Grade Calculator ===");

function calculateGrade(numericScore) {
  
  if (numericScore < 0 || numericScore > 100 || typeof numericScore !== "number") {
    return "Invalid score";
  }

  let letterGrade;

  
  switch (true) {
    case (numericScore >= 90):
      letterGrade = "A";
      break;
    case (numericScore >= 80):
      letterGrade = "B";
      break;
    case (numericScore >= 70):
      letterGrade = "C";
      break;
    case (numericScore >= 60):
      letterGrade = "D";
      break;
    default:
      letterGrade = "F";
      break;
  }

  return `Score: ${numericScore}/100 -> Grade: ${letterGrade}`;
}


console.log(calculateGrade(95)); 
console.log(calculateGrade(83)); 
console.log(calculateGrade(71)); 
console.log(calculateGrade(64));
console.log(calculateGrade(48)); 

