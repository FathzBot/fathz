//https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif

const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('**Çekecek Birisini Etiketlemelisin**')
  if (user.id === message.author.id) return message.reply('Kendine Aduket Atamazsın :D');

    
  if ( message.react('🔫')) {
      var gif = [
      'https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif', 'https://j.gifs.com/d8AnWQ.gif', 'https://media.tenor.com/images/8ca6142b55c7c1a3f12c6a6779f12d3b/tenor.gif',  ];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('🔫')) {
    const op = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}>'a Aduket Çekti `)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aduket',
  description: 'aduket',
  usage: 'aduket'
};