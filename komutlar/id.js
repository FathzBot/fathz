const dc = require("discord.js");

exports.run = async (client, message, args) => {
  let kisi =
    message.mentions.members.first() ||
    message.mentions.channels.first() ||
    message.mentions.roles.first() ||
    message.author;
  const embed = new dc.MessageEmbed()
    .setAuthor(`${message.author.tag} İşte Aradığın Kişinin/Kanalın/Rolün İdsi`)
    .setColor("RANDOM")
    .addField("Aradığın Kişi/Kanal/Rol", kisi)
    .addField("İdsi", kisi.id);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["id"],
  permLevel: 0
};
exports.help = {
  name: "id"
};
