# BloqueioApp

## Descrição

O **BloqueioApp** é uma aplicação desenvolvida com Expo e React Native que permite gerenciar o bloqueio e desbloqueio de equipamentos de forma prática e eficiente. O aplicativo possibilita que usuários registrem informações sobre o bloqueio de equipamentos, incluindo detalhes do executante e do solicitante, e também permite o envio de notificações por e-mail sobre as operações realizadas.

## Funcionalidades

- **Bloqueio de Equipamentos**: Registre o bloqueio de equipamentos com informações do executante e do solicitante.
- **Desbloqueio de Equipamentos**: Permite o desbloqueio de equipamentos previamente bloqueados.
- **Armazenamento Local**: Utiliza o AsyncStorage para armazenar informações sobre os bloqueios de forma persistente.
- **Envio de E-mails**: Envia notificações por e-mail sempre que um equipamento é bloqueado ou desbloqueado.

## Tecnologias Utilizadas

- [Expo](https://expo.dev/) - Framework para desenvolvimento de aplicativos React Native.
- [React Native](https://reactnative.dev/) - Biblioteca para construção de interfaces móveis.
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Sistema de armazenamento local para React Native.
- [Expo Mail Composer](https://docs.expo.dev/versions/latest/sdk/mail-composer/) - Para enviar e-mails a partir do aplicativo.

## Instalação

Para instalar e executar o **BloqueioApp** em sua máquina, siga os passos abaixo:

### Pré-requisitos

Antes de começar, verifique se você tem os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (instale globalmente usando o comando `npm install -g expo-cli`)
- Um emulador de dispositivo móvel ou um dispositivo físico com o aplicativo Expo Go instalado.

### Passos de Instalação

1. **Clone o repositório:**
   Abra o terminal e execute o seguinte comando para clonar o repositório do projeto:
   ```bash
   git clone https://github.com/seuusuario/bloqueioApp.git
2. **Navegue até o diretório do projeto:**
   Acesse a pasta do projeto que você acabou de clonar:
   ```bash
   cd bloqueioApp
3. **Instale todas as dependências:**
   Execute o comando abaixo para instalar todas as dependências necessárias do projeto
   ```bash
   npm install
4. **Inicie o projeto:**
   Após a instalação das dependências, inicie o servidor de desenvolvimento com o seguinte comando
   ```bash
   expo start

5. **Abra o aplicativo**
*  Se você estiver usando um dispositivo físico, escaneie o código QR que aparece no terminal ou na página do navegador que se abre.
*  Se você estiver usando um emulador, escolha a opção correspondente para abrir o aplicativo no emulador.

**DICA**
* Certifique-se de que seu dispositivo móvel e seu computador estão na mesma rede Wi-Fi para que o aplicativo possa ser acessado.
* Caso encontre algum erro durante a instalação, verifique as mensagens de erro no terminal e consulte a documentação do Expo para solucionar problemas.
