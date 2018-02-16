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

  if(command === "kick") {

    if(!message.member.roles.some(r=>["🔨 Administrateur", "📱 Développeur", "💻 Développeur Discord", "🚨 Modérateur", "📋 Assistant"].includes(r.name)) )
      return message.reply("Tu n'as pas les permissions !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mention de l'utilisateur invalide !");
    if(!member.kickable) 
      return message.reply("Impossible de Kick, ais-je les permissions ? Son grade est peut-être supérieur.");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Indique une raison du Kick !");

    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author} Impossible de Kick car : ${error}`));
    message.reply(`${member.user.tag} a bien été kick par ${message.author.tag} car: ${reason}`);

  }}):):op)

  client.login(config.token);
