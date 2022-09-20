import { Chart } from 'chart.js';
import * as Calculations from './calculations.js';
import lineChart from '../index'

//source: https://www.chartjs.org/docs
let userInput = 0  

// document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('input');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let amount = document.getElementById('inputAmount').value
        userInput = parseInt(amount);
        lineChart.data.datasets = [
            {
                label: 'Inflation',
                backgroundColor: '#b4cd93',
                borderColor: '#b4cd93',
                data: [Math.floor(userInput), Calculations.calcValueDueToInflation(userInput, 1), Calculations.calcValueDueToInflation(userInput, 3), Calculations.calcValueDueToInflation(userInput, 5), Calculations.calcValueDueToInflation(userInput, 10), Calculations.calcValueDueToInflation(userInput, 20)],
            },
            {
                label: 'Savings Account',
                backgroundColor: '#a7d7c5',
                borderColor: '#a7d7c5',
                data: [Math.floor(userInput), Calculations.calcValueInSavings(userInput, 1), Calculations.calcValueInSavings(userInput, 3), Calculations.calcValueInSavings(userInput, 5), Calculations.calcValueInSavings(userInput, 10), Calculations.calcValueInSavings(userInput, 20)],
            },
            {
                label: 'CDs(Certificates of Deposit)',
                backgroundColor: '#74b49b',
                borderColor: '#74b49b',
                data: [Math.floor(userInput), Calculations.calcValueCd(userInput, 1), Calculations.calcValueCd(userInput, 3), Calculations.calcValueCd(userInput, 5), Calculations.calcValueCd(userInput, 10), Calculations.calcValueCd(userInput, 20)],
            },
            {
                label: 'U.S. Treasury Bonds',
                backgroundColor: '#5c8d89',
                borderColor: '#5c8d89',
                data: [Math.floor(userInput), Calculations.calcValueTreasuryBond(userInput, 1), Calculations.calcValueTreasuryBond(userInput, 3), Calculations.calcValueTreasuryBond(userInput, 5), Calculations.calcValueTreasuryBond(userInput, 10), Calculations.calcValueTreasuryBond(userInput, 20)],
            },
            {
                label: 'S&P 500 ETFs',
                backgroundColor: '#427a5b',
                borderColor: '#427a5b',
                data: [Math.floor(userInput), Calculations.calcValueSP500(userInput, 1), Calculations.calcValueSP500(userInput, 3), Calculations.calcValueSP500(userInput, 5), Calculations.calcValueSP500(userInput, 10), Calculations.calcValueSP500(userInput, 20)],
            },
            {
                label: 'Stocks(GOOGL, KO, MFST, APPL, META)',
                backgroundColor: '#118C4F',
                borderColor: '#118C4F',
                data: [Math.floor(userInput), Calculations.calcValueStocks(userInput, 1), Calculations.calcValueStocks(userInput, 3), Calculations.calcValueStocks(userInput, 5), Calculations.calcValueStocks(userInput, 10), Calculations.calcValueStocks(userInput, 20)],
            }
        ]
        lineChart.update();
    })
// });


const labels = [
    'Now',
    '1 year',
    '3 years',
    '5 years',
    '10 years',
    '20 years',
  ];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Inflation',
            backgroundColor: '#b4cd93',
            borderColor: '#b4cd93',
            data: [Math.floor(userInput), Calculations.calcValueDueToInflation(userInput, 1), Calculations.calcValueDueToInflation(userInput, 3), Calculations.calcValueDueToInflation(userInput, 5), Calculations.calcValueDueToInflation(userInput, 10), Calculations.calcValueDueToInflation(userInput, 20)],  
        }, 
        {
            label: 'Savings Account',
            backgroundColor: '#a7d7c5',
            borderColor: '#a7d7c5',
            data: [Math.floor(userInput), Calculations.calcValueInSavings(userInput, 1), Calculations.calcValueInSavings(userInput, 3), Calculations.calcValueInSavings(userInput, 5), Calculations.calcValueInSavings(userInput, 10), Calculations.calcValueInSavings(userInput, 20)],
        },
        {
            label: 'CDs(Certificates of Deposit)',
            backgroundColor: '#74b49b',
            borderColor: '#74b49b',
            data: [Math.floor(userInput), Calculations.calcValueCd(userInput, 1), Calculations.calcValueCd(userInput, 3), Calculations.calcValueCd(userInput, 5), Calculations.calcValueCd(userInput, 10), Calculations.calcValueCd(userInput, 20)],
        },
        {
            label: 'U.S. Treasury Bonds',
            backgroundColor: '#5c8d89',
            borderColor: '#5c8d89',
            data: [Math.floor(userInput), Calculations.calcValueTreasuryBond(userInput, 1), Calculations.calcValueTreasuryBond(userInput, 3), Calculations.calcValueTreasuryBond(userInput, 5), Calculations.calcValueTreasuryBond(userInput, 10), Calculations.calcValueTreasuryBond(userInput, 20)],
        },
        {
            label: 'S&P 500 ETFs',
            backgroundColor: '#427a5b',
            borderColor: '#427a5b',
            data: [Math.floor(userInput), Calculations.calcValueSP500(userInput, 1), Calculations.calcValueSP500(userInput, 3), Calculations.calcValueSP500(userInput, 5), Calculations.calcValueSP500(userInput, 10), Calculations.calcValueSP500(userInput, 20)],
        },
        {
            label: 'Stocks(GOOGL, KO, MFST, APPL, META)',
            backgroundColor: '#118C4F',
            borderColor: '#118C4F',
            data: [Math.floor(userInput), Calculations.calcValueStocks(userInput, 1), Calculations.calcValueStocks(userInput, 3), Calculations.calcValueStocks(userInput, 5), Calculations.calcValueStocks(userInput, 10), Calculations.calcValueStocks(userInput, 20)],
        }
    ]
};

const config = {
type: 'line',
data: data,
options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time',
          color: '#505050',
          font: {
            lineHeight: 2.0,
            family: 'Times New Roman',
            size: 24
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: '#505050',
          font: {
            lineHeight: 2.0,
            family: 'Times New Roman',
            size: 24
          }
        }
      }
    }, 
    plugins: {
        legend: {
            position: 'right'
        },
        title: {
            display: true,
            text: 'Growth by Investments Line Graph',
            color: '#505050',
            font: {
                lineHeight: 2.0,
                family: 'Times New Roman',
                size: 36
              }
        }
    }, 
  }
};



export { config };


