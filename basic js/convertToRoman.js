function convertToRoman(num) {
    let values = [{ roman: "I", arabic: 1 }, { roman: "IV", arabic: 4 }, { roman: "V", arabic: 5 }, { roman: "IX", arabic: 9 }, { roman: "X", arabic: 10 }, { roman: "XL", arabic: 40 }, { roman: "L", arabic: 50 }, { roman: "XC", arabic: 90 }, { roman: "C", arabic: 100 }, { roman: "CD", arabic: 400 }, { roman: "D", arabic: 500 }, { roman: "CM", arabic: 900 }, { roman: "M", arabic: 1000 }];

    //console.log(values.length)
    let restVal = num;
    let str = "";
    for (let i = 12; i >= 0; i--) {
        while (restVal >= values[i].arabic) {
            restVal -= values[i].arabic;
            str += values[i].roman;
        }
    }

    return str;
}