function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let savings = 0;
  let result = [];

  for (let month = 0;;month++){
    if (oldCarPrice + savings >= newCarPrice){
      result.push(month, Math.round((oldCarPrice + savings) - newCarPrice));
      return result;
    } else {
      savings += savingperMonth;
      oldCarPrice -= oldCarPrice * percentLossByMonth / 100;
      newCarPrice -= newCarPrice * percentLossByMonth / 100;
    }
    if (month % 2 === 0) {
      percentLossByMonth += 0.5;
    }
  }
}

nbMonths(2000, 8000, 1000, 1.5); // [6, 766]