const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Winsper_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function WILLIS_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Winsper_Tech = Winsper_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Winsper_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Winsper_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Winsper_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Winsper_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Winsper_Tech.sendMessage(Pair_Code_By_Winsper_Tech.user.id, { text: 'BELTAH-MD;;;=>' + b64data });

               let WILLIS_MD_TEXT = `
               
┏━━━━━━━━━━━━━━
👻 𝗕𝗘𝗟𝗧𝗔𝗛-𝗠𝗗 𝗦𝗘𝗦𝗦𝗜𝗢𝗡𝗦
🗿𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬
🙂‍↕️𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗
┗━━━━━━━━━━━━━━━
> ʏᴏᴜ ʜᴀᴠᴇ ᴄᴏᴍᴘʟᴇᴛᴇᴅ ᴛʜᴇ ғɪʀsᴛ sᴛᴇᴘ ᴛᴏ ᴅᴇᴘʟᴏʏ ʙᴇʟᴛᴀʜ xʙᴏᴛ. ᴄᴏᴘʏ ᴛʜᴇ ᴀʙᴏᴠᴇ ᴍᴇssᴀɢᴇ ᴀɴᴅ ᴅᴇᴘʟᴏʏ ᴛʜᴇ ʙᴏᴛ ᴏɴ ʜᴇʀᴏᴋᴜ.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝗙𝗢𝗟𝗟𝗢𝗪 𝗧𝗛𝗘𝗦𝗘 𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧 𝗟𝗜𝗡𝗞𝗦

ғᴏʟʟᴏᴡ ᴏᴜʀ ᴏғғɪᴄɪᴀʟ ᴡᴀ-ᴄʜᴀɴɴᴇʟ 🌊
 [https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F] 

ᴊᴏɪɴ ʙᴇʟᴛᴀʜ xʙᴏᴛ ɢʀᴏᴜᴘ ᴄʜᴀᴛ 💦
[ https://chat.whatsapp.com/KDDCSC0xdIz6hiTxVFLvXg ] 

ᴊᴏɪɴ ᴏᴜʀ ᴜɴʟɪᴍɪᴛᴇᴅ ᴠᴘɴ sᴇʀᴠɪᴄᴇ ɢʀᴏᴜᴘ 🛜
[ https://chat.whatsapp.com/JIQos2sUdGyII4qsig72pK ] 

ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴅᴇᴘʟᴏʏᴍᴇɴᴛ🧑‍💻
 [ https://wa.link/8q7p86 ] 

ɪғ ʏᴏᴜ ʜᴀᴠᴇ ᴀᴄᴄᴏᴜɴᴛ, ᴛᴀᴘ ᴛʜɪs ʟɪɴᴋ 
 [ https://github.com/Beltah254/X-BOT ] 
 

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌 👻  `
 await Pair_Code_By_Winsper_Tech.sendMessage(Pair_Code_By_Winsper_Tech.user.id,{text: WILLIS_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Winsper_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    WILLIS_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await WILLIS_MD_PAIR_CODE()
});
module.exports = router
