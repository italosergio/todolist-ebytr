_Bem vinda(o)!!_

# To Do List - Ebtry
![Captura de tela de 2022-07-04 05-36-34](https://user-images.githubusercontent.com/87591265/177116459-b2ebadc0-8cf7-4c00-9c3e-3162123477dd.png)

# Tecnologias
   - React.js
   - Node.js
   - MySql
   - Sequelize

# Requisitos

1. Adicionar tarefa
2. Remover tarefa
3. Limpar quadro de tarefas
4. Editar tarefas
   - Marcar tarefa como concluida
   - Editar descricao da tarefa
   - Editar status da tarefa
5. Ordenar tarefas por status, descricao ou prioridade

# Como acessar

1. Clone o repositório
    * `git clone https://github.com/italosergio/todolist-ebytr`
2. Entre na pasta do repositório que você acabou de clonar:
    * `cd todolist-ebytr`
3. Instale as dependências
    * `npm install`
4. Inicialize o projeto:
    ** _certifique-se de possuir docker instalado na sua máquina_
    * `npm run compose:up` e espere concluir o processo
    * Tudo pronto para acessar `http://localhost:3000`
    * Não esqueça de, após o uso da aplicação, parar os conteiners criados pra evitar uso desnecessario de memória. Para isso use o script ja criado no projeto `npm run compose:down`.
    
    ⚠️ certifique-se de estar na pasta raiz do projeto `todolist-ebytr`.

# Testes  

1. Clone o repositório
    * `git clone https://github.com/italosergio/todolist-ebytr`
2. Entre na pasta backend do repositório que você acabou de clonar:
    * `cd todolist-ebytr/app/backend`
3. Instale as dependências
    * `npm install`
4. Rode os testes com:
    * `npm run test:coverage` (recomendado)
      ou
    * `npm test`

![Captura de tela de 2022-07-05 04-56-09](https://user-images.githubusercontent.com/87591265/177280828-a92b9003-b1ff-4e5a-be3e-9906c6c91a82.png)![Captura de tela de 2022-07-05 05-02-54](https://user-images.githubusercontent.com/87591265/177280904-ded04439-1b54-4b86-bef0-54d2bbb1c49c.png)
