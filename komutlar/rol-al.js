const Discord = require("discord.js");
exports.run = (client, message, args) => {
let rol = message.mentions.roles.first()
let kullanıcı = message.mentions.members.first()
if(!kullanıcı) { message.channel.send(`Kimin Rolunu Alacaksın?`) 
return}
if(!rol) { message.channel.send(`Hangi Rolu Alacaksın?`) 
return}

  kullanıcı.roles.remove(rol);
message.channel.send(`Belirtilen Rol Kaldırıldı`)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolal", "ra"],
  permLevel: 0
};
exports.help = {
  name: "rol-al",
  description: "Rol Alırsınız.",
  usage: "rol-al kullanıcı @rol"
};