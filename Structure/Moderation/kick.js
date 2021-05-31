const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(['KICK_MEMBERS']))
    return message.channel.send(
      'You do not have permissions to use this command.'
    );

  let kickUser =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!kickUser) return message.channel.send('Provide a user to kick.');

  if (kickUser === message.author)
    return message.channel.send("You can't kick yourself dummy.");

  if (kickUser.id === '717717356553437218')
    return message.channel.send("Can't kick him... he's scary...");

  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'No reason given.';

  if (!message.guild.me.hasPermission(['KICK_MEMBERS']))
    return message.channel.send(
      'I dont have permission to perform this command'
    );

    let kembed = new Discord.MessageEmbed()
      .setColor('#FFFFF')
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(message.guild.iconURL("png", true))
      .addField('Moderator:', message.author.username)
      .addField('Action:', 'Kick')
      .addField('Kicked:', `${kickUser.user.tag} (${kickUser.id})`)
      .addField('Reason:', reason)
      .addField('Date:', message.createdAt.toLocaleString());

    let ukickembed = new Discord.MessageEmbed()
      .setDescription(
        `WARNING - You have just been kicked from the server **${message.guild.name}** with as reason: **${reason}**`
      )
      .setColor("800000");

    kickUser.createDM().then((channel) => {
      channel.send(ukickembed);
    });

    let kickChannel = message.guild.channels.cache.find(
      c => c.name === '🍜-staff-logs-🍜'
    );
    if (!kickChannel) {
      return message.channel.send(
        "Log channel not found. Please create it."
      );
    }
    message.guild.member(kickUser).kick(reason);
    kickChannel.send(kembed);
  };

  module.exports.help = {
    name: "kick"
  };
