const Discord = require('discord.js');
const db = require('wio.db');
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
 if(db.fetch(`bakim`)) {
  if(message.author.id !== ayarlar.sahip) {
    const bakıms = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription('<a:ayarlar:797756953873874944> Şuanda Bakım Modu Açıktır. Lütfen Daha Sonra Tekrar Deneyiniz.')
    return message.channel.send(bakıms)}
}
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:tadaaa:797757216929087499>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Alevli Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto', 'alevlogo'],
    permLevel: 0
}

exports.help = {
    name: 'alevlogo',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}