const questions = [
    {
        id: 1,
        question: 'Кои владетели воюват в битката при Одрин през 1205 г.?',
        options: [
            'хан/кан Крум и император Никифор I Геник',
            'цар Калоян и император Балдуин Фландърски',
            'цар Иван Асен II и император Теодор Комнин',
            'цар Иван Александър и император Андроник III Палеолог'
        ],
        answer: 'цар Калоян и император Балдуин Фландърски',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 2,
        question: 'Коя въоръжена проява има за цел освобождението на българите, останали извън пределите на Княжество България, вследствие решенията на Берлинския договор?',
        options: [
            'Велчовата завера',
            'Браилските бунтове',
            'Априлското въстание',
            'Илинденско-Преображенското въстание'
        ],
        answer: 'Илинденско-Преображенското въстание',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 3,
        question: 'Какво представлява пактът „Рибентроп – Молотов“?',
        options: [
            'военна конвенция за подялба на Западна Европа',
            'отбранителен договор между Германия и Полша',
            'първа стъпка към създаването на Тристранния пакт',
            'съюз за ненападение между Германия и Съветския съюз'
        ],
        answer: 'съюз за ненападение между Германия и Съветския съюз',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 4,
        question: 'Коя е личността, изобразена на иконата?',
        options: [
            'създателят на реформираната азбука – кирилицата',
            'първият духовен водач на Българската църква',
            'последният патриарх на средновековна България',
            'авторът на първата новобългарска книга „Неделник“'
        ],
        answer: 'последният патриарх на средновековна България',
        hasItalicText: false,
        hasImage: true,
        imageName: 'image1.png'
    },
    {
        id: 5,
        question: 'Кое твърдение за устройството на Дунавска България в периода от създаването й до началото на IX в. е вярно?',
        options: [
            'титлите в йерархията на управлението се заимстват от Византия',
            'обожествява се севастократорът',
            'славянските князе запазват автономията си',
            'владетелят се избира след свикване на народен събор'
        ],
        answer: 'славянските князе запазват автономията си',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 6,
        question: 'Кой български владетел пръв включва важния стратегически център Сердика в пределите на българската държава?',
        options: [
            'хан/кан Телериг',
            'хан/кан Крум',
            'хан/кан Маламир',
            'хан/кан Пресиан'
        ],
        answer: 'хан/кан Крум',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 7,
        question: 'Кой от владетелите управлява преди преместването на българската столица от Плиска в Преслав?',
        options: [
            'цар Борис II',
            'цар Петър I',
            'цар Иван Владислав',
            'княз Владимир-Расате'
        ],
        answer: 'княз Владимир-Расате',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 8,
        question: 'Коя е вярната хронологична последователност на събитията?',
        options: [
            '3, 4, 1, 2',
            '2, 1, 4, 3',
            '2, 3, 1, 4',
            '1, 4, 2, 3'
        ],
        answer: '1, 4, 2, 3',
        hasImage: false,
        hasItalicText: true,
        italicText: 'Възцаряването/възкачването на престола на цар Петър I (1); Начало на движението нa комитопулите (2); Битката при Траянови врата (3); Походите на княз Светослав в българските земи (4);',
    },
    {
        id: 9,
        question: 'Чрез данъка „девширме“ в Османската империя се набират бъдещи:',
        options: [
            'дервентджии',
            'спахии',
            'доганджии',
            'еничари'
        ],
        answer: 'еничари',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 10,
        question: 'Кое от представените въстания от българската антиосманска съпротива избухва последно?',
        options: [
            'на Константин и Фружин',
            'Второ Търновско',
            'Чипровско',
            'Карпошово'
        ],
        answer: 'Карпошово',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 11,
        question: 'За кой възрожденски деец се отнася описанието',
        options: [
            'Добри Желязков',
            'Васил Априлов',
            'Найден Геров',
            'Евлоги Георгиев'
        ],
        answer: 'Васил Априлов',
        hasImage: false,
        hasItalicText: true,
        italicText: '„Роден е в гр. Габрово. Като младеж е силно повлиян от гръцката култура, но по-късно изцяло се посвещава на българското просветно дело. Дарява средства за откриването на първото взаимно училище в Габрово и подпомага обучението на много млади българи в Русия.“'
    },
    {
        id: 12,
        question: 'Коя стопанска дейност на българите е представена в картината на Васил Горанов?',
        options: [
            'сеитба',
            'оран',
            'вършитба',
            'жътва'
        ],
        answer: 'жътва',
        hasImage: true,
        hasItalicText: false,
        imageName: 'image2.png'
    },
    {
        id: 13,
        question: 'В коя война България и Османската империя са съюзници?',
        options: [
            'Междусъюзническата',
            'Първата Балканска',
            'Първата световна',
            'Втората световна'
        ],
        answer: 'Първата световна',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 14,
        question: 'Коя е историческата личност, представена в описанието и на изображението?',
        options: [
            'Константин Стоилов',
            'Александър Малинов',
            'Димитър Греков',
            'Марко Балабанов'
        ],
        answer: 'Александър Малинов',
        hasImage: true,
        hasItalicText: true,
        imageName: 'image3.png',
        italicText: 'Български политик, роден в Пандъкли, Бесарабия. Завършил Болградката гимназия, а после и право в Киев. Работил като съдия, прокурор и адвокат в Пловдив. Лидер на Демократическата партия. Пет пъти е бил министър-председател на България. По време на неговото управление е обявена Независимостта на България.'
    },
    {
        id: 15,
        question: 'Кои държави влизат в Тристранния пакт?',
        options: [
            'Германия, Италия, Япония',
            'Германия, Италия, Австрия',
            'Италия, Япония, Франция',
            'Германия, Испания, Великобритания'
        ],
        answer: 'Германия, Италия, Япония',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 16,
        question: 'Коя от столиците НЕ е на държава, член на Европейския съюз?',
        options: [
            'София',
            'Скопие',
            'Букурещ',
            'Атина'
        ],
        answer: 'Скопие',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 17,
        question: 'Коя средновековна столица е представена на изображението?',
        options: [
            'Велико Търново',
            'Плиска',
            'Константинопол',
            'Велики Преслав'
        ],
        answer: 'Велико Търново',
        hasImage: true,
        imageName: 'image4.png',
        hasItalicText: false,
    },
    {
        id: 18,
        question: 'Годишнина от кое събитие е отразено на пощенската марка?',
        options: [
            'Началото на Априлското въстание',
            'Боевете на четата на Хаджи Димитър и Стефан Караджа',
            'Боевете на Ботевата чета във Врачанския Балкан',
            'създаване на Първата българска легия'
        ],
        answer: 'Боевете на четата на Хаджи Димитър и Стефан Караджа',
        hasImage: true,
        imageName: 'image5.png',
        hasItalicText: false,
    },
    {
        id: 19,
        question: 'Еснафът е:',
        options: [
            'голям покрит пазар за продажба на занаятчийска продукция',
            'малък магазин за различни стоки, придружен от работилница',
            'организация на всички търговци в Османската империя',
            'сдружение на майсторите от един занаят в дадено селище'
        ],
        answer: 'сдружение на майсторите от един занаят в дадено селище',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 20,
        question: 'По време на Балканската война българка се превръща в първата жена в света участвала в боен полет. Как е нейното име?',
        options: [
            'Мара Бунева',
            'Райна Касабова',
            'Елена Карамихайлова',
            'Мария Атанасова'
        ],
        answer: 'Райна Касабова',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 21,
        question: 'Кой арабски пълководец е разбит от Тервел в решително сражение през лятото на 718 г. край Константинопол?',
        options: [
            'Мурад',
            'Омар',
            'Сюлейман',
            'Маслама'
        ],
        answer: 'Маслама',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 22,
        question: 'В кой град избухва Априлското въстание на 20 април 1876 г.?',
        options: [
            'Батак',
            'Търново',
            'Копривщица',
            'Панагюрище'
        ],
        answer: 'Копривщица',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 23,
        question: 'Кой виден революционер формира и оглавява т.нар. „Хвърковата чета”?',
        options: [
            'Христо Ботев',
            'Панайот Хитов',
            'Стефан Стамболов',
            'Георги Бенковски'
        ],
        answer: 'Георги Бенковски',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 24,
        question: 'Кой манастир е превърнат в своеобразна бойна крепост от четата на поп Харитон и Бачо Киро по време на въстанието?',
        options: [
            'Троянският',
            'Дряновският',
            'Чипровският',
            'Бачковският'
        ],
        answer: 'Дряновският',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 25,
        question: 'Кой революционер доброволно се отказва от позицията си на главен апостол?',
        options: [
            'Захари Стоянов',
            'Георги Бенковски',
            'Стефан Стамболов',
            'Панайот Волов'
        ],
        answer: 'Панайот Волов',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 26,
        question: 'Кое населено място в Пловдивския революционен окръг се съпротивлява най-дълго?',
        options: [
            'Перущица',
            'Клисура',
            'Брацигово',
            'Мечка'
        ],
        answer: 'Брацигово',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 27,
        question: 'Кой европейски общественик се изразява в подкрепа на българите с думите: „Аз скърбя, че не мога лично да участвам във вашите боеве“?',
        options: [
            'Николай Игнатиев',
            'Виктор Юго',
            'Джузепе Гарибалди',
            'Уинстън Чърчил'
        ],
        answer: 'Джузепе Гарибалди',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 28,
        question: 'Назовете името, с което цар Петър е известен преди коронацията си за владетел на Втората българска държава?',
        options: [
            'Теодор',
            'Йоан',
            'Димитър',
            'Михаил'
        ],
        answer: 'Теодор',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 29,
        question: 'Кои са съюзниците на Асен и Петър във войните им срещу Византия?',
        options: [
            'Кумани',
            'Араби',
            'Татари',
            'Нормани'
        ],
        answer: 'Кумани',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 30,
        question: 'С какво прозвище е бил известен цар Иван Асен I?',
        options: [
            'Кордокувас',
            'Белгун',
            'Скилойоан',
            'Лавас'
        ],
        answer: 'Белгун',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 31,
        question: 'Коя държава НЕ е член на Европейския съюз?',
        options: [
            'Турция',
            'Франция',
            'България',
            'Испания'
        ],
        answer: 'Турция',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 32,
        question: 'Как се наричали вождовете на славянските племена?',
        options: [
            'царе',
            'князе',
            'ханове',
            'крале'
        ],
        answer: 'князе',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 33,
        question: 'Кой от посочените владетели управлява България през VІІІ век?',
        options: [
            'Тервел',
            'Петър',
            'Омуртаг',
            'Калоян'
        ],
        answer: 'Тервел',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 34,
        question: 'На кое събитие е посветена миниатюрата?',
        options: [
            'на ослепяването на княз Владимир Расате през 893 г.',
            'на провъзгласяването на Симеон за княз през 893 г.',
            'на покръстването на хан Борис през 864 г.',
            'на посрещането на учениците на Кирил и Методий в Плиска през 886 г.'
        ],
        answer: 'на покръстването на хан Борис през 864 г.',
        hasImage: true,
        imageName: 'image6.png',
        hasItalicText: false,
    },
    {
        id: 35,
        question: 'Кога става събитието, описано от византийския хронист?',
        options: [
            '1018 г. след убийството на Иван Владислав',
            '1014 г. след тежката загуба при с. Ключ',
            '971 г. след превземането на Велики Преслав',
            '986 г. след сражението при Траянови врата'
        ],
        answer: '1014 г. след тежката загуба при с. Ключ',
        hasImage: false,
        hasItalicText: true,
        italicText: '„Когато това било известено на императора, той ослепил пленените българи – около 15 000 и като заповядал всеки сто ослепени да бъдат водени от един едноок, изпратил ги при Самуил.”',
    },
    {
        id: 36,
        question: 'Кой от книжовниците НЕ е от времето на „Златния век” на цар Симеон?',
        options: [
            'Евтимий Търновски',
            'Черноризец Храбър',
            'Константин Преславски',
            'Климент Охридски'
        ],
        answer: 'Евтимий Търновски',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 37,
        question: 'Кой град е столица на българската държава по време на III Кръстоносен поход?',
        options: [
            'Охрид',
            'Плиска',
            'Преслав',
            'Търново'
        ],
        answer: 'Търново',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 38,
        question: 'Къде живее мнозинството от българското население през ХV-ХVІІ век?',
        options: [
            'в планините',
            'в махали',
            'в градовете',
            'в селата'
        ],
        answer: 'в селата',
        hasImage: false,
        hasItalicText: false,
    },
    {
        id: 39,
        question: 'На кое историческо събитие Иван Вазов посвещава стиха: ',
        options: [
            'Първата световна война',
            'Балканската война',
            'Сръбско-българската война',
            'Руско-турската война'
        ],
        answer: 'Сръбско-българската война',
        hasImage: false,
        hasItalicText: true,
        italicText: `
            „Българийо, за тебе те умряха,
            една бе ти достойна зарад тях...
            И твойто име само кат мълвяха,
            умираха без страх.”? 
        `
    },
    {
        id: 40,
        question: 'Изразът „Желязна завеса” започва да се използва след края на:',
        options: [
            'Междусъюзническата война',
            'Първата световна война',
            'Втората световна война',
            'Сръбско-българската война'
        ],
        answer: 'Втората световна война',
        hasImage: false,
        hasItalicText: false,
    },
]

questions.sort(() => Math.random() - 0.5);

const quizContainer = document.getElementById('quiz-container');

let currIndex = 0;
let totalAnsweredQuestions = 0;
let currQuestion = null;
let currScore = 0;

setNextQuestion();

function setNextQuestion() {
    if (totalAnsweredQuestions > 39) {
        setEndResult();

        return
    }

    currQuestion = questions[currIndex];

    const question = questionTemplate(currQuestion);

    question.addEventListener('pointerup', checkAnswer)

    quizContainer.appendChild(question);

    currIndex++;
    totalAnsweredQuestions++;
}

function setEndResult() {
    document.getElementById('end-result').textContent = `Резултат: ${currScore} / ${totalAnsweredQuestions}`;
}

function questionTemplate(question) {
    const div = document.createElement('div');
    div.classList.add('question');

    const heading = document.createElement('h3');
    heading.textContent = `${currIndex + 1}. ${question.question}`;
    div.appendChild(heading);

    if (question.hasImage) {
        const image = document.createElement('img');
        image.src = `./images/${question.imageName}`;
        div.appendChild(image);
    }

    if (question.hasItalicText) {
        const em = document.createElement('em');
        em.textContent = question.italicText;
        div.appendChild(em);
    }

    const answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');
    div.appendChild(answersDiv);

    question.options.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < question.options.length; i++) {
        const label = document.createElement('label');
        label.classList.add('answer')
        label.textContent = question.options[i];

        answersDiv.appendChild(label)
    }

    return div
}

function checkAnswer(e) {
    const target = e.target

    if (!target.classList.contains('answer')) {
        return
    }

    const questionDiv = target.parentElement.parentElement;
    const answersDiv = target.parentElement;
    const labels = answersDiv.children;
    const answer = target.textContent;

    if (answer === currQuestion.answer) {
        target.classList.add('correct');
        currScore++;
    } else {
        target.classList.add('wrong');

        const p = document.createElement('p');
        p.textContent = `Верен отговор: ${currQuestion.answer}`;
        p.classList.add('correct-answer');

        questionDiv.append(p);
    }

    questionDiv.removeEventListener('pointeup', checkAnswer);

    for (let label of labels) {
        label.classList.add('no-hover');
    }

    setNextQuestion();
}