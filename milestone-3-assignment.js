/* Task 1 */
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

/* Task 2 */
