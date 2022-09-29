const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    const EmbedMessage  = new EmbedBuilder()
    .setTitle(`Logs de leave`)
    .setColor('#59DC3E')
    .setDescription(`<@${member.user.id}> viens de quitter le serveur.`)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()

    client.channels.cache.get('1004507797381185536').send({ embeds: [EmbedMessage]})
}
