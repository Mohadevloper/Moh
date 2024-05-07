const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js'); 
const { BOT_URL } = require('../../src/Constants.js');

module.exports = {
  name: 'panel',
  owners: true,
  execute(message, args, client) {
    const embed = new EmbedBuilder()
      .setTitle('لوحة التحكم')
    .setColor('#ffffff')
    .setImage("https://media.discordapp.net/attachments/1172443522331312208/1172487475428589568/20231110_023746.jpg?ex=65607f0d&is=654e0a0d&hm=de5a89eea67d19d62e8d83bec5d6dad4036dcb66488bf803f35f80e65dc054cb&")
      .setDescription('**<:bulletlist:1172337597415165994>  من هنا يمكنك التحكم الكامل في عملاتك و الاعضاء في السيرفر**')
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder() 
        .setStyle(ButtonStyle.Secondary)
        .setCustomId('withdraw-m-balance')
      .setEmoji("<:cs_members:1172337595057963019>")
        .setLabel('شراء أعضاء'), 
      new ButtonBuilder()

.setStyle (ButtonStyle.Secondary)

.setCustomId("buy-balance")

.setEmoji("<:cs_store:1172337596924436490>")

.setLabel('شراء رصيد'),
      new ButtonBuilder() 
        .setStyle(ButtonStyle.Link)
        .setURL(BOT_URL)
      .setEmoji("<:bulletlist:1172337597415165994>")
        .setLabel('إدخال البوت'));

    message.channel.send({ embeds: [embed], components: [row] });
    message.delete();
  },
};
