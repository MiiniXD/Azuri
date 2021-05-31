const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle('If you agree to the following rules:')
    .setDescription('React to obtain your roles.')
    .setColor('#800080')
    let msgEmbed = await message.channel.send(embed)
    msgEmbed.react('✅')

}

module.exports.help = {
    name: "verify"
}
