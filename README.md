## GITHUB USERS APP

Aplicação em React.js criada com o objetivo de ser um aplicativo Mobile por meio do qual usuários do GitHub possam acessar informações de outros usuários. O link da aplicação, gerado por meio do surge, é: https://github-app-leonardo-federmann.surge.sh/     
A aplicação foi desenvolvida por meio da integração com a API própria do GitHub, cujo link é: https://docs.github.com/en/rest   

#### NAVEGAÇÃO

Inicialmente, é exibida uma página de login, na qual é possível inserir o nome de um usuário cadastrado no GitHub. Há um processo de autenticação por meio do qual será exibida uma mensagem de "Not found" caso o nome inserido seja inválido e uma de erro caso o campo de input não seja preenchido, orientando o usuário a preenchê-lo.     
Em seguida, o usuário é direcionado à página do perfil cujo nome foi inserido, que conterá:
- O nome de usuário no canto superior esquerdo;
- Um botão de "Sair" no canto superior direito, por meio do qual é possível efetuar o logout e retornar à página de login;
- A foto cadastrada do usuário;
- O nome completo do usuário, caso cadastrado (se não houver um nome completo cadastrado, será exibido o mesmo nome usado no login);
- Um container que exibe o número de seguidores, o número de usuários seguidos e o número de repositórios;
- A biografia do usuário, se houver.    

Caso o usuário clique em seu número de repositórios, será direcionado a uma página na qual são listados todos os seus repos.     
Caso clique no número de seguidores ou de usuários seguidos, será direcionado a uma página que conterá todos os usuários dessas listas, sendo cada um exibido em um card em cujo canto direito haverá uma seta que, se clicada, exibirá a página de perfil do referido usuário.    
    
Sempre que for exibido o perfil de um usuário que não seja o logado, no canto superior direito, haverá um botão de "Salvar" em vez de "Sair", por meio do qual pode-se tornar o usuário visualizado o principal da aplicação.    
Caso o usuário esteja visualizando seu próprio perfil, será exibido o botão de "Sair" em vez de "Salvar". 


#### FERRAMENTAS

Algumas das ferramentas utilizadas, todas próprias do React.js, foram:
- React Router, de modo a estruturas a navegação pelas páginas;
- Hooks nativos do React.js, tais como useState, useEffect e useContext;
- Custom Hooks, visando a efetuar a autenticação e autorização de acesso e a possibilitar o uso de input controlado no campo de login;
- Context API, de forma a gerenciar o estado global da aplicação, que contém, dentre outras informações, os repositórios do usuário visualizado e os dados do usuário logado;
- Styled-Components e Material UI, com o objetivo de estilizar a aplicação;
- Axios, de modo a realizar a integração com a API do GitHub.

### O QUE FUNCIONA

Todas as funcionalidades supracitadas estão em pleno desempenho. A aplicação foi desenvolvida por meio de **Mobile First**, especificamente para IPhone 6/7/8, estando responsiva para variados tipos de aparelhos Mobile, tais como Galaxy e MotoG.

### O QUE NÃO FUNCIONA

Haverá leves desvios na estilização e design caso a aplicação seja usada em Desktop, visto não ter sido elaborada para tal. Ademais, não é possível acessar detalhes dos repositórios de cada usuário. 

