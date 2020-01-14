const Discord = require('discord.js');
var Jimp = require("jimp");
const cooldown = new Set();

exports.run = async (bot, message, args) => {
  try {
          if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 10 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
    

    if (message.channel.type === "dm") return;
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.reply(':x: **Please, specify a thing that trump will make illegal**');
    }
    if (meow.length > 1) {
        return message.reply(':x: **Max 1 word**');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump has now made " + meow + " illegal!", "https://img.pngio.com/donald-trump-png-images-free-download-png-trump-1500_1125.png");
    emb.setImage(illegal);
    message.channel.send({
        embed: emb
    })
    } catch(err) {
      const errorlogs = bot.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on illegal commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Users'
}

exports.help = {
  name: 'illegal',
  category: 'FUN',
  description: 'Make something illegal using the bot',
  usage: 'illegal <text>',
}
