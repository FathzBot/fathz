const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

    //etiket yardım\\
 client.on("message", msg => {
    //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const westrabumbe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Prefixim: ${ayarlar.prefix} \n Yardım için: ${ayarlar.prefix}yardım. `)
    if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
      msg.channel.send(westrabumbe);
    }
  });
    



client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> :loudspeaker:  **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi** :white_check_mark: "
    )
    .setColor("RANDOM") 
  member.guild.channels.cache.get(kanal).send(embed); 
});





client.on("emojiDelete", async (emoji, message, channels) => {
  let emojik = await db.fetch(`emojik_${emoji.guild.id}`)
  if (emojik) {
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);

  
  }
  }
});

client.on('message', async (msg, member, guild) => {
  
let i = await  db.fetch(`saas_${msg.guild.id}`)

if(i === 'açık') {
  
if (msg.content.toLowerCase() === 'sa'){
          
msg.reply('**Aleyküm Selam, Hoşgeldin Sefalar Getirdin Eyy Müslüman Kardeşim Allahın Selamı Üstüne Olsun.**');    
}
  
}
});

client.on('message', async (msg, member, guild) => {
  
let i = await  db.fetch(`saas_${msg.guild.id}`)

if(i === 'açık') {
  
if (msg.content.toLowerCase() === 'hi'){
          
msg.reply('Hi welcome ');    
}
  
}
});

/////////////////////////DM HG
client.on("guildMemberAdd", member =>{
    const hg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(member.guild.name + 'Sunucusuna Hoşgeldin!')
    .setDescription(`**Sunucumuza katıldığın için teşekkürler Rol Alma Kısmından Rol Alıp Kodlara Bakabilirsin İyi Eğlenceler** :)`)
    .setFooter('Hoşgeldin')
    .setTimestamp()
    member.send(hg)
})
 ////////////////////////////DM HG//




////////////////////////////////////Caps
const capsRegex = new RegExp(/[A-Z]/, 'g');

client.on('messageCreate', async (message) => {
  
    function colorToSigned24Bit(s) {
    return (parseInt(s.substr(1), 16) << 8) / 256;
}

  
  let capslock = db.fetch(`automodcapslock.set_${message.channel.guild.id}`)
  let qwe = db.fetch(`automodcapslock.settings_${message.channel.guild.id}`)
  if(!qwe) {
  return;  
  }
  if (message.member.permission.has("banMembers")) {
    return;
  } else {
      const capsText = message.content.replace(textRegex, '');
    const capsPerc = 1 - (capsText.replace(capsRegex, '').length / capsText.length);

    if (capsText.length > capslock && capsPerc > 0.7) {


  
        if (qwe === 'delete') {
            message.delete(message).catch(() => false);
        }

        if (qwe === 'warn') {
            message.channel.createMessage(`<@${message.author.id}>, Fazla Capslock`);
        }
    if(qwe === 'ban') {

   await message.channel.guild.banMember(message.author.id, '7', `Fazla Capslock`);
      message.channel.createMessage(`${message.author.mention}, sunucudan **mute**\nSebep: Fazla Capslock kullanımı`)
    }
    if(qwe === 'mute') {

     await message.channel.guild.kickMember(message.author.id, `Fazla Capslock.`);
    }
if(qwe === 'uyarsil') {
              message.delete(message).catch(() => false);
              message.channel.createMessage(`<@${message.author.id}>, Fazla Capslock.`);
}
}
}  
});
//////////////////////////////////////////////////////////////////////////Caps


//KanalKoruma

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})


/////////////////////KANALKORUMA SON////


////rolkoruma

client.on("roleDelete", async role => {
  let rolko = await db.fetch(`rolk_${role.guild.id}`);
  if (rolko) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Roller Tekrar Açıldı.'})
  }
})

//

client.on("roleCreate", async role => {
  let rolk = await db.fetch(`rolk_${role.guild.id}`);
  if (rolk) { 
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
}
})

//rolkoruma son

///küfürengel

client.on("message", async msg => {
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.permissions.has("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Heey! Küfür Yasak.').then(nordx => nordx.delete({timeout: 5000}))
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", async msg => {
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq","allahını skm",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.permissions.has("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Yakaladım Seni! Küfür Yasak.').then(nordx => nordx.delete({timeout: 5000}))
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
 
///küfürengel son

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var rachesa = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(rachesa);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});


client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(`${msg.member}, Capslock Kapat Lütfen!`).then(nordx => nordx.delete({timeout: 5000}))
              
          }
        }
      }
    }
  }
});


client.on("ready", () => {
  client.channels.cache.get("914451347208802304").join();
})

const guildInvites = new Map();

client.on("ready", () => {
  client.guilds.cache.forEach(guild => {
    guild.fetchInvites()
    .then(invites => guildInvites.set(guild.id, invites))
    .catch(err => console.log(err));
    });
});
client.on('inviteCreate', async invite => {
  guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
});
client.on('guildMemberAdd', async member => {
  const cachedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    console.log("Davet Eklendi")
    const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
    const currentInvites = await db.get(`inv.${usedInvite.inviter.id}.total`)
    if(currentInvites) {
      db.set(`inv.${member.id}.inviter`, usedInvite.inviter.id)
      db.add(`${usedInvite.inviter.id}`, 1)
    } else {
      db.set(`inv.${usedInvite.inviter.id}.total`, 1)
      db.set(`inv.${member.id}.inviter`, usedInvite.inviter.id)
    }
  }
  catch(err) {
    console.log(err);
  }
});

client.on('guildMemberRemove', async member => {
  const inviter = await db.get(`inv.${member.id}.inviter`)
  const userinviter = await member.guild.members.fetch(`${inviter}`);
  const currentInvites = await db.get(`inv.${inviter}.total`)
  try {
    console.log("Davet Silindi")
    db.add(`inv.${inviter}.total`, -1)
    db.delete(`inv.${member.id}.inviter`)
  } catch(err) {
    console.log(err);
  }
});
