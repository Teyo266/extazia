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

  if(command === "parole") {
        if(!message.member.roles.some(r=>["🔨 Administrateur", "📱 Développeur", "💻 Développeur Discord", "🚨 Modérateur"].includes(r.name)) )
    return message.reply("Tu n'as pas les permissions !");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }});

  client.login(config.token);
