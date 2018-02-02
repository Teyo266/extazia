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

  if(command === "porge") {
    if(!message.member.roles.some(r=>["🔨 Administrateur", "📱 Développeur", "💻 Développeur Discord", "🚨 Modérateur"].includes(r.name)) )
    return message.reply("Tu n'as pas les permissions !");
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});


  client.login(config.token);
