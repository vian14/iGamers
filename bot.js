const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => { 
    client.user.setStatus('STREAMING'); 
    setInterval(() => {
    let status = [`iGamers | Indonesian Game`, `On ${client.guilds.size} Server`, `With ${client.users.size} User`] 
    let random = Math.floor(Math.random() * status.length)
    client.user.setGame(status[random], 'https://www.twitch.tv/igamersina'); 
   }, 20000);
    console.log(`${client.user.username} Sedang ONLINE!`); 
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});


client.on('message', message => {
    if (message.content.toLowerCase() === 'igamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }

    if (message.content.toLowerCase().includes("")){
	if(!message.channel.id === "412247476859568138") {return;}
	const welcemb = new Discord.RichEmbed()
		.setTitle("Welcome to iGamers")
		.setURL("https://discord.gg/dR422Nu")
		.setAuthor("iGamers", "https://i.imgur.com/1UbbnaG.jpg")
		.setDescription("iGamers merupakan server Komunitas Game meliputi game PC, Android, IOS, PS, XBOX, Web Game, dan lain sebagainya.  Server ini akan memfasilitasi notifikasi update, game baru, glitch, bug, giveaway. Jadi Stay Tune ya!!\nJangan lupa share link invite kami! \n https://discord.gg/dR422Nu")
		.addField("Step 1", "Setelah kamu bergabung kamu harus membaca RULES server kami dan akan mendapatkan role Member iGamers untuk melihat seluruh server! Dapat diklik di link berikut: https://discord.gg/dR422Nu.")
		.addField("Step 2", "Kemudian Kamu bisa mengambil role game lainnya untuk melihat channel game lainnya: https://discord.gg/f7KTMmd")
		.setFooter("This bot created by mprw#2329", "https://i.imgur.com/1UbbnaG.jpg")
		.setImage("https://i.imgur.com/OgupJFq.gif")
		.setThumbnail("https://i.imgur.com/1UbbnaG.jpg")
		.setColor(0x3DB4FF)
		/*
		 * Takes a Date object, defaults to current date.
		 */
		.setTimestamp()
	message.author.send({embed: welcemb});
    }
});

client.login(process.env.BOT_TOKEN)
