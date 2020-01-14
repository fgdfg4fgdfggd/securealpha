const Discord = require("discord.js");
const errors = require("../util/errors.js");

module.exports.run = async (bot, message, args) => {
  try {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "9909152432") {
    message.reply("90912959021");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find('name', role);
  if (!gRole) return message.reply("Couldn't find that role.");

  if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
    } catch(err) {
      const errorlogs = bot.channels.get('666547517772660736')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on addrole commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'addrole',
  category: 'Mod',
  description: 'Add role to mentioned user.',
  usage: 'addrole [mention] [role]'
};
