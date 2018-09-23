const Discord = require('discord.js')
const send = require('quick.hook')

module.exports = async (client, message) => {
  // Log that the bot is online.
  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
    function status(){
    let status = [
        `.help | ${client.guilds.size} Guilds`,
      `.help | ${client.users.size} Users`,
    ]
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], {type:"PLAYING", url:"https://twitch.tv/twitch"})
}; setInterval(status, 60000)

};
