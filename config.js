const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
// apna session id yahan add karo jab generate ho

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// auto status seen ON
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// status reply ON
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// auto react on status
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*⚡ Status Seen by LORD-MUSTAFA-X 💀*",
// status reply message custom  

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// message delete hone pe resend karega
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
// deleted msg wahi chat me resend hoga

WELCOME: process.env.WELCOME || "true",
// group join/left msg
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// admin promote/demote msg

ANTI_LINK: process.env.ANTI_LINK || "true",
// anti link system ON
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// jab koi mention kare to auto reply ON

MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// menu image custom
PREFIX: process.env.PREFIX || ".",
// bot command prefix
BOT_NAME: process.env.BOT_NAME || "LORD-MUSTAFA-X 💀",
// bot ka naam
STICKER_NAME: process.env.STICKER_NAME || "LORD-MUSTAFA-X 💀",
// sticker pack name

CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// custom emoji react ON
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🔥,💀,😎,❤️,⚡,👑,💫",
// custom emojis

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// auto delete links OFF

OWNER_NUMBER: process.env.OWNER_NUMBER || "923406982921",
// tumhara WhatsApp number (owner)
OWNER_NAME: process.env.OWNER_NAME || "Prince Mustafa 👑",
// owner ka naam
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ LORD-MUSTAFA-X 💀*",
// bot ke footer me show hone wala naam

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// alive command image
LIVE_MSG: process.env.LIVE_MSG || "> *I'm alive and running as LORD-MUSTAFA-X 💀*",
// alive message text

READ_MESSAGE: process.env.READ_MESSAGE || "true",
// auto read messages ON
AUTO_REACT: process.env.AUTO_REACT || "true",
// auto react on all msgs ON
ANTI_BAD: process.env.ANTI_BAD || "true",
// bad word filter ON

MODE: process.env.MODE || "public",
// bot mode public
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// link bhejne wale ko group se kick karega
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// images pe auto sticker
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// auto reply ON
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// bot always online
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// public mode ON
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// typing show karega
READ_CMD: process.env.READ_CMD || "true",
// commands ko read mark karega

DEV: process.env.DEV || "923406982921",
// developer (tumhara number)
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// recording symbol show karega
};
