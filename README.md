# GITHUB USERS APP

## README IN ENGLISH

React.js application designed to be a Mobile App through which GitHub users are able to check other users' information.     
<a href="https://github-app-leonardo-federmann.surge.sh/">App URL</a>    
<a href="https://docs.github.com/en/rest">GitHub API</a>

### FUNCTIONALITIES AND NAVIGATION

A log in page in which it is possible to enter the name of a registered user is displayed in the first moment. There is an authentication process through which a "Not found" message will be shown in case the entered name is invalid and an error message in case the input field is empty, advising the user to fill it.     
Subsequently, the user is directed to a page that shows the profile which name was inserted and presents the following information:
- User's name in the window's upper-left corner;
- A "Log out" button in the window's upper-right corner, enabling the user to log out and go back to log in page;
- User's registered picture;
- User's full name, if it is registered (in case there is no registered full name, the same name used in log in will be displayed);
- A container which exhibits the numbers of: followers, users the displayed user follows and repositories;
- User's bio, if it is registered.     

In case the user clicks its number of repositories, it will be directed to a page that lists them; in case it clicks the number of followers or following users, it will be directed to a page that presents the users in those lists, each one displayed in a card containing an arrow in the right corner which, if clicked, will exhibit the profile page of the selected user.     

This profile page is similar to the one displayed in the beginning of the application. However, it presents a single difference: a "go back" button containing an arrow will be shown in the upper-left corner of the window, allowing the user to go back to the last page.     

When the profile of a user that is not the loged one is displayed, there will be a "Save" button in the window's right-upper corner instead of a "Log out" one. This button will make the visualized user the main one of the application. If the user visualizes its own profile, the "Log out" button will be shown instead of the "Save" one.     

It is important to highlight the user shall only have access to those pages if it is loged; otherwise, it will be directed to log in page.     

Finally, in case the typed URL does not correspond to any of the explained pages, the user will be directed to an error page containing a button which shall direct it to the log in one.

### TOOLS

Some of the tools that were used to develop this application were:
- Redux, aiming to create and manage the global state, which contains, for instance, the repositories of the displayed profile and its data, among other information. All the proper files of Redux (actions, reducers, store, etc) are in "redux" folder;
- Redux Saga, in order to update global state variables based on the responses of the requests to GitHub API. All the proper files of Redux Saga and the integration with the used API (sagas, requests and rootSaga) are in "sagas" folder, inside the "redux" one;
- Axios, which was used to send requests and make the integration with GitHub's API;
- Proper hooks of React.js and React-Redux, such as useState, useEffect, useSelector and useDispatch;
- Custom Hooks, aiming to develop access authentication and authorization and to allow controlled input in log in field;
- React Router, in order to structure the navigation among pages;
- Styled-Components and Material UI, for styling purposes.    

### WHAT WORKS

All the explained functionalities are properly working. The application was developed through **Mobile First**, specifically for IPhone 6/7/8, and is responsive for several types of Mobile devices, such as Galaxy and MotoG.

### WHAT DOES NOT WORK

There will be slight flawns in styling and design in case the application is used in Desktop or in Mobile's horizontal position, since it was not developed for it. Besides, the quantities of repositories, followers and following users that are displayed will be limited to 30, as this is the limit returned by GitHub's API.     
____________________________________________________________

## README EM PORTUGUÊS
Aplicação em React.js criada com o objetivo de ser um aplicativo Mobile por meio do qual usuários do GitHub possam acessar informações de outros usuários.  
<a href="https://github-app-leonardo-federmann.surge.sh/">Link da aplicação</a>    
<a href="https://docs.github.com/en/rest">API do GitHub</a>

### FUNCIONALIDADES E NAVEGAÇÃO      

Inicialmente, é exibida uma página de login, na qual é possível inserir o nome de um usuário cadastrado no GitHub. Há um processo de autenticação por meio do qual será exibida uma mensagem de "Not found" caso o nome inserido seja inválido e uma de erro caso o campo de input não seja preenchido, orientando o usuário a preenchê-lo.     
Em seguida, o usuário é direcionado à página do perfil cujo nome foi inserido, que conterá:
- O nome de usuário no canto superior esquerdo;
- Um botão de "Sair" no canto superior direito, por meio do qual é possível efetuar o logout e retornar à página de login;
- A foto cadastrada do usuário;
- O nome completo do usuário, caso cadastrado (se não houver um nome completo cadastrado, será exibido o mesmo nome usado no login);
- Um container que exibe o número de seguidores, o número de usuários seguidos e o número de repositórios;
- A biografia do usuário, se houver.    

Caso o usuário clique em seu número de repositórios, será direcionado a uma página na qual são listados seus repos.     
Caso clique no número de seguidores ou de usuários seguidos, será direcionado a uma página que conterá os usuários dessas listas, sendo cada um exibido em um card em cujo canto direito haverá uma seta que, se clicada, exibirá a página de perfil do referido usuário.   

Tal página de perfil é similar à exibida no início da aplicação. Todavia, ela contém uma única diferença: um botão de voltar contendo uma seta será mostrado no canto superior esquerda da tela, permitindo que o usuário retorne à página anterior.     
    
Sempre que for exibido o perfil de um usuário que não seja o logado, no canto superior direito, haverá um botão de "Salvar" em vez de "Sair", por meio do qual pode-se tornar o usuário visualizado o principal da aplicação.    
Caso o usuário esteja visualizando seu próprio perfil, será exibido o botão de "Sair" em vez de "Salvar". 

Ressalta-se que o usuário somente terá acesso a tais páginas se estiver logado; caso contrário, será direcionado à página de login.

Finalmente, caso a URL digitada não corresponda a nenhuma das páginas citadas, o usuário será direcionado a uma página de erro, na qual haverá um botão que o direcionará à de login.

### FERRAMENTAS

Algumas das ferramentas utilizadas foram:
- Redux, de forma a criar e gerenciar o estado global da aplicação, que contém, dentre outras informações, os repositórios do perfil visualizado e os dados do usuário logado. Todos os arquivos próprios do Redux (actions, reducers, store e afins) se encontram na pasta "redux";
- Redux-Saga, de modo a alterar os valores das variáveis de estado com base nas respostas das requisições feitas para a API do GitHub. Todos os arquivos próprios do Redux Saga e à integração com a API usada (sagas, requests e rootSaga) se encontram na pasta "sagas", dentro da pasta "redux";
- Axios, de modo a realizar as requisições e a integração com a API do GitHub;
- Hooks próprios do React.js e do React-Redux, tais como useState, useEffect, useSelector e useDispatch;
- Custom Hooks, visando a efetuar a autenticação e autorização de acesso e a possibilitar o uso de input controlado no campo de login;
- React Router, de modo a estruturar a navegação pelas páginas;
- Styled-Components e Material UI, com o objetivo de estilizar a aplicação.        

### O QUE FUNCIONA

Todas as funcionalidades supracitadas estão em pleno desempenho. A aplicação foi desenvolvida por meio de **Mobile First**, especificamente para IPhone 6/7/8, estando responsiva para variados tipos de aparelhos Mobile, tais como Galaxy e MotoG.

### O QUE NÃO FUNCIONA

Haverá leves desvios na estilização e design caso a aplicação seja usada em Desktop ou na posição horizontal de Mobile, visto não ter sido elaborada para tal. Ademais, a quantidade de repositórios, seguidores e usuários seguidos será limitada a 30, visto que esse é o limite retornado pela API do GitHub.

