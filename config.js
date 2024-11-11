//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2250555236730";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUkzaHA5OTZKeENMMDY1bDJJdWFsK1VZSjhnZnBIRlFsNDRZUzR1SmVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2VFbmFMdG0vZFhManB5TkUwOVo5Z2RqSitQN0V1WmV2dENxSTZzbTNpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQkhwaTlHMlVSYlMzT1l6YkR5TWNmWjUwRjdXYm1FZEFkTDFRV0ZkeDJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxN212ZjUwb1hXS3dRbGU1U1lnYXowWVpkSHQ3ZmZBSWFBM2ZNYW1ac0dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLQkUzU3M1MUtrbTEzZTdkS1djalhmYm9FNHFJSzhBbVE4Sy9mWjgzRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVkSit5eTJHRlBnMzRoYy9xR1F4ZXRLK2JaNGhadUMwMHAvdGx0U3Z0VFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Q0VjhQdHFZVnNBK29sQkxnditjWmxTdit5QmUwdkYwQWxJcUtVVVRVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9KM0hkVG5sVXpMdDhueU9sWUZhalhZcGsxelJxdGU3eU1ITFQ2cnlROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzKy9jQXNKNDBmc3hzL3d0Y2lkai9ZRDdCRzZKTjBFNzZGQmk2akN1QTlqZGVTdW9TZjhnWnVzOStGTGw3U2NRdlBOZ2dXUnI2Z2dXR1U3MkgzT0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiI1QWw4cjIrZ0dPWnN6SW84U280QldvUmJQZ1RoK3ZaOFFnSy9sMTQvbWFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0RE1YNFQtS1M3aVVEZ0RnYm9rb1RnIiwicGhvbmVJZCI6IjFmODU2N2Y4LWMwOTMtNGRjMC1iNDA0LTAwN2E4NDIyMzZlNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkb2lud0tra2VoWXlJRTk1UVN4dDFDUGYvTzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTVhUW5JSm5JekVmY2lDcmtvS1l6VXErc1ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE4R0NONFkzIiwibWUiOnsiaWQiOiIyMjU1NTIzNjczMDo4MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2U2d05zSEVKU1p5TGtHR0E4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidGxIUWRNLzZXSzNudXNKdG1sYkoyTzYySkl1VVZjMUxTNWtJREQyR1NWcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVTdUZlE0cStJVE01SWV4TXpNenJxYWFTL21SRUdYUXk0RmxDOS9LZDRlOSt3U05UZ3VpL1NoOWNZN0lrcUhDZW9aMktyYXcxb1R3c3pJV1MremJaRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InFhd0F4UHN4eXRaT3YxZEVaY0VtWHU4YjQ0YzlQQi9PVnlzOWhzcTkrSS9qK2hVZmhuSndUSVFjdlJHcG5idnNnSE5NTDdNVVdxT0FnVDl0dC8ybUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NTUyMzY3MzA6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlpSMEhUUCtsaXQ1N3JDYlpwV3lkanV0aVNMbEZYTlMwdVpDQXc5aGtsYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTMzMzI4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCN08ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "BLADE-MD-V2",
  packname: process.env.PACK_NAME || "ALEX",
  botname: process.env.BOT_NAME || "BLADE-MD-V2",
  ownername: process.env.OWNER_NAME || "tobi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
