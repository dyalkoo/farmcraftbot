const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/LoadCommands.js")
const loadEvents = require("./Loaders/LoadEvents.js")
const config = require("./config.js")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)