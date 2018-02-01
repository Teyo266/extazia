// Library
const Discord = require("discord.js");
const client = new Discord.Client(); 

// Prefix + Token
const config = require("./config.json");

//Async
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Bienvenue ! ${member}`);
})});


client.login(config.token);