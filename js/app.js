"use strict";
setTimeout(function () {
    let isFinished = false;
    do {
        var userName = prompt('ФИО', userName),
            userSex = prompt('Пол ("M" - мужской, "F" - женский)', userSex),
            userAge = +prompt('Возраст', userAge),
            userEMail = prompt('e-mail', userEMail)
        ;
        if (confirm('ФИО:' + userName
                + '\n Пол:' + userSex
                + '\n Возраст:' + userAge
                + '\n e-mail:' + userEMail
                + '\n\nВсе верно?'
            )) {
            alert('Спасибо за регистрацию дорогой, ' + userName + '! Мы Вас запомнили.');
            isFinished = true;
        }
    } while (!isFinished);
}, 500);
