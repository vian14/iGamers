const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function()  => {
    let status = [`iGamers | Indonesian Gamers Community`, `On ${bot.guilds.size} Server`, `With ${bot.users.size} User`] 
    let random = Math.floor(Math.random * status.length)
    bot.user.setStatus('STREAMING'); 
    bot.user.setGame(status[random]); 
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'iGamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }
});

client.login(process.env.BOT_TOKEN)
