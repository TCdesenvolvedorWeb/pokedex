# 🎮🕹️ Pokedex | 📰 Teste técnico

<img src="./src/img/desktop.gif"/>
<img src="./src/img/mobile.gif"/>

👀 Venha saber mais sobre esta pokedex !

## Sobre o projeto

🗣️ É uma apresentação dos vários pokemons, em formato de SPA, ao clicar em alguma imagem ou nome, você será direcionado para uma página diferente, onde lhe será apresentado mais detalhes (imagem , nome, habilidades , movimentos e tipos ), do pokemon selecionado.

🤔 O propósito deste teste técnico é a consolidação dos meus conhecimentos adiquiridos no curso Dev em dobro - FullStack , onde eu tive que usar de tudo o que eu aprendi ao longo desses poucos meses e implementar aqui.

## 📋 Funcionalidades

🖼️ Card clicável: Ao clicar o usuário é redirecionado para a página de infomações detalhadas do pokemon.

🎨 Theme toggle: Botão que permite o usuário alternar os temas da Home.

🔎 Barra de pesquisa: Ao digitar o nome do pokemon ou número dele, irá mostrar os detalhes do pokemon escrito, caso o nome ou número não exista será informado que ele não existe.

🗃️ Filtro de tipo: Um select que mostra opções de filtrar pelo tipo do pokemon.

➕ Show more: Botão que ao ser clicado adiciona mais 10 pokemons além dos 10 iniciais.

## 🛠️ Ferramentas utilizadas

- React com Vite: para a criação de todo o projeto, já que se tratava de uma SPA

- Axios: para as requisições, por facilitar o trabalho com promises e minha vontade de usa-lo.

- try e catch juntamente do finally, que me permitiram testar a requisição assim que as fiz, me entregando imediatamente qualquer erro que aparecer, assim como o finally me permitiu adicionar uma breve tela de carregamento caso a requisição ainda esteja em andamento.

- Styled components: Por permitir criar tags únicas, evitando os problemas de especificidade do css.

- Context API: para criação do theme toggle , filter e GetName, já que nessas ocasiões eu precisava que determinadas ações ocorressem simultaneamente.

- React router: por ser fácil de usar e poder navegar entre as páginas da aplicação.

- map para as renderizações dos elementos, pois muitas vezes se fez necessário entrar nos arrays mais internos dos elementos entregues pelas requisições.

- filter juntamente do some (serve para entrar nos arrays internos quando se esta usando o filter), para poder fazer a filtragem pelo tipo, tendo em vista que só entrega os arrays que cumprem determinada condição.

- Na barra e pesquisa adicionei a funcionalidade de usar a tecla enter.

## ⚙️ Pré-requisitos

- [Node.js (versão 16+)](https://nodejs.org/pt/download).
- Gerenciador de pacotes npm ou yarn.
- [Visual Studio Code](https://code.visualstudio.com/download)

## 🚀 Como Rodar o Projeto 

1. **Clone o repositório:**  

     ```bash 
    git clone https://github.com/Sauliitoz/PokeApi.git  
   cd PokeApi  
2.**Instale as dependências:**

    npm install  
    # ou  
    yarn install  
    
3.**Inicie o servidor de desenvolvimento:**

    npm run dev  
    # ou  
    yarn dev  
    
4.**Acesse o projeto no navegador:**

O projeto estará disponível em http://localhost:5173.

## 🖥️ Estrutura do Projeto

- src/components: Componentes reutilizáveis da aplicação.
- src/components/Requests: Requisições da API.
- src/pages: Páginas principais do projeto (lista de Pokémon e detalhes).
- src/styles: Configurações de estilos globais com styled-components.
- src/context: Contextos utilizados na aplicação.

## 🏆 Desafios Enfrentados
Este projeto foi uma grande oportunidade para aprender e crescer como desenvolvedor iniciante. Alguns dos principais desafios foram:

❗ Minha maior dificuldade se apresentou logo de cara, eu não tinha entendido que eu tinha que fazer outra requisição para entrar no data dos pokemons, mas depois de tomar um cafezinho ☕, minha mente 🧠 ficou clara 💡.

❗A segunda foi que eu não estava tentando fazer a requisição dos pokemons sem usar async e await, o que resultava na minhas rendeizações acontecerem antes da requisição ser feita, o motivo de eu ter feito isso foi por achar que dava para usar o axios sem usar async e await ❌.


❗ Também tive problemas na hora de passar o caminho dos elementos, o que me fez pensar que meu código estava errado, mas após pesquisar um pouco sobre o erro que estava sendo entregue no meu console, me deparei com o operador de encadeamento opcional (?.), que permite acessar propriedades de um objeto ou chamar métodos sem precisar verificar explicitamente se o objeto ou uma das propriedades intermediárias está indefinida ou nula. Isso ajuda a evitar erros, como tentativas de acessar propriedades de um valor null ou undefined.

### 🍷 Conclusão

Com todos esses acontecimentos, e o tanto de vezes que eu errei até acertar, me fez compreender muito mais o uso dos hooks, com o useState e useEffect, a melhor forma de aplicação dos operadores, métodos e demais coisas.

## 🐛 Relatório de Bugs
Se encontrar algum problema, sinta-se à vontade para abrir uma [issue](https://github.com/TCdesenvolvedorWeb/Pokedex/issues).