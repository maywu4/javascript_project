import { at } from "core-js/core/string";

function calcValueDueToInflation(input, time) {
    let output = (input)*(1+(-0.0380/1))**(1*time);
    return Math.round(output*100)/100;
}


function calcValueInSavings(input, time) {
    let output = (input)*(1+(.0013/1))**(1*time);
    return Math.round(output*100)/100;
}


function calcValueCd(input, time) {
    let output = (input)*(1+(.0052/1))**(1*time);
    return Math.round(output*100)/100;
}


function calcValueTreasuryBond(input, time) {
    let output = (input)*(1+(.03375/1))**(1*time);
    return Math.round(output*100)/100;
}

function calcValueSP500(input, time) {
    let output = (input)*(1+(.1070/1))**(1*time);
    return Math.round(output*100)/100;
}

function calcValueStocks(input, time) {
    const oneFifthValue = input/5
    const oneYearGrowthEstimates = {'GOOGL': .1560, 'TSLA': .42, 'MSFT': .18, 'APPL': 0.056, 'META': .113} //Source: Yahoo Finance Analysis Estimates 
    const twoToFiveYearGrowthEstimates = {'GOOGL': .1365, 'TSLA': .5228, 'MSFT': .1541, 'APPL': 0.948, 'META': .0490}  //Source: Yahoo Finance Analysis Estimates 
    const FiveYearPlusGrowthEstimates = {'GOOGL': .3020, 'TSLA': .8277, 'MSFT': .2454, 'APPL': 0.2352, 'META': .1728}  //Source: Yahoo Finance Analysis Estimates 
    let gTotal = 0;
    let gTotalArray = [];
    let tTotal = 0;
    let tTotalArray = [];
    let mftTotal = 0;
    let mftTotalArray = [];
    let aTotal = 0;
    let aTotalArray = [];
    let mtaTotal = 0; 
    let mtaTotalArray = [];
    let total = 0 //gTotal + tTotal + mftTotal + aTotal + mtaTotal;


    // if (time <= 1) {
        for (let i = 0; i < 5; i++) {

            let rate = Object.values(oneYearGrowthEstimates)[i];
            let yr2Rate = Object.values(twoToFiveYearGrowthEstimates)[i];
            let yr6Rate = Object.values(FiveYearPlusGrowthEstimates)[i];
            switch (i) {
                case 0:
                    
                    for (let y = 0; y < 20; y++ ) {
                        if (y < 1) {
                            gTotal = oneFifthValue*(1+rate);
                            gTotalArray.push(gTotal)
                        } else if (y>0 && y < 5) {
                            gTotal = gTotal*(1+yr2Rate);
                            gTotalArray.push(gTotal)
                        } else {
                            gTotal = gTotal*(1+yr6Rate);
                            gTotalArray.push(gTotal)
                        }
                    }
                    // gTotal += oneFifthValue*(1+rate);
                    return gTotalArray;
                    break;
            //     case 1:
            //         tTotal += oneFifthValue*(1+rate);
            //         break;
            //     case 2:
            //         mftTotal += oneFifthValue*(1+rate);
            //         break;
            //     case 3:
            //         aTotal += oneFifthValue*(1+rate);
            //         break;
            //     case 4:
            //         mtaTotal += oneFifthValue*(1+rate);
            //         break;
            }
            // total += (oneFifthValue * (1+rate))
        }
    // }
    // return total
};
// individual stock calcs

// } else if (1 < time <= 5) {
//     // loop to calculate year 1 total
//     for (let i = 0; i < 5; i++) {
//         let yrOneRate = Object.values(oneYearGrowthEstimates)[i]
//         total += oneFifthValue*(1+yrOneRate)
//     }
//     // loop to calculate year 2+ total, new growth rates


// }