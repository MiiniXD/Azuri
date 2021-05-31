const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {

 const helpembed = new Discord.MessageEmbed()
  .setAuthor("| 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
  .setDescription(
    `**\`🎲\` Coming Soon.** → \`.help Coming Soon.\`
     **\`👤\` Coming Soon.** → \`.help Coming Soon.\`
     **\`🎯\` Coming Soon.** → \`.help Coming Soon.\`
     **\`🎵\` Coming Soon.** → \`.help Coming Soon.\`
     **\`🔍\` Coming Soon.** → \`.help Coming Soon.\`
     **\`💡\` Coming Soon.** → \`.help Coming Soon.\`
     **\`😂\` Interact** → \`.help Interact\`
 `)
  .setColor("2f3136")
  .setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

 if (!args[0]) return message.channel.send(helpembed);




  switch (args[0]) {
    case "mod":

   const modembed = new Discord.MessageEmbed()
.setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
.setDescription(
`> **\`🎯\` Moderator**
**→ \`.addmoney\`** - Dodaje novac tagovanom članu direktno u banku.
**→ \`.ban\`** - Banuje tagovanog člana sa servera.
**→ \`.close\`** - Zatvaranje tiketa.
**→ \`.eval\`** - Izvršavanje priloženog koda.
**→ \`.inf\`** - Prikazivanje kazni tagovanog člana.
**→ \`.infdel\`** - Brisanje kazne tagovanom članu.
**→ \`.kick\`** - Izbacivanje tagovanog člana sa servera.
**→ \`.lock\`** - Zaključavanje kanala u kom se izvrši komanda.
**→ \`.multi\`** - Postavljanje multipliera za određenu kategoriju.
**→ \`.mute\`** - Ućutkavanje tagovanog člana na serveru.
**→ \`.removemoney\`** - Skida novac tagovanom članu iz banke ili džepa.
**→ \`.say\`** - Komanda za forceovanje bota da pošalje zadatu poruku.
**→ \`.unlock\`** - Otključavanje kanala u kom se izvrši komanda.
**→ \`.warn\`** - Dodavanje upozorenja tagovanom članu na serveru.`)
.setColor("2f3136")
.setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

 return message.channel.send(modembed);
 break;





    case "gambling":

       const gamblingembed = new Discord.MessageEmbed()
  .setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
  .setDescription(
   `> **\`🎲\` Gambling**
**→ \`.balance\`** - Prikazuje novac u džepu i na bankovnom računu.
**→ \`.betroll\`** - Bacanje kocke, ukoliko broj bude veći od 66 - uložen novac se povećava dva puta, ukoliko broj bude veći od 90 - uložen novac se povećava 4 puta, a ukoliko broj bude 100 - uložen novac se povećava deset puta.
**→ \`.boja\`** - Izbor boje kupljene u shopu.
**→ \`.boosters\`** - Prikaz aktivnih boostera.
**→ \`.crime\`** - Bavite se kriminalom, šanse za dobitak su 50/50, možete dobiti do 150$, a izgubiti maksimalno petinu svog novca.
**→ \`.daily\`** - Preuzimanje dnevnog bonusa. Svaki rank ima drugačiji dnevni bonus.
**→ \`.deposit\`** - Stavljanje novca u banku.
**→ \`.hobby\`** - Bavljenje hobijem, donosi do 75$.
**→ \`.kviz\`** - Pokreće kviz u kanalu za kviz.
**→ \`.pay\`** - Plaćanje određene sume novca tagovanom članu.
**→ \`.rep\`** - Davanje reputacionog poena članu.
**→ \`.rob\`** - Pljačkanje članova na serveru, šanse za dobitak 40%, maksimalan dobitak je njihov novac u džepu, maksimalan gubitak sav novac.
**→ \`.shop\`** - Kupovina rankova, boja i boostera novcem.
**→ \`.slot\`** - Igranje slotova i klađenje uloženim novcem.
**→ \`.withdraw\`** - Uzimanje novca iz banke.
**→ \`.work\`** - Bavljenje poslovima. Svaki rank ima drugačiji posao.`)
  .setColor("2f3136")
  .setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

    return message.channel.send(gamblingembed);
    break;


    case "server":

      const serverembed = new Discord.MessageEmbed()
 .setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
 .setDescription(
  `> **\`💡\` Server**
**→ \`.afk\`** - Postavlja away from keyboard status.
**→ \`.avatar\`** - Prikazuje avatar tagovanog člana.
**→ \`.help\`** - Lista komandi i njihovo značenje.
**→ \`.membercount\`** - Prikaz statistike servera vezanih za članove.
**→ \`.members\`** - Prikaz online članova prema ukupnom broju.
**→ \`.omeni\`** - Promena dela "O MENI" na profilu na sajtu.
**→ \`.ping\`** - Pong!
**→ \`.profile\`** - Prikazuje stats člana na serveru.
**→ \`.dprofile\`** - Dark verzija.
**→ \`.eprofile\`** - Embedovana verzija.
**→ \`.serverinfo\`** - Prikaz informacija o serveru.
**→ \`.uptime\`** - Prikaz koliko je bot dugo online.
**→ \`.userinfo\`** - Prikaz informacija o članu.`)
 .setColor("2f3136")
 .setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

   return message.channel.send(serverembed);
   break;


   case "memes":

     const memesembed = new Discord.MessageEmbed()
.setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
.setDescription(
 `> **\`👤\` Memes**
**→ \`.abandon\`** **\`.armor\`**
**→ \`.balloon\`** **\`.bann\`** **\`.beautiful\`** **\`.bed\`** **\`.bobross\`** **\`.boo\`** **\`.brain\`** **\`.brazzers\`** **\`.byemom\`**
**→ \`.changemymind\`** **\`.clyde\`** **\`.cry\`**
**→ \`.dab\`** **\`.dank\`** **\`.deepfiry\`** **\`.delete\`** **\`.disability\`** **\`.door\`**
**→ \`.egg\`**
**→ \`.facts\`** **\`.failure\`** **\`.fakenews\`** **\`.fedora\`** **\`.fire\`** **\`.floor\`**
**→ \`.gay\`**
**→ \`.hitler\`** \`.humansgood\`**
**→ \`.invert\`** **\`.iphonex\`**
**→ \`.jail\`**
**→ \`.knowyourlocation\`**
**→ \`.laid\`** **\`.lmgtfy\`**
**→ \`.madethis\`** **\`.magik\`** **\`.meme\`**
**→ \`.note\`**
**→ \`.ohno\`**
**→ \`.plan\`**
**→ \`.quote\`**
**→ \`.rip\`** **\`.roblox\`**
**→ \`.salty\`** **\`.satan\`** **\`.savehumanity\`** **\`.screams\`** **\`.ship\`** **\`.shit\`** **\`.slap\`** **\`.spank\`**
**→ \`.tbc\`** **\`.thesearch\`** **\`.thuglife\`** **\`.trash\`** **\`.triggered\`** **\`.tweet\`**
**→ \`.ugly\`**
**→ \`.wanted\`**`)
.setColor("2f3136")
.setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

  return message.channel.send(memesembed);
  break;


  case "search":

    const searchembed = new Discord.MessageEmbed()
.setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
.setDescription(
`> **\`🔍\` Search**
**→ \`.anime\`** - Pretraga zadate anime serije/filma.
**→ \`.docs\`** - Pretraga discord.js dokumentacije.
**→ \`.github\`** - Pretraga GitHub projekta.
**→ \`.humblebundle\`** - Pretraga trenutnih bundleova na Humble Bundle.
**→ \`.lyrics\`** - Pretraga teksta pesme na Genius.
**→ \`.npm\`** - Pretraga NPM paketa.
**→ \`.stackoverflow\`** - Pretraga projekata/issua na Stack Overflow.
**→ \`.steam\`** - Pretraga igrice na Steamu.
**→ \`.urban\`** - Pretraga pojma na Urban Dictionary.
**→ \`.youtube\`** - Pretraga klipa na YouTubeu.
**→ \`.balancetop10\`** - Prikazuje top 10 najbogatijih članova servera.
**→ \`.kviztop10\`** - Prikazuje top 10 članova servera sa najviše poena na kvizu.
**→ \`.ranktop10\`** - Prikazuje top 10 najaktivnijih članova servera.`)
.setColor("2f3136")
.setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

 return message.channel.send(searchembed);
 break;


 case "muzika":

   const musicembed = new Discord.MessageEmbed()
.setAuthor("Crash | 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
.setDescription(
`> **\`🎵\` Muzika**
**→ \`.nowplaying\`** - Pretraga discord.js dokumentacije.
**→ \`.pause\`** - Pauziranje muzike.
**→ \`.play\`** - Osnovna komanda za puštanje muzike.
**→ \`.queue\`** - Lista pesama u redu za puštanje.
**→ \`.queueremove\`** - Brisanje pesme iz lista u redu za puštanje.
**→ \`.repeat\`** - Ponavljanje pesme/celog reda pesama.
**→ \`.resume\`** - Nastavljanje muzike.
**→ \`.skip\`** - Preskakanje trenutne pesme.
**→ \`.stop\`** - Stopiranje muzike.
**→ \`.volume\`** - Konfiguracija trenutne glasnoće muzike.`)
.setColor("2f3136")
.setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

return message.channel.send(musicembed);
break;


case "interact":

  const interactembed = new Discord.MessageEmbed()
.setAuthor("| 🌀 Help", "https://gyazo.com/975fe47e3b9d4ef4c3679ef8667b40f6")
.setDescription(
`> **\`😂\` Interactions**
**→ \`.8ball\`** - ask it anything.
**→ \`.bite\`** - Bite a user.
**→ \`.cuddle\`** - Cuddle a user.
**→ \`.feed\`** - Feed a user.
**→ \`.hug\`** - Hug a user.
**→ \`.kiss\`** - Kiss a user.
**→ \`.pat\`** - Pat a user.
**→ \`.poke\`** - Poke a user.
**→ \`.slap\`** - Slap a user.
**→ \`.smug\`** - Smug a user.
**→ \`.tickle\`** - Tickle a user.
**→ \`.snow\`** - Snowifies you.
**→ \`.pixelate\`** - Pixelates you.
**→ \`.achievement\`** - Why did i add this... `)
.setColor("2f3136")
.setFooter(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 32 }));

return message.channel.send(interactembed);
break;
  }


};
exports.conf = {
 aliases: []
};
exports.help = {
 name: "help"
};
