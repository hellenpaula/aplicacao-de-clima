
<h1 align="center"> Aplicação de Clima - OpenWeather Api </h1>
<h1 align="center"><a href="https://hellenpaula.github.io/aplicacao-de-clima/" target="_blank">📍Veja o projeto aqui!</a></h1>

## 📷 Preview do projeto:
<h1 align="center"> <img src="src\img\projeto-api-clima-video.gif" width="600px"> </img></h1>

##  📌 Sobre:
Este é um projeto de aplicação de clima desenvolvido com HTML, CSS e JavaScript, utilizando a API pública OpenWeather para buscar informações meteorológicas em tempo real de cidades do mundo.

Durante o desenvolvimento, trabalhei a lógica necessária para o consumo de APIs externas,manipulação do DOM, tratamento de erros, organização de lógica dentro de funções, exibição dinâmica de dados na interface.

## 🧩 Funcionalidades:
- Busca de cidades através da API OpenWeather.

- Exibição dinâmica das informações do clima (temperatura,descrição do clima, umidade e velocidade do vento.)

- Ícone dinâmico alterado conforme o clima retornado.

- Tratamento de erros (ex: cidade não encontrada, erro na API).

- Exibição de imagem personalizada para erros.

- Acionamento da pesquisa ao clicar no ícone de busca ou pressionar Enter.

- Layout responsivo para telas pequenas.

## 💻 Tecnologias utilizadas:
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Estrutura semântica da interface.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - estilização, organização e responsividade dos elementos.
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - lógica, eventos, consumo da API e manipulação do DOM.
- [OpenWeather API](https://openweathermap.org/api) - fornecimento dos dados de clima em tempo real.
- [Font Awesome](https://fontawesome.com/) - ícones utilizados para indicar dados do clima.

## ⚙️ Fluxo lógico da aplicação:
A aplicação funciona através de três pilares principais:
captura da entrada, requisição à API e exibição dinâmica dos dados.

1️⃣ **Captura de eventos:**
O campo de entrada e o botão são monitorados por eventos:

- **keyup** detecta quando o usuário pressiona Enter.

- **click** dispara a busca manualmente.

Quando um desses eventos ocorre, a função procurarCidade() é chamada.

2️⃣ **Validação de entrada:**
Antes da requisição:

- Se o campo estiver vazio → exibe mensagem de erro + imagem.

- Remove informações antigas, caso estejam na tela.

Isso evita requisições desnecessárias.

3️⃣ **Requisição à API:**
Um fetch é feito para a URL da API:

- A resposta é convertida para JSON.

- O código de retorno é verificado (200 → sucesso).

4️⃣ **Tratamento dos dados retornados:**
Quando os dados chegam:

- São organizados em um objeto JavaScript.

- Valores como temperatura, descrição, umidade e vento são arredondados ou formatados.

- O ícone do clima é atualizado dinamicamente.

5️⃣ **Exibição na interface:**
A função exibirClima() atualiza:

- nome da cidade + país.

- temperatura .

- descrição.

- temperaturas mínima/.

- umidade.

- velocidade do vento.

- ícone do clima.

6️⃣ **Tratamento de erros:**
Se a cidade não existir ou o retorno da requisição for inválido:

- Exibe mensagem de erro.

- Mostra imagem personalizada.

- Oculta seções de informações.

- Mostra no console detalhes para debug.

## 🧠 Aprendizados:
Durante o desenvolvimento deste projeto, pude reforçar e melhorar:

- Consumo de **APIs REST** com fetch.

- Manipulação de respostas **JSON**.

- Tratamento de erros com **try...catch**.

- Organização da lógica usando funções bem definidas.

- Manipulação do DOM.

- Eventos (**keyup** com **Enter**).

- Uso de classes CSS para mostrar/esconder elementos.


## 🚀 Melhorias futuras: 
- Adicionar previsão para os próximos dias.
- Criar tema claro/escuro.
- Salvar cidades favoritas.
- Adicionar animações mais suaves nas seções.