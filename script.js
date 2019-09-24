var coefficientExportCredit = [
    [2.51, 3.23, 3.95, 4.67, 5.39, 6.11, 6.83, 7.55, 0.51, 0.59, 0.66, 0.81, 0.81, 0.89, 1.11, 1.34, 1.56, 1.79, 2.01, 2.24],
    [2.98, 3.85, 4.73, 5.60, 6.48, 7.35, 8.23, 9.10, 0.53, 0.62, 0.71, 0.89, 0.89, 0.99, 1.26, 1.53, 1.80, 2.08, 2.35, 2.63],
    [3.83, 4.99, 6.15, 7.31, 8.47, 9.63, 10.79, 11.95, 0.55, 0.66, 0.77, 0.99, 0.99, 1.11, 1.44, 1.78, 2.11, 2.45, 2.78, 3.11],
    [4.43, 5.79, 7.15, 8.51, 9.87, 11.23, 12.59, 13.95, 0.58, 0.72, 0.86, 1.15, 1.15, 1.29, 1.71, 2.14, 2.56, 2.99, 3.41, 3.84],
    [4.83, 6.19, 7.56, 8.92, 10.28, 11.64, 13.00, 14.36, 1.06, 1.20, 1.33, 1.61, 1.61, 1.75, 2.17, 2.32, 2.70, 3.07, 3.45, 3.82],
    [5.45, 6.85, 8.26, 9.67, 11.08, 12.48, 13.89, 15.30, 1.34, 1.46, 1.57, 1.81, 1.81, 1.93, 2.28, 2.84, 3.22, 3.60, 3.98, 4.36],
    [6.03, 7.43, 8.83, 10.23, 11.62, 13.02, 14.42, 15.82, 2.10, 2.23, 2.36, 2.61, 2.61, 2.74, 3.11, 3.14, 3.48, 3.82, 4.16, 4.50]
];

var coefficientContractInsurance = [
    [0.10, 0.25, 1],
    [0.10, 0.50, 1],
    [0.10, 0.75, 1],
    [0.25, 1.00, 1.50],
    [0.25, 1.25, 1.50],
    [0.50, 1.50, 2],
    [0.50, 1.75, 2],
];

var tariffCreditAndGarantees = [
    [0.44, 0.85, 0.76, 1],
    [0.55, 1.07, 0.96, 1.4],
    [0.7, 1.23, 1.1, 2],
    [0.9, 1.51, 1.36, 2.5],
    [1.49, 2.11, 2.11, 3],
    [2.1, 2.58, 2.58, 3.5],
    [2.9, 3.17, 3.17, 4],

];

var loanInsuranceTariffRates = [
    [1.17, 1.67, 2.18, 2.68, 3.19, 3.69, 4.2, 4.7, 5.21, 5.72],
    [1.17, 1.67, 2.18, 2.68, 3.19, 3.69, 4.2, 4.7, 5.21, 5.72],
    [1.28, 1.89, 2.5, 3.12, 3.73, 4.34, 4.96, 5.57, 6.18, 6.8],
    [1.45, 2.23, 3.01, 3.8, 4.58, 5.37, 6.15, 6.93, 7.72, 8.5],
    [1.69, 2.71, 3.73, 4.76, 5.78, 6.8, 7.83, 8.85, 9.88, 10.9],
    [1.84, 3.01, 4.19, 5.37, 6.54, 7.72, 8.89, 10.07, 11.25, 12.42],
    [2.04, 3.42, 4.8, 6.18, 7.56, 8.94, 10.32, 11.7, 13.08, 14.46]
];

var tariffRatesOnInsuranceOfAdvances = [
    [1.3, 1.86, 2.42, 2.98, 3.54, 4.1, 4.67, 5.23, 5.79],
    [1.3, 1.86, 2.42, 2.98, 3.54, 4.1, 4.67, 5.23, 5.79],
    [1.42, 2.1, 2.78, 3.46, 4.14, 4.82, 5.51, 6.19, 6.87],
    [1.61, 2.48, 3.35, 4.22, 5.09, 5.96, 6.83, 7.7, 8.57],
    [1.87, 3.01, 4.15, 5.29, 6.42, 7.56, 8.7, 9.84, 10.97],
    [2.04, 3.35, 4.66, 5.96, 7.27, 8.58, 9.88, 11.19, 12.5],
    [2.27, 3.8, 5.34, 6.87, 8.4, 9.94, 11.47, 13, 14.54],

];

var country_value_corporate = new Map([
    ['Азербайджан', 4],
    ['Армения', 5],
    ['Белоруссия', 3],
    ['Грузия', 5],
    ['Кыргызстан', 4],
    ['Россия', 2],
    ['Таджикистан', 6],
    ['Туркменистан', 3],
    ['Украина', 6],
    ['Узбекистан', 4],
    ['Молдова', 6],
    ['Казахстан', 2],
    ['Китай', 1],
    ['Турция', 2],
    ['Иран', 6],
    ['Монголия', 5],
    ['Индия', 3],
    ['Афганистан', 7],
    ['Пакистан', 7],
    ['Вьетнам', 5],
    ['Япония', 1],
    ['ОАЭ', 2],
    ['Саудовская Аравия', 2],
    ['Израиль', 1],
    ['Сирия', 7],
    ['Тайланд', 3],
    ['Южная Корея', 1],
    ['Египет', 6],
    ['США', 1],
    ['Италия', 1],
    ['Германия', 1],
    ['Нидерланды', 1],
    ['Великобритания', 1],
    ['Франция', 1],
    ['Испания', 1],
    ['Латвия', 1],
    ['Литва', 1],
    ['Эстония', 1],
    ['Греция', 2],
    ['Польша', 1],
    ['Чехия', 1],
    ['Словакия', 1],
    ['Швейцария', 1],
    ['Сербия', 6],
    ['Румыния', 3],
    ['Болгария', 4],
    ['Венгрия', 1]
]);

var country_value_OECD = new Map([
    ['Азербайджан', 5],
    ['Армения', 6],
    ['Белоруссия', 6],
    ['Грузия', 6],
    ['Кыргызстан', 7],
    ['Россия', 4],
    ['Таджикистан', 7],
    ['Туркменистан', 6],
    ['Украина', 7],
    ['Узбекистан', 6],
    ['Молдова', 7],
    ['Казахстан', 6],
    ['Китай', 2],
    ['Турция', 4],
    ['Иран', 6],
    ['Монголия', 6],
    ['Индия', 3],
    ['Афганистан', 7],
    ['Пакистан', 7],
    ['Вьетнам', 5],
    ['Япония', 0],
    ['ОАЭ', 2],
    ['Саудовская Аравия', 2],
    ['Израиль', 0],
    ['Сирия', 7],
    ['Тайланд', 3],
    ['Южная Корея', 0],
    ['Египет', 6],
    ['США', 0],
    ['Италия', 0],
    ['Германия', 0],
    ['Нидерланды', 0],
    ['Великобритания', 0],
    ['Франция', 0],
    ['Испания', 0],
    ['Латвия', 0],
    ['Литва', 0],
    ['Эстония', 0],
    ['Греция', 0],
    ['Польша', 0],
    ['Чехия', 0],
    ['Словакия', 0],
    ['Швейцария', 0],
    ['Сербия', 6],
    ['Румыния', 3],
    ['Болгария', 4],
    ['Венгрия', 0]
]);

var arrayPeriodValue = new Map([
    ['2', 0],
    ['4', 1],
    ['6', 2],
    ['8', 3],
    ['10', 4],
    ['12', 5],
    ['14', 6],
    ['16', 7],
    ['18', 8],
    ['20', 9],
    ['22', 10],
    ['24', 11],
    ['26', 12],
    ['28', 13],
    ['30', 14],
    ['32', 15],
    ['34', 16],
    ['36', 17],
    ['38', 18],
    ['40', 19]
]);


// Тарифные ставки по договорам страхования экспортных кредитов
function getCountryValue1Calc() {
    let select = document.getElementById("country1Calc");
    let country = select.options[select.selectedIndex].value;
    return country;
}

function getPeriodValue1Calc() {
    let select = document.getElementById('period');
    let period = select.options[select.selectedIndex].value;
    return period;
}

function getSummOfInshurance1Calc() {
    let select = document.getElementById('summ_of_inshurance_1_calc');
    let value = select.value;
    return value;
}

function getCountryCoefficient1Calc() {
    var periodValue = getPeriodValue1Calc();
    var countryValue = getCountryValue1Calc();

    if (country_value_corporate.get(countryValue) < 0) {
        return 0;
    }

    if (parseInt(periodValue) >= 16) {
        return coefficientExportCredit[country_value_corporate.get(countryValue) < 0 ? 0 : country_value_corporate.get(countryValue) - 1][arrayPeriodValue.get(periodValue)];
    } else {
        return coefficientExportCredit[country_value_OECD.get(countryValue) < 0 ? 0 : country_value_OECD.get(countryValue) - 1][arrayPeriodValue.get(periodValue)];
    }
}

function getItog1Calc() {
    return document.getElementById('itog_1_calc').innerHTML = Math.round(getSummOfInshurance1Calc() * getCountryCoefficient1Calc() / 100);
}


//Тарифные ставки по договорам страхования инвестиций

function getSummOfInshurance2Calc() {
    let select = document.getElementById('summ_of_inshurance_2_Calc');
    let value = select.value;
    return value;
}

function getCountryValue2Calc() {
    let select = document.getElementById("country2Calc");
    let country = select.options[select.selectedIndex].value;
    return country;
}

function getCountryCoefficient2Calc() {
    return coefficientContractInsurance[country_value_corporate.get(getCountryValue2Calc()) < 0 ? 0 : country_value_corporate.get(getCountryValue2Calc()) - 1][2];
}

function getItog2Calc() {
    return document.getElementById('itog_2_calc').innerHTML = Math.round(getSummOfInshurance2Calc() * getCountryCoefficient2Calc() / 100);
}