const discord = require("discord.js")
const send = require('quick.hook')

module.exports = (client, guild) => {
    const rbnjoin = client.channels.get("666633703409057793"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let rbnEmbed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`Phantom started serving **${guild.name}**`)
    .setThumbnail(guild.iconURL)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Gained**: ${guild.memberCount}`)
    rbnjoin.send(rbnEmbed)
 }
