module.exports = function toReadable (number) {
    const units_and_teens = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" 
    ];
    const tens = [    
        "", "",  // для учета случаев когда десятки = 0 (не прописывается) или 1 (учтено как 10)
        "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    if (number < 20) {
        return units_and_teens[number];
    }

    if (number < 100) {
        const tensNum = Math.floor(number / 10);
        const unitsNum = number % 10;
        return tens[tensNum] + (unitsNum ? ' ' + units_and_teens[unitsNum] : '');
    }

    if (number < 1000) {
        const hundredsNum = Math.floor(number / 100);
        const remainder = number % 100;
        return units_and_teens[hundredsNum] + ' hundred' + (remainder ? ' ' + toReadable(remainder) : '');
    }
    return '';
}
