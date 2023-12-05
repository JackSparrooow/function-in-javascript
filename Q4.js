
function calculateTax(income) {
    // Define the tax rate (as a decimal)
    const taxRate = 0.1; // 20%
  
    // Calculate the tax amount
    const taxAmount = income * taxRate;
  
    // Calculate the net income (income after tax)
    const netIncome = income - taxAmount;
  
    // Return the result
    return {
      income: income,
      taxAmount: taxAmount,
      netIncome: netIncome
    };
  }
  
  // Example usage:
  const income = 100000; // Replace with the desired income
  const result = calculateTax(income);
  
  console.log(`Income: INR:- ${result.income}`);
  console.log(`Tax Amount: INR:-${result.taxAmount}`);
  console.log(`Net Income: INR:-${result.netIncome}`);
  

//   ---------------------------------------------------------

  