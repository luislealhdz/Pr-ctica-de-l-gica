"use-strict";

const timeToShowAlarm = prompt("Segundos para mostrar la alarma");

const showMessage = (timeToShowAlarm) => {
    const time = parseInt(timeToShowAlarm) * 1000;

    setTimeout(() => {
        console.log(
            `Time for bed after ${timeToShowAlarm} ${
                timeToShowAlarm > 1 ? "seconds" : "second"
            }.`
        );
    }, time);
};

showMessage(timeToShowAlarm);
