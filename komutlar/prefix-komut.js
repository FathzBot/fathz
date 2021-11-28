const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("RANDOM")
//deathhbot
  .setTitle('')
  //deathhbot
  .setDescription(`

**Bir komut yazmalısın. | Örnek kullanım : !!yardım !!komutismi **
  
` )
 //deathhbot

 message.channel.send(nameles)

}
//deathhbot
exports.conf = {
//deathhbot
  enabled: true,
//deathhbot                                                   //deathhbot
  guildOnly: false,
//deathhbot
  permLevel: 0,
//deathhbot
  aliases: []                           //deathhbot
//deathhbot
}
//deathhbot
exports.help = {
//deathhbot
  name: '',
//deathhbot
  description: 'Yardım Menüsünü Açar',
//deathhbot
  usage: ''
//deathhbot
}