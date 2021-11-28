const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('wio.db')
let talkedRecently = new Set();

module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
	  
	  let karaliste = db.fetch(`karaliste.${message.author.id}`);
    const walaska = new Discord.MessageEmbed()
      .setColor("#F0FFFF")
      .setDescription(`Botda Çevrimdışısın! [Destek Sunucusu](https://discord.gg/tAxs9UUz3x)`);
    if (karaliste) return message.channel.send(walaska).then(msg => msg.delete({ timeout: 5000 }));
	  
	  let bakım = await db.fetch("bakım");
    if (message.author.id !== ayarlar.sahip) {
 if (bakım) {

        return message.channel.send(
          new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTimestamp()
          .setAuthor("Vaxe Bot", "https://cdn.discordapp.com/attachments/798134862095581194/799693992592801863/8bbbeaf6174f2c4b574ae50ee3228d53.png")
          .setThumbnail(message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
          .setDescription(`
> **<:danger:799004396771737610>**|** Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.**
> 
> **<:voice:798915965663969301>**|** __Bakım Sebebi__: \`${bakım}\`**
`));
      }
    }

	  
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`:x: **${cmd.help.name}** isimli komut Şuanda geÇici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};