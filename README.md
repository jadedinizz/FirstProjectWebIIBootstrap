# Galeria Mundo Ghibli

Este projeto foi desenvolvido na disciplina de **Web II** e consiste em uma **Galeria de Imagens com Filtros** utilizando o framework Bootstrap. A galeria apresenta categorias filtráveis, efeitos hover nos cards, e um modal interativo para visualização ampliada das imagens, com navegação entre elas.

## Funcionalidades

- **Galeria Filtrável**: Botões para filtrar imagens por categorias (Todos, Fantasia, Infantil, Aventura).
- **Modal com Navegação**: Visualização ampliada das imagens com botões para navegar para a próxima/anterior imagem.
- **Dark Mode**: Alternância entre temas claro e escuro, com efeitos visuais dinâmicos (folhas caindo no modo claro, chuva no modo escuro)
- **Responsividade**: Design adaptável para dispositivos móveis e desktop.
- **Interatividade**: Manipulação do DOM com JavaScript para filtros, modal e alternância de tema.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização personalizada, variáveis CSS para temas, animações e responsividade.
- **Bootstrap 5.3.3**: Framework CSS para layout em grid, componentes responsivos e modal.
- **JavaScript (ES6+)**: Manipulação do DOM, eventos e lógica interativa.

## Como Executar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. Interaja com os filtros, clique nas imagens para abrir o modal e alterne o tema usando o botão no canto superior direito.

Não há dependências externas além do Bootstrap carregado via CDN.

## Estrutura do Projeto

```
/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   └── scripts.js      # Scripts JavaScript
└── assets/
    ├── icon/
    │   └── favicon.png # Ícone do site
    └── img/            # Imagens da galeria
```

## Critérios Avaliados

Este projeto atende aos seguintes critérios de avaliação da disciplina:

- **HTML bem estruturado e semântico**: Uso de elementos semânticos como `<header>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- **Uso correto do framework CSS**: Aplicação adequada das classes do Bootstrap para grid (`row`, `col-*`), responsividade e componentes como modal.
- **JavaScript para interatividade e manipulação do DOM**: Código para filtros dinâmicos, abertura/fechamento do modal e navegação.
- **Código organizado e bem comentado**: Estrutura clara nos arquivos CSS e JS, com comentários explicativos.
- **Design responsivo e usabilidade**: Layout adaptável via media queries e classes Bootstrap, garantindo boa experiência em dispositivos móveis.
- **Aderência ao tema**: Tema inspirado no Studio Ghibli, com cores suaves e elementos visuais relacionados.
- **Criatividade**: Implementação de temas com efeitos visuais únicos (folhas e chuva).
- **Estilo**: Design elegante com hover effects, gradientes e transições suaves.

