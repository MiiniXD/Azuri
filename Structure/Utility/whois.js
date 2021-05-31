const Discord  = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports.run = async (client, message, args, con) => {

  let getMember =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);


        const member = getMember(message, args.join(" "));

        //member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join(", ") || "none";

        //user variables
        const created = formatDate(member.user.createdAt);

        const embed = new Discord.MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
            .addField('**Member information**', stripIndents`**> Display name** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)
            .addField('**User Information**', stripIndents`**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Discord Tag:** ${member.user.tag}
            **> Created at:** ${created}`, true)
            .setTimestamp()


        if (member.user.presence.game)
            embed.addField('Currently playing', `**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);

}

module.exports.help = {
  name: "whois"
}
