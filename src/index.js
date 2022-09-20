const Heading = require('./scripts/heading');
import { config } from './scripts/graph'
import Chart from 'chart.js/auto';


document.addEventListener('DOMContentLoaded', () => {
    const lineChart = new Chart(
        document.getElementById('lineChart'),
        config
    );
})

