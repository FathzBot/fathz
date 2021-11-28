const Discord = require ("discord.js");
exports.run = (client, message) => { 
  
  var gamerwolf = new Discord.MessageEmbed()
  
  .setColor("#313131")
  .setDescription("Artık sende korona oldun")
  .setImage(`https://media.giphy.com/media/UUsOy6IWmzw6mmeOpQ/giphy.gif`)
  
  message.channel.send(gamerwolf)
  
}
module.exports.conf = {
  aliases: ['KoronaOl','koronaol','Korona-Ol']
};

module.exports.help = {
  name: 'korona-ol',
  description: 'GamerWolf Korona Ol Komudu'
};  