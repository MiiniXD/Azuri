const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let donateEmb = new Discord.MessageEmbed()

    .setColor('#00ff00')

    .setTitle('Donate')

    .setDescription('Donate for the bot through these links!')

    .addField('PayPal Donate', '[PayPal](https://paypal.me/#####)')

    .addField('Patreon Donate', '[Patreon](https://www.patreon.com/#####)')

    .setFooter('Donation links for the bot!')

    .setThumbnail(bicon);

  message.channel.send(donateEmb);

  message.delete();
};

module.exports.help = {
  name: 'donate'
};
