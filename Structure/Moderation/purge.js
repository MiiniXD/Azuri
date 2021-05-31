const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const cross = bot.emojis.cache.find(emoji => emoji.name === 'WC_Cross');

  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel
      .send(`${cross} You do not have permissions to use this command.`)
      .then(msg => msg.delete({ timeout: 4500 }));

  if (!args[0])
    return message.channel
      .send(
        'Please enter a number of messages to purge! `Usage: .purge <amount>`'
      )
      .then(msg => msg.delete({ timeout: 4500 }));

  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`**__Removed ${args[0]} messages.__**`)
      .then(msg => msg.delete({ timeout: 6000 }));
  });
};

module.exports.help = {
  name: 'purge'
};
