module.exports.run = async (bot, message, args) => {
  try {

    var discord = require('discord.js');
    var currencyFormatter = require('currency-formatter')
    var db = require('quick.db')
    var ms = require('parse-ms');
  
    
    let cooldown = 8.64e+7;
    let amount = Math.floor((Math.random() * 300) + 100);
  let dailylog = bot.channels.get('666621169734123522')
  
    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`Currency_${message.member.id}`).then(rm => {
    if(rm == null || 0){
        message.channel.send(`Cannot find this name on database! please register it by executing **.bank**`)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Daily Cooldown!`, message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.tag}**. Daily reset in **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**!`)
        message.channel.send(lastDailyEmbed)
      dailylog.send(`**${message.author.tag}** Tried to claim daily but it's still on cooldown! time left: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`Currency_${message.member.id}`, amount).then(i => {
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} || Success!`, message.author.displayAvatarURL)
            .setColor(`RANDOM`)
            .addField(`Daily claimed :`, `${currencyFormatter.format(amount, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
          dailylog.send(`**${message.author.tag}** Claimed Daily Payment! Amount: ${currencyFormatter.format(amount, { code: 'SEK' })}`)
        })}
    })} catch(err) {console.log(err)}
    } catch(err) {
      const errorlogs = bot.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on daily commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dailies', 'dls'],
  permLevel: "Users"
};

exports.help = {
  name: 'daily',
  category: 'Fun',
  description: 'Claim your daily money!',
  usage: 'acc'
};
