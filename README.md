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