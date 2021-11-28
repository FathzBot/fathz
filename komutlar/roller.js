const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  
  
    let gamerwolf = new Discord.MessageEmbed()
    
.setDescription(`**Sunucudaki Tüm Roller Aşağıya Listelenmiştir** \n \n ` + message.guild.roles.cache.map(roles => `\`${roles.name}\``).join(' ') + `  `)
.setFooter('Tüm Roller Başarıyla Listelendi')
.setColor('#313131')
    
message.channel.send(gamerwolf)
  

};

exports.conf = {               
    aliases: ['Roller','rol-ler','RolLer','Rol-Ler','rolsay','RolSay','rol-say','Rol-Say'],
  permLevel: 0
}
exports.help = {
  name: 'roller',
  description: "GamerWolf RolSay Komudu",
}