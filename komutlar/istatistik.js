const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let sahip = ayarlar.sahip

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription('**Fathz Bot Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
let motion = new Discord.MessageEmbed()
  
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      " Veriler", 
      `>  Toplam Sunucu : **${
        client.guilds.cache.size
      }** \n>  Toplam Kullanıcı : **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n>    Toplam Kanal : **${
        client.channels.cache.size}**  \n >  Toplam Komut  : **${client.commands.size}**

      `
    ) 
    .addField(
      "Bot Sahibi",
      `>  Bot Sahibi : <@877499633918681159> `
    ) 
.addField(
      "Bot Geliştiricisi",
      `>  Bot Geliştiricisi : <@852626210277425172> `
    ) 
    .addField(
      "Sürümler",
      `>  Discord.js Sürümü : **v${Discord.version}** \n>  Node.js Sürümü : **${process.version}**`
    ) 
    .addField(
      "Gecikmeler",
      `>  Bot Pingi : **${
        client.ws.ping
      }** \n>  Mesaj Gecikmesi : **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "İstatistik ",
  usage: "istatistik"
};