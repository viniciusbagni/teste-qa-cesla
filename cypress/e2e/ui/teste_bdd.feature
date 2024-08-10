Feature: APP Flutter

    Background: Quero gerenciar cadastros de alunos
        Given Sendo um usuário administrativo da Instituição
        When Quero gerenciar cadastros de alunos
        Then Para que eu possa realizar a matrícula do aluno

    Scenario: Login
        And I check that I am in the "Inserir exames" tab and continue searching for the "Médico solicitante" informing CRM "12"
        And after search to the doctor, I search for the desired "HEMOGRAMA" test
        And I include a new exam from the exam suggestions by clicking on "RM" and selecting the "RM CRANIO" exam, then clicking on the "Adicionar" button
        Then click on "Encerrar" to close the protocol, click the reason "Teste: Homologação" and click on "Salvar"