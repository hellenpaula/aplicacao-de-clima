
// VARIÁVEIS:
const search = document.querySelector("#searchIcon");
const input = document.querySelector("#cityName")
const sectionAlert = document.querySelector(".alert");
const sectionTempTag = document.querySelector(".sectionTemp");
const sectionInfoTag = document.querySelector(".sectionInfo");


// CRIANDO ELEMENTO 'IMG' PARA ERRO:
    const imgError = document.createElement("img");
    imgError.setAttribute('src', "src/img/img error 404.svg");
    imgError.classList.add("imgError");
    sectionAlert.appendChild(imgError);



// EVENTOS:

input.addEventListener("keyup", ((event) => {
    console.log(event);
    if (event.key === "Enter") {
        procurarCidade();
    }
}))

search.addEventListener("click",  () => {
    
    procurarCidade();

});


// FUNÇÕES:

// função de adicionar classe na img de erro:
    function showImgError(classe){
        imgError.className = classe;
}

// função de mensagem de erro:
function showMsgError(mesage) {
    const alert = document.querySelector("#msgError");
    alert.textContent = mesage;
    
}

// função procurar cidade:
async function procurarCidade() {
    try {

    
    const inputValue = input.value; 
    if (!inputValue) {
    
    showMsgError("Cidade não encontrada.");
    showImgError("imgErrorShow");
    sectionTempTag.classList.remove("showTemp");
    sectionInfoTag.classList.remove("showInfo");
    throw Error("Digite uma cidade");
    }

// REQUISIÇÃO API:
    const apiKey = '3d4e1c3f7c4dbe48c4d97e970f8d9062';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputValue)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const response = await fetch(URL);
    console.log(response);
    const json = await response.json();
    console.log(json);

      if (json.cod === 200) {
        
        showMsgError("");
        showImgError("imgError");
      
// mostrando informações do clima ao achar cidade:
        sectionTempTag.classList.add("showTemp");
        sectionInfoTag.classList.add("showInfo");


        const objApi = {
            name: json.name,
            country: json.sys.country,
            temp: Math.round(json.main.temp),
            description: json.weather[0].description,
            tempMax: Math.round(json.main.temp_max),
            tempMin: Math.round(json.main.temp_min),
            humidity: json.main.humidity,
            speed: json.wind.speed.toFixed(1),
            icon: json.weather[0].icon,
        }

        exibirClima(objApi);

    } else {
       
        // mostar função de mensagem de erro;
        showMsgError("Cidade não encontrada.");

        // se não achar a cidade, chama a função showImgError para mostrar a imagem
        showImgError("imgErrorShow");

        // se não achar a cidade, remove as classes que mostram a seção temperatura e informações;
        sectionTempTag.classList.remove("showTemp");
        sectionInfoTag.classList.remove("showInfo");
        throw Error("Cidade não encontrada");

    }

    } catch(error) {
        console.log("Erro:" + error);
    }
}

// função para exibir clima no HTML:
function exibirClima(obj) {
    
    const name = document.querySelector("#name");
        name.textContent = obj.name;
        name.textContent += ", " + obj.country;
        
        // configurando temp:
        const temp = document.querySelector(".temp");
        // para acrescentar a tag de html, use innerHTML para ele aplicar direto no html;
        temp.innerHTML = obj.temp + " <sup>C°</sup>"

        // configurando descrição:
        const description = document.querySelector(".descricao");
        description.textContent = obj.description;

        // configurando temp. máxima:
        const tempMax = document.querySelector("#tempMax");
        tempMax.innerHTML = obj.tempMax + " <sup>C°</sup>";

        // configurando temp. mínima:
        const tempMin = document.querySelector("#tempMin");
        tempMin.innerHTML = obj.tempMin + " <sup>C°</sup>" ;

        // configurando humidade:
        const humidityTag = document.querySelector("#humidity");
        humidityTag.textContent = obj.humidity + "%";

        // configurando vento:
        const speedTag = document.querySelector("#speed");
        speedTag.textContent = obj.speed + " Km/h";

        // configurando ícone:
        const img = document.querySelector("#imgIcon");
        const iconCode = obj.icon;
        const URLIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        img.setAttribute("src", URLIcon)
    
}