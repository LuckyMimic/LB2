function calculate() {
    // Отримання значень прізвищ та дат прийому на роботу
    let surname1 = document.getElementById("surname1").value;
    let date1 = new Date(document.getElementById("date1").value);
    let surname2 = document.getElementById("surname2").value;
    let date2 = new Date(document.getElementById("date2").value);
    let surname3 = document.getElementById("surname3").value;
    let date3 = new Date(document.getElementById("date3").value);
    let surname4 = document.getElementById("surname4").value;
    let date4 = new Date(document.getElementById("date4").value);
    let surname5 = document.getElementById("surname5").value;
    let date5 = new Date(document.getElementById("date5").value);
    
    // Отримання поточної дати
    let currentDate = new Date();
    
    // Перевірка, чи не введена дата з майбутнього
    if (date1 > currentDate || date2 > currentDate || date3 > currentDate || date4 > currentDate || date5 > currentDate) {
    alert("Введіть коректну дату прийому на роботу.");
    return;
    }
    
    // Розрахунок середнього стажу роботи в роках
    let years1 = (currentDate - date1) / (1000 * 60 * 60 * 24 * 365);
    let years2 = (currentDate - date2) / (1000 * 60 * 60 * 24 * 365);
    let years3 = (currentDate - date3) / (1000 * 60 * 60 * 24 * 365);
    let years4 = (currentDate - date4) / (1000 * 60 * 60 * 24 * 365);
    let years5 = (currentDate - date5) / (1000 * 60 * 60 * 24 * 365);
    let averageYears = Math.floor((years1 + years2 + years3 + years4 + years5) / 5); //округлення до меншого
    
    // Виведення результату
    let result = document.getElementById("result");
    result.innerHTML = "Середній стаж роботи на поточний час: " + averageYears + " років";
}