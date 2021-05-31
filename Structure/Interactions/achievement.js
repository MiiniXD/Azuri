const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let text = args.join(" ")
    message.channel.send({files: [{attachment:  `https://api.alexflipnote.dev/achievement?text=${text}`,name: 'file.jpg'}]})
}


module.exports.help = {
    name: "achievement"
}
