# Descrição

Este projeto contém a escrita de cenários em BDD, utilizando Gherkin com Cucumber, cases de automação de API e os documentos "prevenção_de_bugs.docx" e "estratégias_app.docx", na ordem das questões levantadas.

# Como inicializar o projeto

Clone o repositorio em sua máquina local com o comando ```git clone``` e em seguida, instale as dependências com o comando ```npm install```.
Use o comando ```npx cypress run``` para execução completa
Utilize o comando ```npx cypress open``` para abrir a janela de execução e selecionar os casos a serem executados

# Estrutura

Os testes automatizados para os endpoints da API estão organizados da seguinte maneira: 
* cypress\e2e\api contém os arquivos no qual realiza os testes.
* cypress\support contém os commands usados para estes testes.
* cypress\e2e\ui contém a escrita de cenários utilizando Cucumber.

# Observações

Foi utilizado as bibliotecas ```faker-js``` e ```faker-br``` para geração de dados nos testes envolvendo os endpoints da API.
