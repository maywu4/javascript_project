import * as Calculations from './calculations.js';
// console.log(Calc.calcValueStocks)
// debugger
// // import { calcValueDueToInflation, calcValueInSavings, calcValueCd, calcValueTreasuryBond, calcValueSP500, calcValueStocks } from './calculations';
// import Chart from 'chart.js/auto';
// // const Calculations = require('./calculations');
// // const Calculations = requrire('')

//source: https://www.chartjs.org/docs/latest/getting-started/


let userInput = 100; //document.getElementById('userInput').value - save the user inputted amount to a variable

const labels = [
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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 5, 9, 12,15],  
        }, 
        {
            label: 'Savings Account',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [Calculations.calcValueInSavings(userInput, 1), Calculations.calcValueInSavings(userInput, 3), Calculations.calcValueInSavings(userInput, 5), Calculations.calcValueInSavings(userInput, 10), Calculations.calcValueInSavings(userInput, 20)],
        }
    ]
}
// // {
// //     label: 'CD(Certificates of Deposits)',
// //     backgroundColor: 'rgb(255, 99, 132)',
// //     borderColor: 'rgb(255, 99, 132)',
// //     data: [calcValueCd(userInput, 1), calcValueCd(userInput, 3), calcValueCd(userInput, 5), calcValueCd(userInput, 10), calcValueCd(userInput, 20)],
// // },
// // {
// //     label: 'U.S. Treasury Bonds',
// //     backgroundColor: 'rgb(255, 99, 132)',
// //     borderColor: 'rgb(255, 99, 132)',
// //     data: [calcValueTreasuryBond(userInput, 1), calcValueTreasuryBond(userInput, 3), calcValueTreasuryBond(userInput, 5), calcValueTreasuryBond(userInput, 10), calcValueTreasuryBond(userInput, 20)],
// // },
// // {
// //     label: 'S&P 500 ETFs',
// //     backgroundColor: 'rgb(255, 99, 132)',
// //     borderColor: 'rgb(255, 99, 132)',
// //     data: [calcValueSP500(userInput, 1), calcValueSP500(userInput, 3), calcValueSP500(userInput, 5), calcValueSP500(userInput, 10), calcValueSP500(userInput, 20)],
// // },
// // {
// //     label: 'Stocks(GOOGL, KO, MFST, APPL, META)',
// //     backgroundColor: 'rgb(255, 99, 132)',
// //     borderColor: 'rgb(255, 99, 132)',
// //     data: [calcValueStocks(userInput, 1), calcValueStocks(userInput, 3), calcValueStocks(userInput, 5), calcValueStocks(userInput, 10), calcValueStocks(userInput, 20)],
// // }
// ]
// };

const config = {
type: 'line',
data: data,
options: {}
};

// // const lineChart = new Chart(
// // document.getElementById('lineChart'),
// // config
// // ); 

// document.addEventListener('DOMContentLoaded', e => {
//     const lineChart = new Chart(
//             document.getElementById('lineChart'),
//             config
//     )
// });
export { config };


