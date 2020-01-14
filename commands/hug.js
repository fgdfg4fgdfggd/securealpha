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

        var images = ["https://tenor.com/sQkA.gif", "https://tenor.com/N4Sj.gif", "https://tenor.com/vfFB.gif", "https://tenor.com/NhtE.gif", "https://tenor.com/wENs.gif", "https://tenor.com/IucD.gif"];
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];

        const patEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage(randomImage);
        const sadEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
        if (!args[0]) {
            message.channel.send(`<@${message.author.id}> hugged <@${message.author.id}>.. Oh wait! You can't hug yourself!`, {
                embed: sadEmb
            });
            return;
        }

        if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
            msg.delete(3000)
        });
        message.channel.send(`<@${message.author.id}> hugged ${args[0]}`, {
            embed: patEmb
        });
    } catch(err) {
      const errorlogs = bot.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on hug commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'hug',
    category: 'fun',
    usage: '[mention]',
    description: 'Hugggg',
}
