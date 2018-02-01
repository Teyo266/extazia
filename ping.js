// Library
const Discord = require("discord.js");
const client = new Discord.Client(); 
const help = require("./help.js")

// Prefix + Token
const config = require("./config.json");

//Async
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

  
  if(command === "ping") {
    const m = await message.channel.send({embed: {
      color: 0xffffff,
      description: "Demande de connaissance de Ping :"
    }});
    m.edit({embed: {
      color: 0x00ff00,
      description: `**Voici le résultat de l'analyse, mon Ping est de ${Math.round(client.ping)}ms**`
        }}
    )}
  })
    client.login(config.token);