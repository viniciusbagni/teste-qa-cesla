Feature: Gerenciamento de Cadastros de Alunos

    Background: Quero gerenciar cadastros de alunos
    Sendo um usuário administrativo da Instituição
    Quero gerenciar cadastros de alunos
    Para que eu possa realizar a matrícula do aluno

    Scenario: Entrar na aplicação com sucesso
        Given que estou na tela de Login
        And inseri dados válidos nos campos de "Usuário" e "Senha"
        When clico no botão "Entrar"
        Then sou redirecionado para a tela Home do aplicativo

    Scenario: Entrar na aplicação com dados inválidos
        Given que estou na tela de Login
        And inseri dados inválidos nos campos de "Usuário" e "Senha"
        When clico no botão "Entrar"
        Then vejo uma mensagem de erro informando que as credenciais estão incorretas

    Scenario: Campos de login obrigatórios não preenchidos
        Given que estou na tela de Login
        And preenchi apenas um campo "Usuário"
        When clico no botão "Entrar"
        Then vejo uma mensagem de alerta informando que os campos são obrigatórios