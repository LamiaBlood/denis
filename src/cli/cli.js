const axios = require('axios');
const { Command } = require('commander');

const program = new Command();

program
  .command('get-repo <idOrName>')
  .action(async (idOrName) => {
    const response = await axios.get(`http://localhost:3000/repos/${idOrName}`);
    console.log(response.data);
  });

program
  .command('get-repos')
  .action(async () => {
    const response = await axios.get('http://localhost:3000/repos');
    console.log(response.data);
  });

program
  .command('sync')
  .action(async () => {
    await axios.post('http://localhost:3000/sync');
    console.log('Синхронизация начата');
  });

program.parse(process.argv);