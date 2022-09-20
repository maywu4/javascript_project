// import { at } from "core-js/core/string";

export const calcValueDueToInflation= function (input, time) {
    //source for avg annual inflation rate: https://www.worlddata.info/america/usa/inflation-rates.php
    let output = (input)*(1+(-0.0380/1))**(1*time);
    return Math.round(output*100)/100;
}


export const calcValueInSavings = function(input, time) {
    //source for avg savings account interest rate: https://smartasset.com/checking-account/average-savings-account-interest
    let output = (input)*(1+(.0013/1))**(1*time);
    return Math.round(output*100)/100;
}


export const calcValueCd = function (input, time) {
    //source for avg one-year CD APY: https://www.bankrate.com/banking/cds/historical-cd-interest-rates/
    let output = (input)*(1+(.0052/1))**(1*time);
    return Math.round(output*100)/100;
}


export const calcValueTreasuryBond = function (input, time) {
    //source for 20yr U.S. Treasury Bonds interest rate: https://www.treasurydirect.gov/instit/annceresult/annceresult.htm 
    let output = (input)*(1+(.03375/1))**(1*time);
    return Math.round(output*100)/100;
}

export const calcValueSP500 = function (input, time) {
    //source for S&P 500 annual growth rate: https://www.fool.com/investing/how-to-invest/index-funds/average-return/
    let output = (input)*(1+(.1070/1))**(1*time);
    return Math.round(output*100)/100;
}

export const calcValueStocks = function (input, time) {
    // GOOGL growth rates: https://finance.yahoo.com/quote/GOOGL/analysis?p=GOOGL
    // OK growth rates: https://finance.yahoo.com/quote/KO/analysis?p=KO
    // MSFT growth rates: https://finance.yahoo.com/quote/MSFT/analysis?p=MSFT
    // AAPL growth rates: https://finance.yahoo.com/quote/AAPL/analysis?p=AAPL
    // META growth rates: https://finance.yahoo.com/quote/META/analysis?p=META

    const oneFifthValue = input/5
    const oneYearGrowthEstimates = {'GOOGL': .1560, 'KO': .057, 'MSFT': .18, 'APPL': 0.056, 'META': .113} //Source: Yahoo Finance Analysis Estimates 
    const twoToFiveYearGrowthEstimates = {'GOOGL': .1365, 'KO': .055, 'MSFT': .1541, 'APPL': 0.0948, 'META': .0490}  //Source: Yahoo Finance Analysis Estimates 
    const fiveYearPlusGrowthEstimates = {'GOOGL': .3020, 'KO': .0453, 'MSFT': .2454, 'APPL': 0.2352, 'META': .1728}  //Source: Yahoo Finance Analysis Estimates 
    let gTotal = 0;
    let gTotalArray = [];
    let cTotal = 0;
    let cTotalArray = [];
    let mftTotal = 0;
    let mftTotalArray = [];
    let aTotal = 0;
    let aTotalArray = [];
    let mtaTotal = 0; 
    let mtaTotalArray = [];
    // let total = 0 //gTotal + cTotal + mftTotal + aTotal + mtaTotal;


 
    for (let i = 0; i < 5; i++) {

        let rate = Object.values(oneYearGrowthEstimates)[i];
        let yr2Rate = Object.values(twoToFiveYearGrowthEstimates)[i];
        let yr6Rate = Object.values(fiveYearPlusGrowthEstimates)[i];
        switch (i) {
            case 0:
                
                for (let y = 1; y <= 20; y++ ) {
                    if (y < 2) {
                        gTotal = oneFifthValue*(1+rate);
                        gTotalArray.push(Math.round(gTotal*100)/100)
                    } else if (y>1 && y < 6) {
                        gTotal = gTotal*(1+yr2Rate);
                        gTotalArray.push(Math.round(gTotal*100)/100)
                    } else {
                        gTotal = gTotal*(1+yr6Rate);
                        gTotalArray.push(Math.round(gTotal*100)/100)
                    }
                }

                //return gTotalArray;
                break;

            case 1:
                for (let y = 1; y <= 20; y++ ) {
                    if (y < 2) {
                        cTotal = oneFifthValue*(1+rate);
                        cTotalArray.push(Math.round(cTotal*100)/100)
                    } else if (y>1 && y < 6) {
                        cTotal = cTotal*(1+yr2Rate);
                        cTotalArray.push(Math.round(cTotal*100)/100)
                    } else {
                        cTotal = cTotal*(1+yr6Rate);
                        cTotalArray.push(Math.round(cTotal*100)/100)
                    }
                }
                break;
            case 2:
                for (let y = 1; y <= 20; y++ ) {
                    if (y < 2) {
                        mftTotal = oneFifthValue*(1+rate);
                        mftTotalArray.push(Math.round(mftTotal*100)/100)
                    } else if (y>1 && y < 6) {
                        mftTotal = mftTotal*(1+yr2Rate);
                        mftTotalArray.push(Math.round(mftTotal*100)/100)
                    } else {
                        mftTotal = mftTotal*(1+yr6Rate);
                        mftTotalArray.push(Math.round(mftTotal*100)/100)
                    }
                }
                break;
            case 3:
                for (let y = 1; y <= 20; y++ ) {
                    if (y < 2) {
                        aTotal = oneFifthValue*(1+rate);
                        aTotalArray.push(Math.round(aTotal*100)/100)
                    } else if (y>1 && y < 6) {
                        aTotal = aTotal*(1+yr2Rate);
                        aTotalArray.push(Math.round(aTotal*100)/100)
                    } else {
                        aTotal = aTotal*(1+yr6Rate);
                        aTotalArray.push(Math.round(aTotal*100)/100)
                    }
                }
                break;
            case 4:
                for (let y = 1; y <= 20; y++ ) {
                    if (y < 2) {
                        mtaTotal = oneFifthValue*(1+rate);
                        mtaTotalArray.push(Math.round(mtaTotal*100)/100)
                    } else if (y>1 && y < 6) {
                        mtaTotal = mtaTotal*(1+yr2Rate);
                        mtaTotalArray.push(Math.round(mtaTotal*100)/100)
                    } else {
                        mtaTotal = mtaTotal*(1+yr6Rate);
                        mtaTotalArray.push(Math.round(mtaTotal*100)/100)
                    }
                }
                break;
        }

    }
    // return [gTotalArray, cTotalArray, mftTotalArray, aTotalArray, mtaTotalArray]
    const lastIdx = time-1;
    let total = gTotalArray[lastIdx] + cTotalArray[lastIdx] + mftTotalArray[lastIdx] + aTotalArray[lastIdx] + mtaTotalArray[lastIdx];
    return Math.round(total*100)/100;

};

