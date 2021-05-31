const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.channel.send('Sorry, this command is currently unavailable')

}

module.exports.help = {
    name: "warn"
}
