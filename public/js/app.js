const app = {
  taxes: 0.22,

  init: () => {
    app.bindEvents();
  },

  calculateNetSalary: (grossSalary) => {
    const netSalary = grossSalary * (1 - app.taxes);
    return Math.round(netSalary);
  },

  calculateGrossSalary: (netSalary) => {
    const grossSalary = netSalary / (1 - app.taxes);
    return Math.round(grossSalary);
  },

  bindEvents: () => {
    const grossInput = document.querySelector('#gross_input');
    grossInput.addEventListener('input', app.updateNetSalary);

    const netInput = document.querySelector('#net_input');
    netInput.addEventListener('input', app.updateGrossSalary);
  },

  updateNetSalary: (evt) => {
    const grossInput = evt.target;
    const netSalarySpan = document.querySelector('#net_salary');
    const grossSalarySpan = document.querySelector('#gross_salary');

    netSalarySpan.textContent = app.calculateNetSalary(grossInput.value);
    grossSalarySpan.textContent = grossInput.value;
  },

  updateGrossSalary: (evt) => {
    const netInput = evt.target;
    const netSalarySpan = document.querySelector('#net_salary');
    const grossSalarySpan = document.querySelector('#gross_salary');

    grossSalarySpan.textContent = app.calculateGrossSalary(netInput.value);
    netSalarySpan.textContent = netInput.value;
  },
};

window.addEventListener('load', () => {
  app.init();
});
