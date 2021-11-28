const Discord = require('discord.js');
 exports.run = (client, message, args) => {

  let gamerwolf = new Discord.MessageEmbed()

       .setDescription(`**Ne Mutlu Türküm Diyene**`)
       .setImage(`https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif`)   
       .setColor('#313131')

  message.channel.send(gamerwolf)
   
   
     };

     exports.conf = {
       enabled: true,
       guildOnly: true,
       aliases: ['Türk','türkiye','Türkiye','Turkey','turkey'],

  permLevel: 0
};

exports.help = {
  name: 'türk',
  description: 'GamerWolf Türkiye  Komudu',
  usage: 'GamerWolf Türkiye Komudu'
};