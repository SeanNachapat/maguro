const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
}) 

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
    if (msg.content === "ping") {
        msg.reply("pong!")
    }
})

client.login(process.env.TOKEN)