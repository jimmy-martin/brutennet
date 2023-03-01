const app = {
  taxes: 0.22,
  annualGrossSalary: 0,
  annualNetSalary: 0,
  monthlyGrossSalary: 0,
  monthlyNetSalary: 0,

  init: () => {
    app.bindEvents();
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

  bindEvents: () => {
    const annualGrossInput = document.querySelector('#annual_gross_input');
    annualGrossInput.addEventListener('input', app.updateSalary);
    const monthlyGrossInput = document.querySelector('#monthly_gross_input');
    monthlyGrossInput.addEventListener('input', app.updateSalary);

    const annualNetInput = document.querySelector('#annual_net_input');
    annualNetInput.addEventListener('input', app.updateSalary);
    const monthlyNetInput = document.querySelector('#monthly_net_input');
    monthlyNetInput.addEventListener('input', app.updateSalary);
  },

  updateSalary: (evt) => {
    const input = evt.target;
    const id = input.id;

    if (input.value === '') {
      app.annualGrossSalary = 0;
      app.annualNetSalary = 0;
      app.monthlyGrossSalary = 0;
      app.monthlyNetSalary = 0;
    } else {
      if (id.includes('annual_gross')) {
        app.annualGrossSalary = input.value;
        app.annualNetSalary = app.calculateAnnualNetSalary(app.annualGrossSalary);
        app.monthlyGrossSalary = app.annualSalaryToMonthly(app.annualGrossSalary);
        app.monthlyNetSalary = app.annualSalaryToMonthly(app.annualNetSalary);
      } else if (id.includes('annual_net')) {
        app.annualNetSalary = input.value;
        app.annualGrossSalary = app.calculateAnnualGrossSalary(app.annualNetSalary);
        app.monthlyGrossSalary = app.annualSalaryToMonthly(app.annualGrossSalary);
        app.monthlyNetSalary = app.annualSalaryToMonthly(app.annualNetSalary);
      } else if (id.includes('monthly_gross')) {
        app.monthlyGrossSalary = input.value;
        app.annualGrossSalary = app.monthlySalaryToAnnual(app.monthlyGrossSalary);
        app.annualNetSalary = app.calculateAnnualNetSalary(app.annualGrossSalary);
        app.monthlyNetSalary = app.annualSalaryToMonthly(app.annualNetSalary);
      } else if (id.includes('monthly_net')) {
        app.monthlyNetSalary = input.value;
        app.annualNetSalary = app.monthlySalaryToAnnual(app.monthlyNetSalary);
        app.annualGrossSalary = app.calculateAnnualGrossSalary(app.annualNetSalary);
        app.monthlyGrossSalary = app.annualSalaryToMonthly(app.annualGrossSalary);
      }
    }

    app.updateSalariesDisplay();
  },

  updateSalariesDisplay: () => {
    const annualGrossSalarySpan = document.querySelector('#annual_gross_salary');
    const annualNetSalarySpan = document.querySelector('#annual_net_salary');
    const monthlyGrossSalarySpan = document.querySelector('#monthly_gross_salary');
    const monthlyNetSalarySpan = document.querySelector('#monthly_net_salary');

    annualGrossSalarySpan.textContent = app.annualGrossSalary;
    annualNetSalarySpan.textContent = app.annualNetSalary;
    monthlyGrossSalarySpan.textContent = app.monthlyGrossSalary;
    monthlyNetSalarySpan.textContent = app.monthlyNetSalary;

    const annualGrossInput = document.querySelector('#annual_gross_input');
    const annualNetInput = document.querySelector('#annual_net_input');
    const monthlyGrossInput = document.querySelector('#monthly_gross_input');
    const monthlyNetInput = document.querySelector('#monthly_net_input');

    annualGrossInput.value = app.annualGrossSalary;
    annualNetInput.value = app.annualNetSalary;
    monthlyGrossInput.value = app.monthlyGrossSalary;
    monthlyNetInput.value = app.monthlyNetSalary;
  },
};

window.addEventListener('load', () => {
  app.init();
});
