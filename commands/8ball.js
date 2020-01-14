const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
  try {
if (cooldown.has(message.author.id)) {
  return message.reply(`This command have a cooldown of 2 **Seconds**`);
}
  cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 2000);
if(!args[0]) return message.reply("Please ask a full question!");
let replies = ["Yes.", "No.", "I don't know.", "of course.", "Ask again later", "Most likely", "As I see it, yes", "Not sure", "Maybe", "Nope", "NO - It may cause dissaster!", "My Source say yes", "get bent", "Most likely no"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("RANDOM")
.addField(":question:Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);
    } catch(err) {
      const errorlogs = bot.channels.get('666547517772660736')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on 8ball commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: '8ball',
  category: 'Fun',
  description: 'Ask the bot to answer your question randomly',
  usage: '8ball [Question]'
};
