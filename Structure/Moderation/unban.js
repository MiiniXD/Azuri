const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const bannedMember = args[0];

  if (!message.member.hasPermission(['BAN_MEMBERS']))
    return message.channel.send(
      'You dont have permission to perform this command.'
    );

  if (isNaN(args[0])) return message.channel.send('You need to provide an ID.');
  let unbanMember = await bot.users.fetch(args[0]);
  if (!bannedMember)
    return message.channel.send('Please provide a user id to unban someone!');

  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'No reason given!';

  if (!message.guild.me.hasPermission(['BAN_MEMBERS']))
    return (
      message.channel.send('I dont have permission to perform this command!') |
      message.delete()
    );

  try {
    message.guild.members.unban(bannedMember, reason);
    message.channel.send(
      `${unbanMember.tag} has been unbanned.`
    );
  } catch (e) {
    console.log(e.message);
  }

  let ubembed = new Discord.MessageEmbed()
    .setColor('#FFFFF')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL("png", true))
    .addField('Moderator:', message.author.username)
    .addField('Action:', 'Unban')
    .addField('Pardoned:', `${bannedMember.user.tag} (${bannedMember.id})`)
    .addField('Reason:', reason)
    .addField('Date:', message.createdAt.toLocaleString());

  const sChannel = message.guild.channels.cache.find(
    channel => channel.name === 'modlogs'
  );
  sChannel.send(ubembed);
};

module.exports.help = {
  name: 'unban'
};
