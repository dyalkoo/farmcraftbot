const Discord = require("discord.js");
const Canvas = require("canvas")

module.exports = async (client, member) => {

    console.log("Un membre est arrivé sur le serveur");
    client.channels.cache.get("1004507795875430560").send("Bienvenue <@" + member.id + "> sur farmcraft !");
    member.roles.add("1004507795372126394");
    member.roles.add("1005065127713853460");

    var canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./background.png");
    ctx.drawImage(background, 0, 0, 1024, 500);

    ctx.font = "42px Impact";
    ctx.filleStyle = "#fff4fb";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase(), 512, 418);

    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        extension: 'png',
        format: "png",
        size: 1024
    }));

    ctx.drawImage(avatar, 393, 47, 238, 238)

    var attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), "welcome.png");

    client.channels.cache.get("1004507795875430560").send({files: [attachment]}, {content: "Bienvenue <@" + member.id + "> sur farmcraft !"});
};

