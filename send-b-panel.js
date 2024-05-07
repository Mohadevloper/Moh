const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js'); 

module.exports = {
  name: 'send-b-panel',
  owners: true,
  execute(message, args, client) {
    const embed = new EmbedBuilder()
      .setTitle('شراء رصيد')
    .setImage("https://cdn.discordapp.com/attachments/1080751458816901152/123054362948.jpg.png?ex=6633b40f&is=66213f0f&hm=1d1f960d3385992f8b5c8d295b085acdf7fe360f8ff5d69537150d8c078537a6&")
      .setDescription('**يمكنك شراء رصيد عن طريق الضغط على الزر**')
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder() 
      .setStyle(ButtonStyle.Secondary)
      .setCustomId('buy-balance')
      .setEmoji("<:pp393:1028740537215365150>")
      .setLabel('شراء رصيد'))

    message.channel.send({ embeds: [embed], components: [row] });
    message.delete();
  },
};
