const Discord = require('discord.js');
const client = new Discord.Client();


bot.on("ready", () => { 
 bot.user.setStatus('STREAMING'); 
 setInterval(() => {
    let status = [`Bantuan? | >help`, `InFamous Club`, `ForceStop Channel`, `On ${bot.guilds.size} Server`, `With ${bot.users.size} User`] 
    let random = Math.floor(Math.random() * status.length)
    bot.user.setActivity(status[random], 'https://twitch.tv/forcestopgm'); 
   }, 20000);
    console.log(`${bot.user.username} Sedang ONLINE!`); 
});

client.on('message', message => {
    if (message.content === 'iGamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }
});

client.login(process.env.BOT_TOKEN)
