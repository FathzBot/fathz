const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if( message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.discordapp.com/attachments/811514313352544287/811552544731561994/Ekran_Alnts.PNG'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmaya başlıyacak onaylıyormusun? 

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Biraz bekleyin hata düzelicektir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'Owner' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: 'Founder' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'Ceo' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});

message.guild.roles.create({ data: { name: '・Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))


message.guild.channels.create('------BİLGİLENDİRME------', {type: 'category'}).then(parent => {
message.guild.channels.create('・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・video-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('------TOPLULUK------', {type: 'category'}).then(parent => {
message.guild.channels.create('・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・foto-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・counting', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・soru-cevap', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('------DESTEK------', {type: 'category'}).then(parent => {
message.guild.channels.create('・kod-destek', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・html-destek', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・discord-destek', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('------STAFF------', {type: 'category'}).then(parent => {
message.guild.channels.create('・yetkili-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('・Yönetici Odası', {type: 'text'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('・Toplantı', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('------SES------', {type: 'category'}).then(parent => {
message.guild.channels.create(' ・ Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create(' ・ Özel Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create(' ・ AFK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
message.guild.channels.create(' ・ Müzik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
});



});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};