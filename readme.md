# Trabalho Firebase

Projeto com demonstração e utilização na prática da tecnologia do Firebase, de algumas funções, desenvolvido com HTML, CSS e Javascript:

## Links

- [cpw-firebase](https://cpw-firebase.web.app) 
- [cpw-firebase](https://cpw-firebase.firebaseapp.com)
- [Firebase](https://firebase.google.com/?hl=pt-BR)
- [Documentation](https://firebase.google.com/docs?hl=pt-BR)
- [Firebase Open Source](https://firebaseopensource.com)
- [Firebase - NPM](https://www.npmjs.com/package/firebase)



## Tecnologias

#### HTML
- HTML5
- CSS3
- SASS
- Node.js
- Gulp
- Jquery
- Firebase

## O que é BaaS?
Backend as a service: Conhecido como " back-end como serviço ", fornece aos desenvolvedores de softwares/aplicativos abstração completa da infraestrutura do lado do servidor, além de trazer um serviço de computação em nuvem para acelerar a criação. Estes serviços são prestados através da utilização de kits de desenvolvimento de software personalizados (SDK) e interfaces de programação de aplicações.(APIs).

## Firebase
O Firebase é uma plataforma de desenvolvimento de aplicativos para dispositivos móveis e web desenvolvida pela Firebase, Inc. em 2011 e adquirida pelo Google em 2014. Em outubro de 2018, a plataforma Firebase possuía 18 produtos. Dentre tantos serviços, abordaremos o **Real-Time Database**, **Authentication** e **Hosting**:

# Criando um projeto no console Firebase
## Material de apoio

*	Ir para o console
*	Add projeto ou abrir projeto criado
*	Criar projeto
    *	Nome do seu projeto
    *	Aceitar Google Analytics
    *	Selecionar conta de usuário para ligar ao Analytics
*	Iniciando projeto ou abrindo um já criado
    *	Selecionar qual tipo de aplicação: android, ios, web ou unity
    *	Selecionando web: registrar apelido para o aplicativo
    *	Pode configurar o firebase hosting ou deixar para depois
    *	Configurando hosting exemplo: teste-start.web.app
    *	Copiar e Adicionar SDK do Firebase no seu projeto/html
    *	Se quiser pode instalar pacote de ferramentos do Firebase para npm
    *	Criar e especifique seu site no firebase.json com código informado pela plataforma
    *	Final: projeto concluído e ferramentas npm instaladas pode fazer deploy para o servido pela linha de comando, plataforma também mostra comando do procedimento.

## Para implantar no Firebase, você usará a Firebase CLI, uma ferramenta de linha de comando via NPM

**Execute o seguinte comando npm para instalar as ferramentas CLI firebase:**
- `npm install -g firebase-tools`

**Iniciar seu projeto**
**Execute este comando no diretório raiz do seu app:**
`firebase init`

**Faça login no Google:**
`firebase login`

**Fazer logout no Google:**
`firebase logout`

**Verificar todos os comandos:**
`firebase`

**Listar projetos**
`firebase projects:list`
`firebase list`

**Iniciar serviço de Hosts**
`firebase init hosting`

**Fazer implantação/subir arquivos:**
`firebase deploy --only hosting:cpw-trabalho`
`https://cpw-trabalho.web.app/`

**Inicie o servidor local para desenvolvimento. Execute o seguinte comando a partir da raiz do seu diretório de aplicativos local:**
`firebase serve`

