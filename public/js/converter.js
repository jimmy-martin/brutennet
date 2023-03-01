const converter = {
  init: () => {
    console.log('Converter initialized!');
  },

  calculateAnnualNetSalary: (annualGrossSalary) => {
    const annualNetSalary = annualGrossSalary * (1 - app.taxes);
    return Math.round(annualNetSalary);
  },

  calculateAnnualGrossSalary: (annualNetSalary) => {
    const annualGrossSalary = annualNetSalary / (1 - app.taxes);
    return Math.round(annualGrossSalary);
  },

  annualSalaryToMonthly: (annualSalary) => {
    const monthlySalary = annualSalary / 12;
    return Math.round(monthlySalary);
  },

  monthlySalaryToAnnual: (monthlySalary) => {
    const annualSalary = monthlySalary * 12;
    return Math.round(annualSalary);
  },
};
