const { cmd } = require('../lib'); // ya apne handler ke hisaab se import

cmd({
    pattern: "menu",
    desc: "Show bot menu",
    category: "main",
}, async (conn, m) => {

    const darkMenu = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⚡ *LORD-MUSTAFA-X 💀* ⚡
🔥 “Born To Rule — Not To Follow.” 🔥
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛

╔═══《 👑 *MAIN COMMANDS* 👑 》═══╗
💀 .alive         » Bot status check  
⚡ .owner         » Show owner info  
🔥 .help          » Command list  
🧠 .runtime       » Bot uptime  
📶 .ping          » Connection speed  

╔═══《 💫 *FUN & TOOLS* 💫 》═══╗
🎭 .sticker       » Convert image to sticker  
🖼️ .toimg         » Sticker to image  
🎶 .song           » Download song by name  
📸 .ss             » Screenshot from link  
💬 .quote          » Random life quote  
🤖 .ai             » Chat with AI mode  

╔═══《 ⚔️ *OWNER ZONE* ⚔️ 》═══╗
👑 .mode public/private  
📢 .broadcast      » Send message to all  
♻️ .restart        » Restart bot  
🧩 .update         » Update bot version  
🚫 .ban / .unban   » Manage users  

╔═══《 💥 *EXTRA FEATURES* 💥 》═══╗
💬 .antidelete     » See deleted msgs  
🔗 .antilink       » Remove group links  
👁️ .autostatus     » Auto view status  
❤️ .autoreact      » React on all msgs  
🎭 .autosticker    » Auto sticker mode  

╚═══《 💀 *LORD-MUSTAFA-X 💀* 》═══╝
🖤 “No Mercy — No Limits.”  
© Powered by *Prince Mustafa ☠️*
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
`;

    await conn.sendMessage(m.chat, { text: darkMenu });
});
