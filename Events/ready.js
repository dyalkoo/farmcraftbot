const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

    await loadSlashCommands(bot)

    console.log(`Bot conecté !`)
    bot.user.setActivity('En developpement !', 'Watching');

}
