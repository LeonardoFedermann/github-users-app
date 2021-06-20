## REACT.JS CHALLENGE / TESTE DE LÓGICA

Prezados membros da Luby,    
Segue nesta aplicação a realização do teste de React.js e do teste de lógica para seu processo seletivo. O link da aplicação, gerado por meio do surge, é: https://github-app-leonardo-federmann.surge.sh/    
Além disso, as respostas das questões do teste de lógica se encontram em uma pasta própria (**TESTE DE LÓGICA**), dentro da pasta src.

#### REQUISITOS NÃO FUNCIONAIS

Conforme solicitado, o aplicativo utiliza o React.js e gerencia suas rotas por meio do React Router. Ademais, o estado global (que contém, dentre outras informações, o usuário logado, os seguidores e os repositórios do usuário exibido) é gerenciado por meio de Context API e a, para a estilização, usei tanto componentes estilizados (por meio da biblioteca Styled-components) quanto o Design System Material UI.  

#### REQUISITOS NÃO FUNCIONAIS

Conforme solicitado:
- O usuário é autenticado por meio de seu username no GitHub. Caso não esteja autenticado, o usuário não terá acesso às páginas da aplicação, apenas à de erro e à de login. Tal processo de autenticação e autorização foi realizado por meio de Custom Hooks;
- As informações do usuário logado são armazenadas no estado global e do usuário visualizado, em uma variável de estado dentro de cada arquivo (para tanto, foi usado o useState, um Hook nativo do React.js);
- A navegação com abas foi elaboada conforme solicitado;
- Quando o usuário estiver visualizando o perfil de outro, há, no canto superior direito da tela, um botão "Salvar" por meio do qual é possível tornar aquele usuário o principal da aplicação - exatamente conforme o protótipo fornecido. Adicionei, também, uma funcionalidade extra: caso o usuário clique no botão de "Salvar", tal botão mudará e passará a ser o de "Sair", por meio do qual é possível efetuar o logout;
- Na tela de início, no mesmo canto, haverá um botão de "Sair", por meio do qual o usuário poderá sair da aplicação. Tal botão (e não o de "Salvar") estará presente sempre que o usuário estiver visualizando seu próprio perfil;
- Apenas as informações existentes no perfil do usuário serão exibidas. No caso específico do nome, caso o usuário não possua um cadastrado, será exibido sua informação de login. EXEMPLO: caso o usuário Anilton Veiga (exibido no protótipo) não possua nome, será exibido, neste campo, seu nome de login, ou seja, anilton.veiga.

#### OBSERVAÇÕES ADICIONAIS

- Todas as funcionalidades estão de acordo com o exigido e o design segue os padrões do protótipo. A estilização não está exatamente igual à do protótipo; contudo, poderei adequá-la caso tenha a oportunidade posteriormente;
- A aplicação foi desenvolvida para IPhone 6/7/8. Ela se encontra responsiva para variados tipos de aparelhos Mobile, tais como Galaxy e Moto G;
- Caso o usuário digite uma URL que não esteja de acordo com nenhuma rota, será direcionado a uma página de erro, na qual haverá um botão que irá conduzi-lo à de login/autenticação.

Por fim, agradeço imensamente pela oportunidade de realizar este desafio e espero ansiosamente trabalhar com vocês em breve!

Atenciosamente,

Leonardo Federmann
