document.addEventListener('DOMContentLoaded', () => {
    const declOfNum = (n, titles) => {
        return (
            n +
            ' ' +
            titles[
                n % 10 === 1 && n % 100 !== 11
                    ? 0
                    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
                        ? 1
                        : 2
                ]
        );
    };
    // {
    //     text = 'Р”Рѕ РєРѕРЅС†Р° СЂР°СЃРїСЂРѕРґР°Р¶Рё РѕСЃС‚Р°Р»РѕСЃСЊ: ',
    //         bgcolor = 'black',
    //         textColor = 'white',
    // }
    const timer = ({text = 'Р”Рѕ РєРѕРЅС†Р° СЂР°СЃРїСЂРѕРґР°Р¶Рё РѕСЃС‚Р°Р»РѕСЃСЊ: ', textColor = 'black', bgColor = 'white'}) => {
        const timer = document.createElement('div');
        const timerText = document.createElement('p');
        const timerCount = document.createElement('span');

        timer.classList.add('timer');
        timer.style.backgroundColor = bgColor;
        timer.style.color = textColor;
        timerText.classList.add('timer__text');
        timerCount.classList.add('timer__count');

        timerText.textContent = text;

        timerText.append(timerCount);
        timer.append(timerText);
        document.body.prepend(timer);

        const startTimer = () => {
            const deadline = new Date(2024, 1, 1, 0, 0, 0);
            const now = new Date();
            const timeRemaining = (deadline - now) / 1000;

            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor((timeRemaining / 60 / 60) % 24);
            const days = Math.floor((timeRemaining / 60 / 60 / 24) % 30);

            const s = declOfNum(seconds, ['СЃРµРєСѓРЅРґР°', 'СЃРµРєСѓРЅРґС‹', 'СЃРµРєСѓРЅРґ']);
            const m = declOfNum(minutes, ['РјРёРЅСѓС‚Р°', 'РјРёРЅСѓС‚С‹', 'РјРёРЅСѓС‚']);
            const h = declOfNum(hours, ['С‡Р°СЃ', 'С‡Р°СЃР°', 'С‡Р°СЃРѕРІ']);
            const d = declOfNum(days, ['РґРµРЅСЊ', 'РґРЅСЏ', 'РґРЅРµР№']);

            timerCount.textContent = `${d} ${h} ${m} ${s}`;

            if (timeRemaining > 0) {
                setTimeout(startTimer, 1000);
            } else {
                timer.remove();
            }
        };

        startTimer();
    };

    window.timer = timer;
});