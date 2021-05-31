const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  prefix = '.';
  line = '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬';

  const embed = new Discord.MessageEmbed()
    .setTitle('🛒 Shop')
    .setColor('#FFFFF')
    .setDescription(line)
    .addField('⚪ White color ($1,000)', "Buy this to have a White color.", true)
    .addField('⚫ Black color ($1,000)', "Buy this to have a Black color.", true)
    .addField('🔴 Red color ($1,000)', "Buy this to have a Red color.", true)
    .addField('🟠 Orange color ($1,000)', "Buy this to have a Orange color.", true)
    .addField('🟡 Yellow color ($1,000)', "Buy this to have a Yellow color.", true)
    .addField('🟣 Purple color ($1,000)', "Buy this to have a Purple color.", true)
    .addField('🔵 Blue color ($1,000)', "Buy this to have a Blue color.", true)
    .addField('🟢 Green color ($1,000)', "Buy this to have a Green color.", true)
    .addField('🟤 Brown color ($1,000)', "Buy this to have a Brown color.", true)
    .addField('** **', line)
    .addField('.EQUIP (Free)', "Use .equip (color) to use a color.", true)
    .setFooter(`Responding to ${message.author.tag}`)
    .setTimestamp();

  let embedMsg = await message.channel.send(embed);
  await embedMsg.react('⚪'); // White
  await embedMsg.react('⚫'); // Black
  await embedMsg.react('🔴'); // Red
  await embedMsg.react('🟠'); // Orange
  await embedMsg.react('🟡'); // Yellow
  await embedMsg.react('🟣'); // Purple
  await embedMsg.react('🔵'); // Blue
  await embedMsg.react('🟢'); // Green
  await embedMsg.react('🟤'); // Brown

};

module.exports.help = {
  name: 'shop'
};
