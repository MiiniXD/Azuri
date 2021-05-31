const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


  let bicon = message.bot.iconURL();
  let sicon = message.guild.iconURL();
  let serverembed = new MessageEmbed()
    .setAuthor(
      '| 🔥 Server Info',
      (sicon)
    )
    .setFooter(
      `${message.author.tag}`,
      message.author.displayAvatarURL({ format: 'png', size: 32 })
    )
    .setColor('2f3136')
    .setThumbnail(sicon).setDescription(`
**\`📛\` Server Name** - ${message.guild.name}
**\`👤\` ID** - ${message.guild.id}
**\`📅\` Server Created** - ${message.guild.createdAt}
**\`👑\` Owner** - ${message.guild.owner}, ${message.guild.ownerID}
**\`🌍\` Region** - ${message.guild.region}
**\`🔥\` Amount of Members** - ${message.guild.memberCount}`);
  message.channel.send(serverembed);
};

module.exports.help = {
  name: 'serverinfo'
};
