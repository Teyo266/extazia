// Library
const Discord = require("discord.js");
const client = new Discord.Client(); 

// Prefix + Token
const config = require("./config.json");


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


    if(command === "aide") {
      console.log(`Commande "Help" demandée par ${message.author.tag}`);
        const m = await message.channel.send({embed: {
          color: 0x000080,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "Centre d'aide d'Extazia du Discord",
          url: "",
          description: "__**Le centre d'aide est en développement**__",
          fields: [{
              name: "ptdr t ki",
              value: "Je suis en developpement par Teyo's"
            },
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "Créateur : Teyo's#0525"
          }
        }
      })}
    });

  client.login(config.token);