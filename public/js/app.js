const app = {
  taxes: 0.22,

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

  bindEvents: () => {
    const annualGrossInput = document.querySelector('#gross_input');
    annualGrossInput.addEventListener('input', app.updateAnnualNetSalary);

    const annualNetInput = document.querySelector('#net_input');
    annualNetInput.addEventListener('input', app.updateAnnualGrossSalary);
  },

  updateAnnualNetSalary: (evt) => {
    const annualGrossInput = evt.target;

    const annualNetInput = document.querySelector('#net_input');
    const annualNetSalarySpan = document.querySelector('#net_salary');
    const annualGrossSalarySpan = document.querySelector('#gross_salary');

    if (annualGrossInput.value === '') {
      annualGrossInput.value = '0';
      annualNetInput.value = '0';
      annualNetSalarySpan.textContent = '0';
      annualGrossSalarySpan.textContent = '0';
      return;
    }

    const annualNetSalary = app.calculateAnnualNetSalary(annualGrossInput.value);

    annualNetInput.value = annualNetSalary;
    annualNetSalarySpan.textContent = annualNetSalary;
    annualGrossSalarySpan.textContent = annualGrossInput.value;
  },

  updateAnnualGrossSalary: (evt) => {
    const annualNetInput = evt.target;

    const annualGrossInput = document.querySelector('#gross_input');
    const annualNetSalarySpan = document.querySelector('#net_salary');
    const annualGrossSalarySpan = document.querySelector('#gross_salary');

    if (annualNetInput.value === '') {
      annualNetInput.value = '0';
      annualGrossInput.value = '0';
      annualNetSalarySpan.textContent = '0';
      annualGrossSalarySpan.textContent = '0';
      return;
    }

    const annualGrossSalary = app.calculateAnnualGrossSalary(annualNetInput.value);

    annualGrossInput.value = annualGrossSalary;
    annualGrossSalarySpan.textContent = annualGrossSalary;
    annualNetSalarySpan.textContent = annualNetInput.value;
  },
};

window.addEventListener('load', () => {
  app.init();
});
