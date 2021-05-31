const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let joineduser =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.cache.get(args[0]);

  //If no specified @ user mention
  if (!joineduser) joineduser = message.guild.member(message.member);

  let joinedat = joineduser.joinedAt;

  message.channel.send(`${joineduser} joined the server on: ${joinedat}`);
};

module.exports.help = {
  name: 'joined'
};
