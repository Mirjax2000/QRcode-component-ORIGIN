/** @format */

let pole = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
let rngPole = [];

pole.forEach(function (num) {
    pole.push(num.toUpperCase());
});

for (i = 0; i <= 9; i++) {
    pole.push(i);
}

let rngEngine = function () {
    let rng = function () {
        return Math.ceil(Math.random() * pole.length - 1);
    };

    for (i = 1; i <= 10; i++) {
        rngPole.push(pole[rng()] + '');
    }

    let oneliner = '';
    for (i = 0; i < 10; i++) {
        oneliner = oneliner + rngPole[i];
    }
    return oneliner;
};

let inputText = rngEngine();

const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: inputText,
    width: 160,
    height: 160,
    colorDark: '#ffffff',
    colorLight: '#2c7efa00',
    correctLevel: QRCode.CorrectLevel.H,
});

let bttn = document.querySelector('#generate');

bttn.addEventListener('click', function (event) {
    let QRcodediv = document.querySelector('#qrcode');
    QRcodediv.innerHTML = '';
    rngPole = [];
    inputText = rngEngine();
    console.log(inputText);

    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: inputText,
        width: 160,
        height: 160,
        colorDark: '#ffffff',
        colorLight: '#2c7efa00',
        correctLevel: QRCode.CorrectLevel.H,
    });
});
