const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('message', message => {
if(message.content.startsWith(prefix + 'EE')) {
message.channel.send(`# **- Welcome To Reward Server,:tada: 
قم بالضغط على الرياكشن ليتم تفعيلك,**`).then(msg => {
msg.react('✅')

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.delete();
const rro = message.guild.roles.find("name","-Members,")
member.addRole(rro);
})
})
}
});

client.login(process.env.BOT_TOKEN);
