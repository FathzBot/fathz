exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Bunu yapmak için yetkin yok : Kanalları Yönet")
   
      let every = message.guild.roles.cache.find(r => r.name === "@everyone");
    message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
    });

    message.channel.send("<#"+message.channel + "> kilitlendi");
    };
    exports.conf = {
      aliases: ["lock"],
    };
  
    exports.help = {
      name: "kilitle",
    };