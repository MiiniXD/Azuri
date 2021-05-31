const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let donateEmb = new Discord.MessageEmbed()

    .setColor('#FFFFF')
    .setTitle('Ashima')
    .addField(
      'What is a Simp?',
      "Ask @little nightmare#2699 she's the best at it")
    .setFooter(
      message.author.tag,
      message.author.displayAvatarURL({ format: 'png', size: 32 })
    );
  message.channel.send(donateEmb);
  message.delete();
};

module.exports.help = {
  name: 'simp'
};
