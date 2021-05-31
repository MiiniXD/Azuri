const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.cache.has('715213480374042754')) {
    return;
  }

  const embed = new Discord.MessageEmbed()
    .setColor('FFFFF')
    .setAuthor('| 🔒 Unlocked', "https://gyazo.com/387fbcd11d1bd224994b9f7485bfba27")
    .setDescription(`**\`✅\`** This Channel has been successfully Unlocked.`)
    .setFooter(
      message.author.tag,
      message.author.displayAvatarURL({ format: 'png', size: 64 })
    );
  message.channel.send(embed);
  message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: null });
};

module.exports.help = {
  name: 'unlock'
};
