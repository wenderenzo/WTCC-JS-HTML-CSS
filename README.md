# Fundamentos da Web - HTML, CSS e JavaScript

## Sessão 1: Introdução e HTML

### Introdução ao HTML

#### Estrutura Básica de um Documento HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Título da Página</title>
    </head>
    <body>
        <h1>Olá, Mundo!</h1>
        <p>Este é um parágrafo de exemplo.</p>
    </body>
</html>
```

#### Tags Essenciais

-   `<html>`: Elemento raiz de um documento HTML.
-   `<head>`: Contém meta-informações sobre o documento.
-   `<title>`: Define o título da página (aparece na aba do navegador).
-   `<body>`: Contém o conteúdo visível da página.
-   `<h1>` a `<h6>`: Títulos, do mais importante (`<h1>`) ao menos importante (`<h6>`).
-   `<p>`: Parágrafo de texto.

#### Links e Imagens

-   Link: `<a href="https://example.com">Clique aqui</a>`
-   Imagem: `<img src="imagem.jpg" alt="Descrição da imagem">`

#### Exemplo de Página HTML Simples

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Página</title>
    </head>
    <body>
        <h1>Bem-vindo!</h1>
        <p>Esta é a minha primeira página web.</p>
        <a href="https://example.com">Visite meu site favorito</a>
        <img src="imagem.jpg" alt="Uma bela imagem" />
    </body>
</html>
```

# Sessão 2: CSS Básico

## Introdução ao CSS

### Sintaxe Básica do CSS

```css
seletor {
    propriedade: valor;
}
```

### Seletores Básicos

-   lemento: `p { color: blue; }`
-   Classe: `.minha-classe { font-size: 14px; }`
-   ID: `#meu-id { background-color: yellow; }`

### Estilização de Texto e Fontes

```css
h1 {
    color: red;
    font-family: Arial, sans-serif;
}
p {
    font-size: 16px;
    line-height: 1.5;
}
```

### Box Model

```css
div {
    margin: 10px;
    border: 1px solid black;
    padding: 20px;
    width: 100px;
    height: 100px;
}
```

### Exemplo de Estilização da Página HTML

```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}
h1 {
    color: #333;
}
p {
    color: #666;
}
a {
    color: blue;
    text-decoration: none;
}
```

# Sessão 3: JavaScript Básico

### Sintaxe Básica e Estrutura

~~~javascript
const mensagem = "Olá, Mundo!";
alert(mensagem);
~~~


A linha ``` const mensagem = "Olá, Mundo!" ``` cria uma variável chamada mensagem e atribui a ela o valor "Olá, Mundo!".
A palavra-chave ```const``` é usada para declarar uma constante, o que significa que o valor de mensagem não pode ser alterado depois de definido.

ref: https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics


###  Condicionais

~~~javascript
const hora = 10;
if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}
~~~

Aqui definimos a variável hora como 10 e usamos uma estrutura condicional if para verificar se hora é menor que 12. Se for, ele imprime "Bom dia!" no console, caso contrário, imprime "Boa tarde!". Como hora é 10, o console exibirá "Bom dia!".

ref: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals


###  Manipulação Simples do DOM


~~~javascript
document.getElementById("meuTitulo").innerHTML = "Título Alterado";
~~~


Aqui selecionamos um elemento do documento HTML com o ID "meuTitulo" e alteramos o seu conteúdo para "Título Alterado". Ele usa ````document.getElementById("meuTitulo").innerHTML```` para acessar e modificar o HTML interno desse elemento.

- ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction

###  Funções e Eventos Básicos

~~~javascript
function mostrarMensagem() {
    alert("Você clicou no botão!");
}

document.getElementById("meuBotao").onclick = mostrarMensagem;
~~~

Nesse exemplo temos a função chamada mostrarMensagem, que exibe um alerta com a mensagem "Você clicou no botão!" quando chamada. Em seguida, ele usa ``document.getElementById("meuBotao").onclick = mostrarMensagem`` para associar essa função ao evento de clique de um botão com o ID "meuBotao". Assim, quando o botão é clicado, a função mostrarMensagem é executada, exibindo o alerta.

 - ref: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events


 ### EXEMPLO DE INTERATIVIDADE

~~~html
 <!DOCTYPE html>
<html>
<head>
    <title>Página Interativa</title>
    <script>
        function alterarTexto() {
            document.getElementById("meuParagrafo").innerHTML = "Texto alterado pelo JavaScript!";
        }
    </script>
</head>
<body>
    <h1 id="meuTitulo">Título Original</h1>
    <p id="meuParagrafo">Este é um parágrafo.</p>
    <button id="meuBotao" onclick="alterarTexto()">Clique aqui</button>
</body>
</html>
~~~


# Projeto Prático