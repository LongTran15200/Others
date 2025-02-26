
function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
}
function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function updateImage(fahrenheit) {
    let weatherImage = document.getElementById("weatherImage");
    if (fahrenheit < 32) {
        weatherImage.src = "images/cold.png"; // Below 32°F → Cold image
    } else if (fahrenheit >= 32 && fahrenheit <= 50) {
        weatherImage.src = "images/cool.png"; // 32-50°F → Cool image
    } else {
        weatherImage.src = "images/warm.png"; // Above 50°F → Warm image
    }
}

function domLoaded() {
    let cInput = document.getElementById("cInput");
    let fInput = document.getElementById("fInput");
    let convertButton = document.getElementById("convertButton");
    let errorMessage = document.getElementById("errorMessage");

    cInput.addEventListener("input", () => {
        fInput.value = ""; 
    });

    fInput.addEventListener("input", () => {
        cInput.value = "";
    });

    convertButton.addEventListener("click", () => {
        let celsius = parseFloat(cInput.value);
        let fahrenheit = parseFloat(fInput.value);

        if (!isNaN(celsius)) {
            let convertedF = convertCtoF(celsius);
            fInput.value = convertedF; 
            updateImage(convertedF); 
            errorMessage.textContent = ""; 
        }
        else if (!isNaN(fahrenheit)) {
            let convertedC = convertFtoC(fahrenheit);
            cInput.value = convertedC;
            updateImage(fahrenheit);
            errorMessage.textContent = ""; 
        }
        else {
            let invalidInput = cInput.value || fInput.value;
            errorMessage.textContent = `${invalidInput} is not a number`;
        }
    });
}
