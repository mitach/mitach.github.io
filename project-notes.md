Имаме ли фиксиран брой награди (5)?
	-> Да - Пет div-а в dom дървото.
	-> Не - След направен интерфейс, наградите са добавени и програмистки се закачат в dom дървото. (през js да закачам в dom дървото)

Каква е резолюцията на екрана, на който ще се гледа проекта?
    -> Тестове и оптимизация на дадената резолюция

Когато награда е извъртяна, променяме ли цвета и? Какъв трябва да е цвета и?

Точните цветове? (зеленото) - #a6ce39

Какъв е шрифта? using "Ubuntu" & "Roboto"

*Как се дават номерата на участващите - на листче, когато влязат или?



todo -
    -> Awaiting event on space
    -> Конфети или някакъв визуален ефект на изтеглен победител

constraints -
    -> Работи с до 3-цифрени числа


code backups ->

    // closeCountModal.addEventListener('click', () => {
    //     let count = inputCount.value;
    //     if (!(count <= 0) && count <= 999) {
    //         countModal.style.display = "none";
    //         isModalOpen = false;

    //         for (let member = 1; member <= count; member++) {
    //             members.push(formatNum(member.toString()));
    //         }

    //         attachSpaceEvent();
    //     }
    // });


    !!! comment the html

    const params = new URLSearchParams(window.location.search);
    const count = params.get('count');

    for (let member = 1; member <= count; member++) {
    members.push(formatNum(member.toString()));
    }

    let isModalOpen = false;
    infoBoxes[currBox].classList.add('active');
    attachSpaceEvent();