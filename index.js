const { Client, Intents } = require('discord.js');

const client = new Client({ intents: 131071 })

client.on('ready', () => {
client.user.setPresence({ status: 'dnd', activities: [{ name: `moha`, type: "STREAMING", url: "https://www.twitch.tv/xyidz"}]})
    });

const prefix = '!';

client.on("messageCreate", async message =>{
  if(message.content.startsWith(prefix+"setavatar")){
    if(!message.member.permissions.has("ADMINISTRATOR"))return;
    let avatar = message.attachments.first().url
    if(!avatar) return message.channel.send({content:"ارفع صوره"})
    client.user.setAvatar(avatar)

  message.channel.send({content:"Avatar Changed"})
  }
    });
client.login(process.env.token);