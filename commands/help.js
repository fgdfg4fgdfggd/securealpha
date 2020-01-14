const Discord = require('discord.js')
const cooldown = new Set();
exports.run = (client, message, args, level) => {
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
    
  // If no specific command is called, show all filtered commands.
  if (!args[0]) {
    // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `>Command List<\n\n[Use ${message.settings.prefix}help <commandname> for details]\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toUpperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} - ${c.help.description}\n`;
    });
    let dmembed = new Discord.RichEmbed()
    .setAuthor(`RyanBot Help`, message.author.displayAvatarURL)
    .setDescription(`Hello **${message.author.tag}**\n\nVisit RCDForum [website](https:/rcdforum.com/)\nIf you need help with bot you can join the [support server](https://discord.gg/GPMH6YD). \n\n[RCD](https://www.roblox.com/groups/3326755/ROBLOX-Community-Developers#!/about) don't forget to join! `)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('<> = Must be placed. [] = Optional')
    message.author.send(dmembed)
    let channelembed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}> Please check your DM)`)
    message.channel.send(channelembed)
    

  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      let cmdhelp = new Discord.RichEmbed()
      .setTitle(`Command Help`)
      .setDescription(`Command name > ${command.help.name}\nCommand usage > ${command.help.usage}\nCommand aliases > ${command.conf.aliases.join(", ")}\nCommand description > ${command.help.description}`)
      .setColor('RANDOM')
      message.channel.send(cmdhelp)
    }
  }
    } catch(err) {
      const errorlogs = client.channels.get('666545299778568192')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on help commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h", "halp"],
  permLevel: "Users"
};

exports.help = {
  name: "help",
  category: "User Commands",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
