const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
var yazıqwe = args.slice(0).join(' ')

const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('Dostum Bu Komutu Kullanmak İçin Bir Yazı Girmen Gerek!')

if(!yazıqwe) return message.channel.send(embed)
  message.delete();

const embedd = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(yazıqwe)
message.channel.send(embedd)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'gönder'
};