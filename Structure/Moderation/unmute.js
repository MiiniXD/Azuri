const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('723945654510026754'); // This is for my server, you can change this by making a muted role and putting the ID here.
        let verifiedRole = message.guild.roles.cache.get('723245690024624240'); // Default role id for someone who just joined the server
        if(mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);
            message.channel.send("User was forcefully unmuted.");
        }
}

module.exports.help = {
    name: "unmute"
}
