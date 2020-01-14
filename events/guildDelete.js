const discord = require("discord.js")
const send = require('quick.hook')

module.exports = async (client, guild) => {
    const rbnleave = client.channels.get("666633703409057793"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let rbnembed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(guild.iconURL)
    .setTitle(`Phantom Has stopped serving **${guild.name}**`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}`)
    rbnleave.send(rbnembed)
}
