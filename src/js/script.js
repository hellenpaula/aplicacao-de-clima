
// validação de valor:
// ao entrar no projeto ele mostrará apenas a área de pesquisa;
// quando digitar um valor válida(cidade q esteja na api, valor diferente de vazio, nulo);
// se não for uma valor válido, é mostrado abaixo do input uma mensagem de erro;

// retorna da temperatura:
// ao digitar uma valor válido e clicar em pesquisar, ele deve retornar no container: nome da cidade digitado e país, ícone de imagens, temperatura, descrição; Na área de informações: pegar a temperatuda máx, temp min, humidade, vento;

// criar função p/ mostrar a temp;
// função para a mensagem de erro;
// fazer requisição de api, usando async e await, fazer conversão para objeto(json), 

// FAZER: 
// Organizar código(funções, comentários);
// Colocar letra maiúscula no início de cada palavra da descrição;
// Colocar imagem para quando a cidade não for encontrada;
// Estilizar mensagem de erro;

// variáveis:
const search = document.querySelector("#searchIcon");
const input = document.querySelector("#cityName")
const sectionAlert = document.querySelector(".alert");
const sectionTempTag = document.querySelector(".sectionTemp");
const sectionInfoTag = document.querySelector(".sectionInfo");

// criando elemento img de erro:
    const imgError = document.createElement("img");
    imgError.setAttribute('src', "src/img/img error 404.svg");
    imgError.classList.add("imgError");
    sectionAlert.appendChild(imgError);

// ------------------------------------- 

search.addEventListener("click", async () => {
    
    const inputValue = input.value; 
    
    if (!inputValue) {
    showMsgError("Cidade não encontrada.");
    }

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
// ---------------------------------------------

        const array = {
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

        // configurando nomes:
        const name = document.querySelector("#name");
        name.textContent = array.name;
        name.textContent += ", " + array.country;
        
        // configurando temp:
        const temp = document.querySelector(".temp");
        // para acrescentar a tag de html, use innerHTML q aí ele aplica direto no html, com text content;
        temp.innerHTML = array.temp + " <sup>C°</sup>"

        // configurando descrição:
        const description = document.querySelector(".descricao");
        description.textContent = array.description;

        // configurando temp. máxima:
        const tempMax = document.querySelector("#tempMax");
        tempMax.innerHTML = array.tempMax + " <sup>C°</sup>";

        // configurando temp. mínima:
        const tempMin = document.querySelector("#tempMin");
        tempMin.innerHTML = array.tempMin + " <sup>C°</sup>" ;

        // configurando humidade:
        const humidityTag = document.querySelector("#humidity");
        humidityTag.textContent = array.humidity + "%";

        // configurando vento:
        const speedTag = document.querySelector("#speed");
        speedTag.textContent = array.speed + " Km/h";

        // configurando ícone:
        const img = document.querySelector("#imgIcon");
        const iconCode = array.icon;
        const URLIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        img.setAttribute("src", URLIcon)


    } else {
       
        // mostar função de mensagem de erro;
        showMsgError("Cidade não encontrada.");
     

        // se não achar a cidade, remove as classes de mostrar a seção temperatura e informações;
        sectionTempTag.classList.remove("showTemp");
        sectionInfoTag.classList.remove("showInfo");

        // se não achar a cidade, chama a função showImgError para mostrar a imagem
        showImgError("imgErrorShow");

    }
    

// função de adicionar classe na img de erro:
    function showImgError(classe){
        imgError.className = classe;
    }

})

// função de mensagem de erro:
function showMsgError(mesage) {
    const alert = document.querySelector("#msgError");
    alert.textContent = mesage;
    
}
