//sobrescreve o conteúdo do arquivo

// const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

//_______________________________________________________________________

//com async/await

  const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão', { flag: 'wx' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

//-----------------------------------------------------------------

// const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2. byteLength +file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
  