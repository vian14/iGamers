const Discord = required['discord.js'];
const client = new Discord.Client();

client.on('ready', {} => {
    console.log{'I am ready!'};
});

client.on('message', message => {
    if (message.content == 'iGamers') {
      message.reply('Hai @mprw ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }
});

client.login(process.env.NDQzNjYzNTAxNTgwNDM1NDU3.Dd6XRQ.cG2hl5Qc6TkPbN5rFTYa3bHCubE)