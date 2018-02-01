// Library
const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const YoutubeDL = require('youtube-dl');
const client = new Discord.Client(); 
const help = require("./help.js")
const ping = require("./ping.js")
const say = require ("./say.js")
const kick = require ("./kick.js")
const purge = require ("./purge.js")
const ban = require("./ban.js")
const demarrage = require("./ready.js")
const music = require ("./music.js")

// Prefix + Token
const config = require("./config.json");

// Démarrage du Bot
client.on("ready", () => {
  console.log(`Bot démarré : 
  ${client.users.size} utilisateurs.`); 


//Joue à ...
  client.user.setActivity(`être Dev par Teyo's`);
});




client.login(config.token);