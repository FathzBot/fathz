const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")
//deathhbot
  .setTitle('Fathz bot yardım Menüsü')
  //deathhbot
  .setDescription(`
  **!!botlistyardım : Bot List Menüsünü Açarsınız Yenii!!!.**
  **!!jail-sistem : Jail Sistemi Açar.**
  **!!capsengel aç : Caps Engeli Açar.**
  **!!emoji-koruma : Emoji Koruma Açarsınız.**
  **!!küfür-engel aç : Küfür Engel Açarsınız.**
  **!!aboneyardım : Abone Yardım Menüsünü Açarsınız.**
  **!!anti-raid aç : Anti Raid Açarsınız.**
  **!!link-engel aç : Link Engel Açarsınız.**
  **!!rolkoruma : Rolkorumayı Açarsınız.**
  **!!kanalkoruma : Kanal Korumayı Açarsınız.**
  **!!istatistik : Botun İstatistiğini Gösterir.**
  **!!avatar : Avatarınızı Gösterir.**
  **!!arrow : Arrow Logo Yapar.**
  **!!fbi : Fbi Geldi Kaç Lannn Kaçç.**
  **!!banner : Banner Yapar.**
  **!!espri : Espri Yapar.**
  **!!hayırdır : Hayırdır İnşallah ?.**
  **!!ilginçbilgi : İlginç Bilgi Atar.**
  **!!kilitle : Kanalı Kiltiler.**
  **!!kanalaç : Kilitlenen Kanalı Açar.**
  **!!kapaklaf  : Kapak Laf Atar.**
  **!!kasaaç : Kasa Açar.**
  **!!nuke : Kanala Nuke Atar (Sohbet Kanalında Yapmanız Önerilir).**
  **!!ping Botun Pingini Öğrenirsiniz.**
  **!!sil : Mesaj Siler.**
  **!!yetkilerim : Sunucuda Yetkilerinizi Öğrenirsiniz.**
  **!!davet : Botun Davet Linkini Atar.**
  **!!sunucubilgi : Sunucu Bilgisini Göstetir (Betada).**
  **!!bugbildir : Bug Bildirirsiniz Gereksiz Kullanmayın !!!.**
  **!!yazı-tura : Yazı Tura Atar.**
  **!!token : Botun Gerçek Tokenini Atar!**
  **!!kurallar : Hazır Kural Atar.**
  **!!neonmavi : Neon Mavi Logo Yapar.**
  **!!zarat : Zar Atar.**
  **!!aduket : Aduket Çeker.**
  **!!bilekgüreşi : Bilek Güreşi Yaparsınız.**
  **!!çevir : Kelimeyi Türkçeden İnglizceye Çevirir.**
  **!!yavaşmod : Yavaş Modu Ayarlarsınız.**
  **!!bansay : Sunucuzda Kaç Kişinin Banladığını Gösterir.**
  **!!çek : Seslide Olan Kişiyi Yanınıza Çeker.**
  **!!stresçarkı : Stres Çarkı Çevirirsiniz.** 
  **!!sunucu-kur : Sunucu Kurar .**
  **!!sa-as : Sa Ası Açar**
  **!!bjk : Dene Ve Gör **
  **!!bizkimiz : Biz Kimiz Acabaa???.**
  **!!alevlogo : Alev Logo.**
  **!!altınlogo : Altın Logo.**

` )
  

 message.channel.send(nameles)

}
//deathhbot
exports.conf = {

  enabled: true,

  guildOnly: false,
//deathhbot
  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}
//deathhbot
exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}