const Discord = require("Discord.js")

module.exports = {

    name: "ping",
    description: "Afficher la latence",
    permission: "Aucune",
    dm: true,

    async run(bot, message, args) {
    
        await message.reply(`Ping: \`${bot.ws.ping}\``)
    }
}