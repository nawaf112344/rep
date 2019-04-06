const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var { Client } = require("discord.js");
var client = new Discord.Client()
var {token, messageID, roleName} = {
    "token": "NTU4NTMxMjYwNzM0MjQyODM0.XKfcsw.QcgZpICpyIHs8-Yt22g49P90lNg",
    "messageID": "563863570878824452",
    "roleName": "-Members,"
};
client.login(token).then(() => {
    client.on("raw", async (event) => {
        if (event.t !== "MESSAGE_REACTION_ADD") return undefined;
        if (event.d.message_id !== messageID) return undefined;
        var guild  = client.guilds.get(event.d.guild_id);
        if (!guild) return undefined;
        var member = guild.members.get(event.d.user_id);
        if (!member) return undefined;
        var role = guild.roles.find(role => role.name == roleName);
        if (!role) return undefined;
        member.addRole(role).catch(console.error);
    });
});

client.login(process.env.BOT_TOKEN);
