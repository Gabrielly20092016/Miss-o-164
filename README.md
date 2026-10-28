## UC10 - Realizar Testes nas Aplicações Desenvolvidas
## Gabrielly Vitória


## Descrição  e Funcionalidades

-Aplicação de controle de tarefas
- Cadastra tarefas: INSERT -> CREATE
-Consultar e listar tarefas:SELECT -> READ
-Exclui tarefas: UPDATE-> UPDATE
-Atualiza tarefas: DELETE -> DELETE




## Tecnologias

| Tecnologia | Função|
|------------|-------|
|HTML| Estrututra/esqueleto da página web |
|CSS | Estilização/design da página |      
|JavaScript | Interatividade/comportamento |
|Node.js | Ambiente de execução que permite executar o JS no servidor |
|Jest | Framework de testes automatizados |
|SQLite | Banco de dados relacional | 
|Express | Framework back-end que recebe requisições do front-end |
|Supertest | Ferramenta que simula requisições HTTP para testar a sua API |




# Testes

## Testes Unitários

| Caso de teste |   Entrada | Saída esperada |
| ------------- |    -------- | -------------- |
|1. Limitar o título a 120 caracteres |  Tentar digitar mais de 120 caracteres | O campo permite apenas 120 caraceteres, depois bloqueia | 
|2. Se o título estiver vazio  |  Título vazio ("")	 | Failed to fetch|  
|3.Remover espaços do título |  "  estudar amanhã     "	 |  "estudar amanhã" |   