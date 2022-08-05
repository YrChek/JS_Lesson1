exit: while (true) {
    let num = Math.floor(Math.random() * 1000);
    console.log('Я загадал: ', num);

    while (true) {
        let guessNum = prompt('Введите целое число от 0 до 1000, либо q - для выхода: ');
        console.log('Пользователь ввел: ', +guessNum);

        if (guessNum === 'q') {
            alert('Очень жаль, что вы выходите!');
            break exit;
        }
        if (isNaN(guessNum)) {
            alert('Вы ввели не число!')
        } else if (+guessNum > num) {
            alert('Ваше число больше загаданного')
        } else if (+guessNum < num) {
            alert('Ваше число меньше загадонного')
        } else if (+guessNum === num) {
            alert('Вы угадали!');
            break;
        }
    }
}