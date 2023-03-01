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

    const netInput = document.querySelector('#net_input');
    const netSalarySpan = document.querySelector('#net_salary');
    const grossSalarySpan = document.querySelector('#gross_salary');

    if (grossInput.value === '') {
      grossInput.value = '0';
      netInput.value = '0';
      netSalarySpan.textContent = '0';
      grossSalarySpan.textContent = '0';
      return;
    }

    const netSalary = app.calculateNetSalary(grossInput.value);

    netInput.value = netSalary;
    netSalarySpan.textContent = netSalary;
    grossSalarySpan.textContent = grossInput.value;
  },

  updateGrossSalary: (evt) => {
    const netInput = evt.target;

    const grossInput = document.querySelector('#gross_input');
    const netSalarySpan = document.querySelector('#net_salary');
    const grossSalarySpan = document.querySelector('#gross_salary');

    if (netInput.value === '') {
      netInput.value = '0';
      grossInput.value = '0';
      netSalarySpan.textContent = '0';
      grossSalarySpan.textContent = '0';
      return;
    }

    const grossSalary = app.calculateGrossSalary(netInput.value);

    grossInput.value = grossSalary;
    grossSalarySpan.textContent = grossSalary;
    netSalarySpan.textContent = netInput.value;
  },
};

window.addEventListener('load', () => {
  app.init();
});
