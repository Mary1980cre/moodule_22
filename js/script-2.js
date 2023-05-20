const geoPositionErrorMessage = 'Информация о местоположении недоступна';
const resultDiv = document.querySelector('.result');
const button = document.querySelector('button');
const appendResultMessage = _ => {
    resultDiv.appendChild(getWindowSizeView());
    getClientPositionView();
}
const getTextConteiner = message => {
    const result = document.createElement('p');
    result.classList.add('important-message');
    result.innerHTML = message;
    return result;
}
const getWindowSizeView = _ => {
    const { width, height } = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
    return getTextConteiner(`Ваши размеры экрана: ${width}x${height}`);
}
const getClientPositionView = _ => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(appendCurrentGeopositionInfo, appendErrorGeopositionInfo);
    } else {
        appendErrorGeopositionInfo();
    }
}
const appendCurrentGeopositionInfo = position => {
    const { coords } = position;
    const result = getTextConteiner(`Ваши координаты: ${coords.latitude}:${coords.longitude}`);
    resultDiv.appendChild(result);
}

const appendErrorGeopositionInfo = _ => {
    const result = getTextConteiner(geoPositionErrorMessage);
    resultDiv.appendChild(result);
}
button.addEventListener('click', appendResultMessage);