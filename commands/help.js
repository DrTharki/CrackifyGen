const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Help')
    .setColor(bot.color)
    .setDescription('This Help command is for you to understand the commands of the bot!')
    .addField('-addnewfile (name)', 'To make a new file to store your Accounts! example. Minecraft')
    .addField('-restock (type) (accs)', 'To add the Accounts to the file')
    .addField('-stock ', 'To see the stock of your Accounts')
    .addField('-gen <name>', 'Generate a Account')
    .setFooter('Bot developed by DrTharki ✔#6969')
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}
