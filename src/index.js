module.exports = function toReadable (number) {
  let readNums = new Map();

  readNums.set(0, "zero")
          .set(1, "one")
          .set(2, "two")
          .set(3, "three")
          .set(4, "four")
          .set(5, "five")
          .set(6, "six")
          .set(7, "seven")
          .set(8, "eight")
          .set(9, "nine")
          .set(10, "ten")
          .set(11, "eleven")
          .set(12, "twelve")
          .set(13, "thirteen")
          .set(14, "fourteen")
          .set(15, "fifteen")
          .set(16, "sixteen")
          .set(17, "seventeen")
          .set(18, "eighteen")
          .set(19, "nineteen")
          .set(20, "twenty")
          .set(30, "thirty")
          .set(40, "forty")
          .set(50, "fifty")
          .set(60, "sixty")
          .set(70, "seventy")
          .set(80, "eighty")
          .set(90, "ninety")
          .set(100, "hundred");


    switch (true) {
        case (number >= 0 && number <= 20):
                return readNums.get(number);
        case (number > 20 && number < 100):
                if (number%10 == 0) {
                        return readNums.get(number);    
                } else {
                        return readNums.get(Math.floor(number/10)*10) + " " + readNums.get(number%10);
                }
        case (number >= 100 && number < 1000):
                if ((number%100 <= 20) && (number%100 > 0)) {
                        return readNums.get(Math.floor(number/100)) + " " + readNums.get(100) + " " + readNums.get(number%100);
                } else if (number%100 == 0) {
                        return readNums.get(Math.floor(number/100)) + " " + readNums.get(100);
                } else {
                        return readNums.get(Math.floor(number/100)) + " " + readNums.get(100) 
                        + " " + readNums.get(Math.floor((number%100)/10)*10) 
                        + ((number%10 != 0) ? (" " + readNums.get(Math.floor(number%10))) : "");
                }
    }
}



// console.log(toReadable(999))



