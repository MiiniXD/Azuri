const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let answers = [
    "Yes",
    "Probably.",
    "Probably not",
    "You can count on it.",
    "I Don't have a clue...",
    "Maybe...",
    "Don't Count on it",
    "No"
  ];

  let result = Math.floor(Math.random() * answers.length);
  let question = args.slice(0).join(" ");
  let ballembed = new Discord.MessageEmbed()
  .setColor("2f3136")
    .setAuthor("| 🎱 8ball")
    .setDescription(`\`❓\` Question - **${question}**\n\`✅\` **${
        answers[result]
      }**`
    )
    .setFooter(
      message.author.tag,
      message.author.displayAvatarURL({ format: "png", size: 32 })
    );
  message.channel.send(ballembed);
};

module.exports.help = {
  name: "8ball"
};
