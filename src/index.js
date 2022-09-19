const Heading = require('./scripts/heading');
// import Chart from './scripts/graph';
import { config } from './scripts/graph'
import Chart from 'chart.js/auto';

// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     const heading = new Heading('How will your money grow?');

//     root.innerHTML = heading.heading;
// })

document.addEventListener('DOMContentLoaded', () => {
    const lineChart = new Chart(
        document.getElementById('lineChart'),
        config
    );
})