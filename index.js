const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "MTA0MzI2NTg5Mjk1NzU3MzEyMA.GTRZ_i.xNf_5gEDSLvxPZChs8bFKtpa8yRNm579K5yJLw"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=>  {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "*help"){
        message.reply("```~Help Menu~ \n !!!YOU HAVE TO CHOOSE YOUR TEAM BEFORE USING ANY BOT COMMANDS!!! \n *PC: Shows Your Player Card \n *PC @userID: Shows another users Player Card \n *RANK: Shows how you face up against others in the channel```")
    }
})

client.login(process.env.TOKEN)

