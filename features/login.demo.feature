# language: pt
Funcionalidade: Demonstração de Login

  Esquema do Cenário: Usuário faz login com sucesso
    Dado que o usuário está na página de login
    Quando o usuário insere <usuario> e <senha>
    E clica no botão de login
    Então o usuário deve ser redirecionado para a página inicial
    E a mensagem <mensagem> de confirmação deve ser exibida

    Exemplos:
      | usuario  | senha                | mensagem                      |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
