const fs = require('fs');
const path = require('path');

// Caminho para a pasta de ambientes
const envDirectory = path.join(__dirname, '../src/environments');

// Verifica se o diretório existe, se não, cria
if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory, { recursive: true });
}

// Conteúdo do arquivo de ambiente usando variáveis do Node.js (Vercel)
const envConfigFile = `
export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  apiUrl: '${process.env.API_URL || 'http://localhost:3000/api'}',
  apiKey: '${process.env.API_KEY || ''}'
};
`;

const targetPath = path.join(envDirectory, 'environment.ts');

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('Erro ao gerar o environment.ts:', err);
  } else {
    console.log(`Ambiente Angular gerado em: ${targetPath}`);
  }
});