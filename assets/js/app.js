function sayWords() {
    let incomeString = income.value.toLowerCase();
    let icao = {a : 'Alfa', b : 'Bravo', c : 'Charlie', d : 'Delta', e : 'Echo', f : 'Foxtrot', g : 'Golf', h : 'Hotel', i : 'India', j : 'Juliett', k : 'Kilo', l : 'Lima', m : 'Mike', n : 'November', o : 'Oscar', p : 'Papa', q : 'Quebec', r : 'Romeo', s : 'Sierra', t : 'Tango', u : 'Uniform', v : 'Victor', w : 'Whiskey', x : 'X-ray', y : 'Yankee', z : 'Zulu', 0 : 'Zero', 1 : 'One', 2 : 'Two', 3 : 'Three', 4 : 'Four', 5 : 'Five', 6 : 'Six', 7 : 'Seven', 8 : 'Eight', 9 : 'Niner'
    };
    let outString = '';
    for (let letter of incomeString) {
        outString += icao[letter] + ' ';
    }
    result.innerHTML = outString;
}
function sayDigit() {
    let digit = [...incomeDigit.value].reverse();
    let arrDigits = ['','одна','две','три','четыре','пять','шесть','семь','восемь','девять','десять','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
    let arrDigit1 = ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
    let res = '';
    if (digit[digit.length - 1] == '0' || digit.length == 0) {
        resultDigit.innerHTML = 'ноль гривен';
        return;
    }
    if (digit[0] == '1' && digit[1] != '1') {
       res += 'гривна'; 
    } else if (('234').includes(digit[0]) && digit[1] != '1') {
        res += 'гривны'; 
     } else { res += 'гривен';}
    for (let i = 0; i < digit.length ; i++) {
        if (digit[1] == '1') {
            res = arrDigit1[+digit[i]] + ' ' + res;
            i = 1;
            digit[1] = ''; 
            continue;
        } 
        if (digit[1] == '0' && i == 1) {
            continue;
        }
        res = arrDigits[+digit[i] + i * 9] + ' ' + res; 
    }
    resultDigit.innerHTML = res;
}
function sayDigit1() {
    let number = incomeDigit1.value.split('').reverse();
    let uah = [['', '', ''],['гривна', 'гривны', 'гривен'], ['тысяча', 'тысячи', 'тысяч'], ['миллион', 'миллиона', 'миллионов']];
    if (number[number.length - 1] == '0' || number[number.length - 1] == '') {
        resultDigit1.innerHTML = 'ноль гривен';
        return;
    }
    let count = Math.ceil(number.length / 3);
    let res = '';
    let sum = '';
    let arr = [];
    for (let i = 1; i <= count; i++) {
        arr = number.slice(3 * (i - 1), 3 * (i)); 
        if (arr.reduce((acc, item) => acc + (+item), 0) == 0 && i > 1) {
            continue;
        }
        sum = calc(arr, uah[i])
        res = sum + ' ' + res; 
    }
    resultDigit1.innerHTML = res; 
    function calc (digit, letter) {
        digit.unshift('');
        let arrDigits = [{0 : 'десять', 1 : 'одиннадцать', 2 : 'двенадцать', 3 : 'тринадцать', 4 : 'четырнадцать', 5 : 'пятнадцать', 6 : 'шестнадцать', 7 : 'семнадцать', 8 : 'восемнадцать', 9 : 'девятнадцать'},{0 : '', 1 : 'одна', 2 : 'две', 3 : 'три', 4 : 'четыре', 5 : 'пять', 6 : 'шесть', 7 : 'семь', 8 : 'восемь', 9 :'девять'},{0 : '', 1 : 'десять', 2 : 'двадцать', 3 : 'тридцать', 4 : 'сорок', 5 : 'пятьдесят', 6 : 'шестьдесят', 7 : 'семьдесят', 8 : 'восемьдесят', 9 : 'девяносто'},{0 : '', 1 : 'сто', 2 : 'двести', 3 : 'триста', 4 : 'четыреста', 5 : 'пятьсот', 6 : 'шестьсот', 7 : 'семьсот', 8 : 'восемьсот', 9 : 'девятьсот'},{0 : '', 1 : 'один', 2 : 'два', 3 : 'три', 4 : 'четыре', 5 : 'пять', 6 : 'шесть', 7 : 'семь', 8 : 'восемь', 9 :'девять'}];
        let word = '';
        if (digit[1] == '1' && digit[2] != '1') {
        word += letter[0]; 
        } else if (('234').includes(digit[1]) && digit[2] != '1') {
            word += letter[1]; 
        } else { word += letter[2];}
        for (let i = 1; i < digit.length; i++) {
            if (digit[2] == '1') {
                digit[2] = arrDigits[0][digit[1]];
                digit[1] = '';
                i++;
                continue; }            
            if (letter[0] == 'миллион' && i == 1 ) {
                digit[i] = arrDigits[4][digit[i]]; 
            }
            else {digit[i] = arrDigits[i][digit[i]];}
        }
        let answer = digit.reverse().join(' ') + word;
        return answer;
    }
}
// digit = digit.map((item) => 
        //     arrDigits[1][item])