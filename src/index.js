module.exports = function toReadable (number) {
  let numberCollection = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
  80: 'eighty', 90: 'ninety', 0: 'zero'
};
if(number < 20){
    return numberCollection[number];
}
//looking for bit depth of number
let n = number;
let depth = 1;
while(n >= 10){
    depth++;
    n = n / 10;
}
if(depth === 2){
    let lastNumber = number % 10;
    let firstNumber = Math.floor(number / 10) % 10;
    let totalString = numberCollection[firstNumber * 10] + " " + numberCollection[lastNumber];
    if (lastNumber === 0){
        totalString = numberCollection[firstNumber * 10];
      }
    return totalString; 
}
if(depth === 3){
    let lastNumber = number % 10;
    let middleNumber = Math.floor(number / 10) % 10;
    let firstNumber = Math.floor(number / 100) % 10;
    let totalString = numberCollection[firstNumber] + " hundred " + numberCollection[middleNumber * 10] + " " + numberCollection[lastNumber];
    if (lastNumber === 0){
        totalString = numberCollection[firstNumber] + " hundred " + numberCollection[middleNumber * 10];
      }
    if(middleNumber === 0){
        totalString = numberCollection[firstNumber] + " hundred " + numberCollection[lastNumber];
        if (lastNumber === 0){
        totalString = numberCollection[firstNumber] + " hundred"  ;
        }
    }
    if (middleNumber === 1){
        totalString = numberCollection[firstNumber] + " hundred " + numberCollection[middleNumber * 10 + lastNumber];
    }
    return totalString; 
}
}
