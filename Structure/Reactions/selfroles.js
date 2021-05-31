const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  prefix = '.';
  line = '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬';

  const embed = new Discord.MessageEmbed()
    .setTitle('🎨 | Self Roles')
    .setColor('#FFFFF')
    .setDescription(line)
    .addField('Gender', '♂️|<@&723290356044529725> \n ♀️|<@&723288774389399632>', true)
    .addField('Age', '👦|<@&723518215002521652> \n 🧑|<@&723518266181681203> \n 👨|<@&723518142609096745>', true)
    .addField('Location', '🌎|<@&723565671555792957> \n 🌏|<@&723565598235164712> \n 🌍|<@&723565540945428511>', true)
    .addField('Pings', '❓|<@&723539599141372004> \n 📢|<@&723540961573077013>', true)
    .addField('** **', line)

  let embedMsg = await message.channel.send(embed);
  await embedMsg.react('♂️'); // Male
  await embedMsg.react('♀️'); // Female
  await embedMsg.react('👦'); // 13 - 15
  await embedMsg.react('🧑'); // 16 - 17
  await embedMsg.react('👨'); // 18+
  await embedMsg.react('🌎'); // Europe / Africa
  await embedMsg.react('🌏'); // Asia / Oceania
  await embedMsg.react('🌍'); // North America / South America
  await embedMsg.react('❓'); // QOTD Ping
  await embedMsg.react('📢'); // Announcement Ping

};

module.exports.help = {
  name: 'selfroles'
};
