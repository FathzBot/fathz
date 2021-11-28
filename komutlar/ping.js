const dc = require("discord.js");

exports.run = async (client, message, args) => {
const ping = new dc.MessageEmbed()
.setTitle("Fathz | Ping")
.setColor("RANDOM")
.setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text=${client.ws.ping}&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true`)
message.channel.send(ping)
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["ms","pıng","pg"],
  permLevel: 0
};
exports.help = {
  name: "ping",
  description:"Ping"
};