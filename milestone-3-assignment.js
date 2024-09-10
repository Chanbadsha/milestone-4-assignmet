function calculateTax(income, expenses) {
  if (
    income < 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid input";
  }

  let profit = income - expenses;
  let tax = profit * (20 / 100);
  return tax;
}



function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid email";
  }
  let emailInput = email.split("@");
  let userName = emailInput[0];
  let domainName = emailInput[1];
  let returnMsg = `${userName} sent you an email from ${domainName}`;
  return returnMsg;
}



function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid input";
  }
  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }
  return false;
}



function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  } else if (
    typeof obj.name === "string" &&
    typeof obj.schoolGrade === "number" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    obj.schoolGrade <= 30
  ) {
    if (obj.isFFarmer) {
      const isFarmerScore = 20;
      totalMarks = obj.testScore + obj.schoolGrade + isFarmerScore;
      if (totalMarks >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      let totalMarks = obj.testScore + obj.schoolGrade;
      if (totalMarks >= 80) {
        return true;
      } else {
        return false;
      }
    }
  }
}


function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  } else {
    let totalTime = 0;
    let vivaCompletePerson = waitingTimes.length;
    for (const waitingTime of waitingTimes) {
      let sum = totalTime + waitingTime;
      totalTime = sum;
    }
    let avgTime = Math.round(totalTime / vivaCompletePerson);

    let evaTime = (serialNumber - vivaCompletePerson - 1) * avgTime;
    return evaTime;
  }
}


// Example usage of calculateTax
console.log(calculateTax(1500, 500)); // Should return 200 ((1500 - 500) * 0.20)
console.log(calculateTax(800, 900));  // Should return "Invalid input" (expenses exceed income)

// Example usage of sendNotification
console.log(sendNotification("jane.doe@domain.com")); // Should return "jane.doe sent you an email from domain.com"
console.log(sendNotification("admin@website.org")); // Should return "admin sent you an email from website.org"
console.log(sendNotification("no-at-sign.com")); // Should return "Invalid email"

// Example usage of checkDigitsInName
console.log(checkDigitsInName("Alex42")); // Should return true (contains digits)
console.log(checkDigitsInName("Sophia")); // Should return false (no digits)
console.log(checkDigitsInName("123456")); // Should return true (contains only digits)

// Example usage of calculateFinalScore
console.log(calculateFinalScore({ name: "David", schoolGrade: 28, testScore: 30, isFFarmer: false })); // Should return true (58 >= 80)
console.log(calculateFinalScore({ name: "Eva", schoolGrade: 10, testScore: 45, isFFarmer: true })); // Should return false (55 < 80)
console.log(calculateFinalScore({ name: "Tom", schoolGrade: 25, testScore: 30, isFFarmer: true })); // Should return true (75 + 20 = 95 >= 80)

// Example usage of waitingTime
console.log(waitingTime([5, 15, 25], 10)); // Should return (10 - 3 - 1) * (45 / 3) = 6 * 15
