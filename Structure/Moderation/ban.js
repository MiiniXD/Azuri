const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(['BAN_MEMBERS']))
    return message.channel.send(
      'You do not have permissions to use this command.'
    );

  let bannedMember =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!bannedMember) return message.channel.send('Provide a user to ban.');

  if (bannedMember === message.author)
    return message.channel.send("You can't ban yourself dummy.");

  if (bannedMember.id === '717717356553437218')
    return message.channel.send("Can't ban him... he's scary...");

  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'No reason given!';

  if (!message.guild.me.hasPermission(['BAN_MEMBERS']))
    return message.channel.send(
      'I dont have permission to perform this command'
    );

  let ubembed = new Discord.MessageEmbed()
    .setColor('#FFFFF')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL('png', true))
    .addField('Moderator:', message.author.username)
    .addField('Action:', 'Ban')
    .addField('Banned:', `${bannedMember.user.tag} (${bannedMember.id})`)
    .addField('Reason:', reason)
    .addField('Date:', message.createdAt.toLocaleString());

  let banChannel = message.guild.channels.cache.find(
    c => c.name === 'modlogs'
  );

  if (!banChannel) {
    return message.channel.send('Log channel not found. Please create it.');
  }
  message.guild.member(bannedMember).ban(reason);
  banChannel.send(ubembed);
};

module.exports.help = {
  name: 'ban'
};
