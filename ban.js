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



if(command === "ban") {
    if(!message.member.roles.some(r=>["🔨 Administrateur", "📱 Développeur", "💻 Développeur Discord", "🚨 Modérateur"].includes(r.name)) )
      return message.reply("Tu n'as pas les permissions !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mention de l'utilisateur invalide !");
    if(!member.bannable) 
      return message.reply("Impossible de ban ! A t'il un role supérieur ?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Indique une raison du ban !");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }});

  client.login(config.token);
