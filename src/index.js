const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '*****': ' '
};
function decode(expr) {
  let newPhrase = '';
  //дробим входящие по 10 , что бы получить массивы цифр(букв)
  expr.match(/\S{10}/g).forEach((letter) => {
    // дробим по 2 что бы преобразовать в .-
    const data = letter.match(/\S{2}/g);
    let newData = ''; //будующая буква в .-
    for (i = 0; i < data.length; i++) {
      if (data[i] === '10') {
        newData = newData + '.';
      }
      if (data[i] === '11') {
        newData = newData + '-';
      }

      if (data[i] === '**') {
        newData = newData + '*';
      }
    }
    newPhrase = newPhrase + MORSE_TABLE[newData];
  });
  return newPhrase;
}

module.exports = {
  decode
};
