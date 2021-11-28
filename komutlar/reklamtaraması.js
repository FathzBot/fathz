const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
    const members = message.guild.members.cache.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const membersss = message.guild.members.cache.filter(member => member.user.presence.activities[0] && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activities[0].state))
  const embed = new Discord.MessageEmbed()
        .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.")
        .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
    .addField('Durum Mesajı Reklam İçeren Kullanıcılar', membersss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin durum mesajı reklam içermiyor.")
        .setColor("RANDOM")
    message.channel.send({embed})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'reklamtaraması',
  description: 'Kullanıcıların adlarını oynuyor durumlarını ve durum measjlarını kontrol eder',
  usage: 'reklamtaraması'
};