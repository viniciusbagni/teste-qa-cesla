Feature: Gerenciamento de Cadastros de Alunos

    Background: Quero gerenciar cadastros de alunos
    Sendo um usuário administrativo da Instituição
    Quero gerenciar cadastros de alunos
    Para que eu possa realizar a matrícula do aluno

    Scenario: Acessar a tela de Cadastro do Aluno a partir da Listagem de Alunos
        Given que estou na tela de Listagem de Alunos
        When clico em "Adicionar Aluno"
        Then abre a tela de Cadastro do Aluno
        And exibe os campos obrigatórios vazios

    Scenario: Criar um novo aluno com dados válidos
        Given que inseri dados válidos nos campos
        When clico em "Adicionar"
        Then cria o novo aluno na base
        And retorna mensagem de sucesso

    Scenario: Exibir mensagem de erro ao inserir dados inválidos
        Given que inseri dados inválidos nos campos
        Then retorna mensagem de necessidade de preenchimento dos campos obrigatórios

    Scenario: Cancelar o cadastro e retornar à tela de Consulta de Alunos sem salvar
        Given que inseri dados válidos nos campos
        When clico na up navigation e/ou utilizo gestos
        Then retorna para tela "Consulta de Alunos"
        And não persiste a gravação dos dados no banco

    Scenario: Listar alunos cadastrados na tela home
        Given que estou na tela home da aplicação
        Then abre a tela com listagem de Alunos
        And abre a tela com ícone de "edição de Alunos"
        And abre a tela com ícone de "exclusão de Alunos"
        And abre a tela com botão "Adicionar Aluno"

    Scenario: Acessar a tela de Edição de Aluno a partir da Listagem de Alunos
        Given que estou na listagem de alunos
        When clico no ícone de "Editar aluno"
        Then abre a tela de "Editar Aluno"
        And exibe os campos preenchidos
        And habilita alteração dos campos editáveis

    Scenario: Salvar as alterações feitas no cadastro do aluno
        Given que estou na tela de "Edição do Aluno"
        When clico em "Salvar"
        Then grava os dados editáveis na base
        And retorna mensagem de sucesso

    Scenario: Cancelar a edição e retornar à tela de Listagem de Alunos sem salvar
        Given que estou na tela de "Edição do Aluno"
        When clico na up navigation e/ou utilizo gestos
        Then retorna para a tela de "Listagem de Alunos"
        And não persiste a gravação dos dados

    Scenario: Exibir a modal de confirmação de exclusão ao clicar no ícone de excluir aluno
        Given que estou na listagem de alunos
        When clico no ícone de "Excluir aluno"
        Then exibe a modal de "confirmação de exclusão"

    Scenario: Excluir o aluno após a confirmação
        Given que estou na modal de "confirmação de exclusão"
        When clico em "Excluir aluno"
        Then exclui o registro do aluno
        And retorna mensagem de sucesso

    Scenario: Cancelar a exclusão e fechar a modal
        Given que estou na modal de confirmação de exclusão
        When clico em Cancelar
        Then fecha a modal e não persiste a exclusão