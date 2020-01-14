const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  try {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have enough permission to do this!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Please Mention a user!");
  let warnlevel = warns[wUser.id].warns;

  message.channel.send(`<@${wUser.id}> has **${warnlevel}** warnings.`);
    } catch(err) {
      const errorlogs = bot.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on warnings commands!\n\nError:\n\n ${err}`)
    }
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderators"
};

exports.help = {
  name: 'warnlevel',
  category: 'Mod',
  description: 'Check warnlevel on mentioned user',
  usage: 'warnlevel [mention]'
};
