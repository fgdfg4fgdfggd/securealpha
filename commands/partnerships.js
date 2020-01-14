const Discord = require('discord.js')

exports.run = (client, message) => {
  try {
  let partneremb = new Discord.RichEmbed()
  .setAuthor(`RyanBot Partnership`, client.user.displayAvatarURL)
  .setDescription(`If you want become partnerships dm Dis_chat#1378 or join [support server](https://discord.gg/GPMH6YD)`)
  .addField(`__Servers Partnerships__`, `[**RCD**](https://discord.gg/DyYGdAg)\n[**Phantom Support**](https://discord.gg/GPMH6YD)`,true)
  .addField(`__Bot partnerships__`, `[**RCDForum**](https://rcdforum.com/)\n[**RCD**](https://www.roblox.com/groups/3326755/ROBLOX-Community-Developers#!/about)`, true)
  .setFooter('Updated Daily')
  .setColor('#01fc0c')
  message.channel.send(partneremb)
    } catch(err) {
      const errorlogs = client.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on partnerships commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'partnerships',
    category: 'System',
    usage: 'partnership',
    description: 'Check the bot partnership',
}
