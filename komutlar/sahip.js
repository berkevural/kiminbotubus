const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("d!eval", "Kod dener")
    .addField("d!load", "Yeni bir komut yükler")
    .addField("d!reboot", "Botu yeniden başlatır")
    .addField("d!reload", "Bir komutu yeniden başlatır")
    .addField("d!unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
