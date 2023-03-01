const app = {
  taxes: 0.22,
  annualGrossSalary: 0,
  annualNetSalary: 0,
  monthlyGrossSalary: 0,
  monthlyNetSalary: 0,

  init: () => {
    console.log('App initialized!');
    converter.init();
    app.bindEvents();
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

    if (id.includes('annual_gross')) {
      app.annualGrossSalary = input.value;
      app.annualNetSalary = converter.calculateAnnualNetSalary(app.annualGrossSalary);
      app.monthlyGrossSalary = converter.annualSalaryToMonthly(app.annualGrossSalary);
      app.monthlyNetSalary = converter.annualSalaryToMonthly(app.annualNetSalary);
    } else if (id.includes('annual_net')) {
      app.annualNetSalary = input.value;
      app.annualGrossSalary = converter.calculateAnnualGrossSalary(app.annualNetSalary);
      app.monthlyGrossSalary = converter.annualSalaryToMonthly(app.annualGrossSalary);
      app.monthlyNetSalary = converter.annualSalaryToMonthly(app.annualNetSalary);
    } else if (id.includes('monthly_gross')) {
      app.monthlyGrossSalary = input.value;
      app.annualGrossSalary = converter.monthlySalaryToAnnual(app.monthlyGrossSalary);
      app.annualNetSalary = converter.calculateAnnualNetSalary(app.annualGrossSalary);
      app.monthlyNetSalary = converter.annualSalaryToMonthly(app.annualNetSalary);
    } else if (id.includes('monthly_net')) {
      app.monthlyNetSalary = input.value;
      app.annualNetSalary = converter.monthlySalaryToAnnual(app.monthlyNetSalary);
      app.annualGrossSalary = converter.calculateAnnualGrossSalary(app.annualNetSalary);
      app.monthlyGrossSalary = converter.annualSalaryToMonthly(app.annualGrossSalary);
    }

    app.updateSalariesDisplay();
  },

  updateSalariesDisplay: () => {
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
