const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Sokulcak Laf Yükleniyor... :alarm_clock: ').then(message => {
      var espriler = ['Görmek istemeyen göze ışık tutsan ne fayda.', 'A101 de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ', 'Bazı insanların da aynı televizyon gibi tepesine vurulduğunda düzelmesi en büyük temennimdir.', 'Bazı kişiler dümen çevirmek olunca kaptan olmak için sıraya giriyor.', 'Ben sana tavsiye... Sadece gülüşlerimi yakala. Öfkem sana ağır gelir...', 'Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.', 'İnsanlığa davet etsek yol tarifi isteyecek insanlar var.', 'Senin etiketinin olduğu yer fiyatı ben koyarım.', 'Arada makyaj malzemelerini de ye ki, biraz da için güzelleşsin.', 'Allah’ım! Bana sayıyla gönderdiğin insanlar, umarım stoklarla sınırlıdır.', 'Gidişine illa bir isim konulacaksa, mal kaybı diyelim.', 'Zoruna gittiğini duydum. Güzel yer, ben de gitmiştim!', 'Bugün laf koymayacağım. Çay koydum; gel, iç, insanlık gör.', 'Ben insanları harcamayı iyi bilirim. Yeter ki bozuk olsun.', 'Canım, bak! Bir derdin sıkıntın olursa, biliyorsun, hiç umurumda değil.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lafsok',
  description: 'Laf Sokar.',
  usage: 'lafsok'
}; 