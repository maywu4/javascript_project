


function Heading(text) {
    this.text = text
    this.heading = `<h2>${this.text}</h2>`
}



module.exports = Heading;

import Chart from 'chart.js/auto';

const labels = [
    '1 year',
    '3 years',
    '5 years',
    '10 years',
    '20 years',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Values Based on Investments',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45], // update numbers to variables => pulling from util?
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const lineChart = new Chart(
    document.getElementById('lineChart'),
    config
  );