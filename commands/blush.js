const cooldown = new Set();
module.exports.run = async (bot, message, args) => { // Run the command when a command is called
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
  
    var fs = require('fs');
    var Discord = require('discord.js');

        var images = ['https://tenor.com/zHQF.gif', 'https://tenor.com/yiVG.gif', 'https://tenor.com/o36U.gif', 'https://tenor.com/bdmlY.gif', 'https://tenor.com/bdZi0.gif', 'https://tenor.com/tA4D.gif', 'https://cdn.weeb.sh/images/r1n7M87wW.gif', 'https://tenor.com/I0tv.giff', 'https://tenor.com/ba08b.gif', 'https://tenor.com/9DNV.gif']
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];
  
          const blushembed = new Discord.RichEmbed()
            .setColor(0xA901DB)
          .setDescription(`${args[0]} blushes`)
            .setImage(randomImage);
        const sadEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
        .setDescription(`${message.author.tag} blushes`)
            .setImage(randomImage);
        if (!args[0]) {
            message.channel.send(sadEmb)
            return;
        }

        if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
            msg.delete(3000)
        });
        message.channel.send(blushembed)
    } catch(err) {
      const errorlogs = bot.channels.get('666547517772660736')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on stats commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'blush',
    category: 'fun',
    usage: 'blush',
    description: 'blush',
}
