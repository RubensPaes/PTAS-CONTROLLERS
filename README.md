# Pesquisa sobre Middleware

## Conceito de Middleware
Middleware é uma camada intermediária de software que conecta diferentes componentes ou sistemas de uma aplicação, facilitando a comunicação e a troca de dados entre eles. Ele atua como uma ponte que permite ao sistema lidar com funções específicas em desenvolvimento de sistemas, como segurança, autenticação, logging, roteamento, e manipulação de requisições, sem que essas funcionalidades precisem estar incorporadas ao código principal da aplicação.

## Funcionalidades e Aplicação no Desenvolvimento de Sistemas
Os middlewares são amplamente aplicados em aplicações web devido à sua capacidade de gerenciar fluxos de dados e requisições de maneira eficaz e organizada. Em aplicações modernas, eles são responsáveis por grande parte do processamento entre o cliente e o servidor, garantindo que as requisições sigam o caminho adequado e que os dados sejam processados conforme necessário. Entre as principais funcionalidades oferecidas por middlewares, destacam-se o roteamento de requisições, a segurança, o tratamento de erros e a compressão de dados.

## Tipos Comuns de Middleware em Node.js
- **Middleware de Autenticação**:  Esse middleware é fundamental para controlar o acesso a rotas protegidas da aplicação. Em sistemas onde a segurança é prioritária, como em bancos ou e-commerces, o middleware de autenticação verifica a identidade dos usuários antes que eles possam acessar determinados recursos (Middleware de verificação de JWT com jsonwebtoken.)

- **Middleware de Logging**: Responsável por registrar detalhes de cada requisição feita à aplicação, o middleware de logging é essencial para monitorar o comportamento da aplicação em tempo real e para auditoria (morgan para registrar cada requisição.)

- **Middleware de Manipulação de Erros**: Esse middleware é usado para capturar erros e enviá-los ao cliente de forma apropriada, sem comprometer o funcionamento da aplicação (throw; errorHandler.)

- **Middleware de Parse de Dados**:  Esse middleware é comum em aplicações que recebem dados JSON ou de formulários HTML. O Body Parser converte automaticamente esses dados em objetos JavaScript acessíveis dentro da aplicação, simplificando a manipulação e processamento das informações recebidas (express.json() para interpretar o corpo da requisição como JSON.)

