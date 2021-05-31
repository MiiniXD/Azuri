const Discord = require('discord.js');
const API = require('nekos.life');
const { sfw } = new API();

module.exports.run = async (bot, message, args) => {

  sfw.avatar().then(json => {
    let btembed = new Discord.MessageEmbed()
      .setImage(json.url)
      .setColor('#FFFFFF')
    message.channel.send(btembed);
  });
};

module.exports.help = {
  name: 'avatar'
};
