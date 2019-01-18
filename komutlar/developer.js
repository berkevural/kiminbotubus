const Discord = require('discord.js');
var prefix = 'd!'


exports.run = function(client, message,) {

// Avatar linkini ekleyin.
let avatar = "https://cdn.discordapp.com/avatars/519542814011293710/361bf4ae0aacba78ac30bc51573ce448.png?size=2048"


const embed = new Discord.RichEmbed()
		.setTitle(`Geliştirici`)
		// Discord nickinizi ve idnizi ekleyin, isteğe göre bağlantı ekleyebilirsiniz.
		.setDescription(` **! Ɩ̇ƧƳƛƝ ✯ 'ＤＯＮＡＬＤ** (<@519542814011293710>) \n [Steam proifili için tıklayın!](https://steamcommunity.com/id/redbullanil/)`)
		.setImage(avatar)
		.setColor(3447003)
		

		message.channel.send(embed)
	
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['owner', 'kurucum','sahip'], 
  permLevel: 0
};

exports.help = {
  name: 'geliştirici',
  description: 'Bot sahibinin bilgilerini paylaşır', 
  usage: 'geliştirici'
};