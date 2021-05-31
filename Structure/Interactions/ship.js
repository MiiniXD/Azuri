const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user1 = message.mentions.users.first().avatarURL({format: 'png', dynamic: true, size: 2048})
    let user2 = message.mentions.users.last([1]).avatarURL({format: 'png', dynamic: true, size: 2048})
    message.channel.send({files: [{attachment:  `https://api.alexflipnote.dev/ship?user=${user1}&user2=${user2}`,name: 'file.jpg'}]})

}

module.exports.help = {
    name: "ship"
}
