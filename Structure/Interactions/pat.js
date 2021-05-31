const Discord = require('discord.js');
const API = require('nekos.life');
const { sfw } = new API();

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    return message.channel.send("You didn't say who you wanted to pat.");
  }

  var people = '';

  for (var i = 0; i < args.length; i++) {
    var user = message.mentions.members.first();
    if (user) {
      user = message.guild.members.cache.get(user.id).displayName;
    } else {
      users = bot.searchForMembers(message.guild, args[i]);
      if (users.length > 1)
        return message.channel.send(
          'Found multiple users for `' +
            args[i] +
            ', Please be more specific or mention the user instead.'
        );
      else if (users.length == 0)
        return message.channel.send(
          "That user doesn't seem to exist. Try again."
        );
      user = users[0].displayName;
    }
    if (i + 1 == args.length && args.length > 1) {
      people += `**and** ${user}!`;
    } else if (args.length < 2) {
      people += `${user}!`;
    } else if (args.length == 2 && i == 0) {
      people += `${user} `;
    } else {
      people += `${user}, `;
    }
  }

  sfw.pat().then(json => {
    let btembed = new Discord.MessageEmbed()
      .setImage(json.url)
      .setColor('#FFFFFF')
      .setDescription(
        `**${
          message.guild.members.cache.get(message.author.id).displayName
        }** has patted you **${people}**`
      )
    message.channel.send(btembed);
  });
};

module.exports.help = {
  name: 'pat'
};
