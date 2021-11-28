const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('wio.db');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {  
    const kimizbiz = new Discord.MessageEmbed()
    .setColor("#ff4400")
    .setAuthor(`» Fathz  Bot`, client.user.avatarURL({dynamic: true})) 
      .setDescription('» Fathz Bot Ekibi Biz Kimiz?')
.setThumbnail(client.user.avatarURL({dynamic: true}))
    .addField(`**»Biz Sizin İçin Günlerce Kod Yazarak Sizin En İçin En Güzel Kodları Eklemeye Çalışıyoruz. Sizler İçin Uğraşiyoruz Sunucunuzu Güzelleştirmek İçin Yeni Komutlar Ekliyoruz Botlarımızın Bilgileri İçin !!davet Yazarak Bulabilirsiniz.`)
    .setFooter(``, client.user.avatarURL({dynamic: true}))
    message.channel.send(kimizbiz).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bizkimiz'],
    permLevel: 0
};

exports.help = {
    name: 'bizkimiz',
      category: 'Bot',
      description: 'Ekip Hakkında Bilgi Verir.',
};