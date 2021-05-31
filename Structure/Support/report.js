const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete();

  let target =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!target)
    return message.channel
      .send('Please mention a user.')
      .then(m => m.delete({ timeout: 5000 }));
  let reason = args.slice(1).join(' ');
  if (!reason)
    return message.channel
      .send(
        `Please state the reason for why you are reporting **${target.user.tag}**.`
      )
      .then(m => m.delete({timeout: 5000}));

  let rChannel = message.guild.channels.cache.find(c => c.name === 'reports');

  message.channel
    .send('Your report has been sent to the staff. Thank you.')
    .then(m => m.delete({ timeout: 5000 }));
  rChannel
    .send(
      `**${message.author.tag}** has reported **${target.user.tag}** for the reason: ${reason}.`
    )
    .then(async msg => {
      msg.react('✅');
      msg.react('➖');
      msg.react('❌');
    });
};

module.exports.help = {
  name: 'report'
};
