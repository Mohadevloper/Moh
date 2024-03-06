require('dotenv').config();
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: true
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1192579224301732022')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=HrXEVNTQxes`)
        .setDetails(`𝑴𝒐𝒉𝒂`)
        .setName(`YNK COMMUNITY`)
        .setState(`ꙮ   𝐘𝐍𝐊 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘`)
        .setParty({
            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`https://cdn.discordapp.com/attachments/1111792736559968297/1172274396052856902/tumblr_b93fc9e74811b86d7340dcb72b4db261_336e8941_500.gif?ex=655fb89b&is=654d439b&hm=f174e4f55037af4586bb997a2ddfb80df071af34b5f92362c2448bb95a98a93    res.send('Self Bot Rich Presence working');2&`)
        .setAssetsLargeText(`YNK COMMUNITY`)
        .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1152254958972969060/1152905562120523776/7541-all-discord-badges-gif.gif`)
        .setAssetsSmallText(`𝑴𝒐𝒉𝒂`)
        .addButton(`♥️YNK COMMUNITY♥️`, `https://discord.com/invite/ynk1`)
        .addButton(`BLIDAN👑Thugs`,`https://discord.com/invite/blidianthugz`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN); 