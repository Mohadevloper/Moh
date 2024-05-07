const usersData = require('../../src/models/Users.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'stock',
  async execute(message, args, client) {
    const usersCount = await usersData.countDocuments({ accessToken: { $exists: true } });
    const embed = new EmbedBuilder()
      .setColor('#ffffff') 
    .setImage("https://media.discordapp.net/attachments/1172443522331312208/1172494909366870037/20231110_023822.jpg?ex=656085fa&is=654e10fa&hm=3e1f3003fdc4554c0ca93da9cbf2d42326c40669fbf6e5afa946b41c87e199f6&")
      .setTitle(`المخزون الحالي هو : ${usersCount}`) 
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};