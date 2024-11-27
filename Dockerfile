# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
