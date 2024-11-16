Kitchen
-
Uma aplicação VueJS que consulta e gerencia pedidos de restaurantes, bares, lanchonetes e estabelecimentos do tipo. A aplicação permite visualizar e gerenciar o status dos pedidos, facilitando a organização e controle de processos dentro do restaurante.

Funcionalidades:
-
**Listar e Consultar Pedidos:**
Exibe todos os pedidos pendentes de um determinado restaurante, ordenados do mais antigo para o mais recente.

**Detalhes dos Pedidos:**
Permite visualizar todos os detalhes de um pedido específico ao clicar sobre ele.

**Atualizar Status dos Pedidos:**
Dentro da tela de detalhes do pedido, é possível aceitar o pedido e marcar o pedido como pronto, atualizando o status na aplicação do estabelecimento.

Requisitos:
-
**API Rails:**
A aplicação consome dados de uma API desenvolvida em Ruby on Rails, disponível no repositório [Take Away](https://github.com/vando-ramos/take-away). Certifique-se de que a API está configurada e rodando antes de usar a aplicação.

**Node.js:**
Para rodar o servidor local, é necessário ter o Node.js instalado.

**Editor de Código (opcional):**
Um editor como o Visual Studio Code pode facilitar a execução e a modificação da aplicação.

Configuração e Instalação:
-
1. Clone o repositório:

```git clone git@github.com:vando-ramos/kitchen-vuejs.git```  
```cd kitchen-vuejs```

2. Certifique-se de que a API Rails está rodando no endereço correto. A URL padrão configurada na aplicação é: http://localhost:3000.

Execute o servidor:
-
**Usando Node.js:**
Se você tem o Node.js instalado, pode usar o pacote ```http-server```:

1. Instale globalmente (caso ainda não tenha):

```npm install -g http-server```

2. Execute no diretório onde está seu HTML:

```http-server```

Acesse a aplicação em: http://127.0.0.1:8080

**Usando VSCode:**
1. Instale a extensão "Live Server".
2. Abra o arquivo index.html no VSCode.
3. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

