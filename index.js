const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

bot.commands = new Discord.Collection();


// =============================================================
//                        READS JS FILES
// =============================================================

fs.readdir('./structure/Dating', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Dating/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir('./structure/Economy', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Economy/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir('./structure/Interactions', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Interactions/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});


fs.readdir('./structure/Moderation', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Moderation/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});


fs.readdir('./structure/Reactions', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Reactions/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});


fs.readdir('./structure/Support', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Support/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});


fs.readdir('./structure/Utility', (err, files) => {
  if (err) throw err;

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    return console.error('[ERROR] Cannot find command files!');
  }

  jsfile.forEach((f, i) => {
    let props = require(`./structure/Utility/${f}`);
    console.log(`[STARTUP] ${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});

// =============================================================
//                     REACTION ROLE ADD
// =============================================================

bot.on('messageReactionAdd', async (reaction, user) => {

  const channel = ("723255701463498762")

  if (reaction.message.partial) await reaction.message.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '✅') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723245690024624240');
    }
  }

  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '♂️') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723290356044529725');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '♀️') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723288774389399632');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '👦') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723518215002521652');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🧑') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723518266181681203');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '👨') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723518142609096745');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌏') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723565671555792957');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌎') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723565598235164712');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌍') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723565540945428511');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '❓') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723539599141372004');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '📢') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('723540961573077013');
    }
  }
});


// =============================================================
//                    REACTION ROLE REMOVE
// =============================================================

bot.on('messageReactionRemove', async (reaction, user) => {

  const channel = ('723255701463498762')

  if (reaction.message.partial) await reaction.message.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '✅') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723245690024624240');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '♂️') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723290356044529725');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '♀️') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723288774389399632');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '👦') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723518215002521652');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🧑') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723518266181681203');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '👨') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723518142609096745');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌎') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723565598235164712');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌏') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723565671555792957');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '🌍') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723565540945428511');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '❓') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723539599141372004');
    }
  }
  if (reaction.message.channel.id === channel) {
    if (reaction.emoji.name === '📢') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('723540961573077013');
    }
  }
});


// =============================================================
//                        COMMAND HANDLER
// =============================================================


bot.on('message', msg => {
  bot.emit('checkMessage', msg);
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let messageArray = msg.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = bot.commands.get(cmd.slice(config.prefix.length));
  if (commandFile) {
    msg.delete();
    commandFile.run(bot, msg, args);
  }
});


// =============================================================
//                           STATUSES
// =============================================================


bot.on('ready', () => {
  console.log(bot.user.username + ' has successfully loaded in.');
});


let activities = ["The Stars", "Myself learn", "The Cafe"];

bot.on('ready', () => {
  setInterval(function() {
    let activity = activities[Math.floor(Math.random() * activities.length)];

    bot.user.setPresence({
      activity: { name: activity, type: 'WATCHING' }
    });
  }, 45000);
});

// =============================================================
//                   WELCOME / GOODBYE STUFF
// =============================================================


bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'chat');
  if (!channel) return;
  channel.send(`${member} 滞在を楽しんで!, Do .newcomer for server information! | Enjoy your stay.`);
});

//------------------------//

bot.login(config.bot_token);