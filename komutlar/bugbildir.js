const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Lütfen Bir Bug Yazınız.** ❌')

const embed = new Discord.MessageEmbed()
.setTitle("Fathz Bot Bug Sistemi")
.setColor('GREEN')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('819297018265468968').send(embed) //--İD YAZMAYI UNUTMA HyperDeath#0648--\\
  
message.channel.send("Bug Bildiriminiz Başarı İle Gönderildi. 👍").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bugbildir',
  description: 'sunucunuzdaki bugları istediniz kanala gönderir',
  usage: 'bugbildir "bulduğunuz bug"'
}