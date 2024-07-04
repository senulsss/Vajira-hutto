const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = '𝐒𝐄𝐍𝐔𝐋 𝐑𝐀𝐃𝐀𝐖𝐀 𝐌𝐃';
const FOOTERNAME = '> ＳＥＮＵＬ ＲＡＤＡＷＡ ＭＤ';
global.owner = process.env.OWNER_NUMBER  || '94774179596' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=PAUTEaQK#CL1XeL3bYPfEjT9-LrsDAUpWRQX1KkDY37Fm2SWN4Ac' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "94772801923,94787820101" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'ＳＥＮＵＬ' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://i.ibb.co/L80vSWt/20240602-014003.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 ＳＥＮＵＬ ＲＡＤＡＷＡ ＭＤ 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `𝙃𝙀𝙇𝙇𝙊𝙒 𝙄'𝙈 𝙎𝙀𝙉𝙐𝙇 𝙍𝘼𝘿𝘼𝙒𝘼 𝙈-𝘿 𝙄'𝙈 𝙃𝙀𝙍𝙀 𝙏𝙊 𝘼𝙎𝙎𝙄𝙎𝙏 𝙔𝙊𝙐 𝙏𝙊𝘿𝘼𝙔!!


Ｉ'Ｍ ＳＥＮＵＬ ＲＡＤＡＷＡ - ＭＤ 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 ＳＥＮＵＬ ＲＡＤＡＷＡ 🌚🌟

𝗜 𝗔𝗠 𝗔𝗟𝗪𝗔𝗬𝗦 𝗛𝗘𝗥𝗘 𝗙𝗢𝗥 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨. 😇 𝗔𝗡𝗬 𝗧𝗛𝗜𝗡𝗚 𝗙𝗢𝗥 𝗬𝗢𝗨 𝗦𝗨𝗗𝗗𝗛😌❤️

𝙻𝙴𝙰𝚁𝙽 𝙰𝙱𝙾𝚄𝚃 𝙷𝙾𝚆 𝚃𝙾 𝙲𝚁𝙴𝙰𝚃𝙴 𝚈𝙾𝚄𝚁 𝙾𝚆𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃????? 𝙵𝙰𝙻𝙻𝙾𝚆 𝙱𝙴𝙻𝙾𝚆 𝙲𝙷𝙰𝙽𝙽𝙴𝙻

⭕𝙼𝚈 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝚄𝙼𝙱𝙴𝚁 =http://Wa.me/±94710773101?text=_𝙷𝙸_|:♥️🧸_

Learn about how to create your own whatsapp bot??? Follo below channel......`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || true ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
