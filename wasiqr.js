const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function WASI_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Wasi_Tech = Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: 'POPKID-MD;;;=>' + b64data });
	
				   let TREX_MD_TEXT = `

┏━━━━━━━━━━━━━━
👻 𝗣𝗢𝗣𝗞𝗜𝗗-𝗠𝗗 𝗦𝗘𝗦𝗦𝗜𝗢𝗡𝗦
🗿𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬
🙂‍↕️𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗
┗━━━━━━━━━━━━━━━
> ʏᴏᴜ ʜᴀᴠᴇ ᴄᴏᴍᴘʟᴇᴛᴇᴅ ᴛʜᴇ ғɪʀsᴛ sᴛᴇᴘ ᴛᴏ ᴅᴇᴘʟᴏʏ ᴘᴏᴘᴋɪᴅ xᴛᴇᴄʜ. ᴄᴏᴘʏ ᴛʜᴇ ᴀʙᴏᴠᴇ ᴍᴇssᴀɢᴇ ᴀɴᴅ ᴅᴇᴘʟᴏʏ ᴛʜᴇ ʙᴏᴛ ᴏɴ ʜᴇʀᴏᴋᴜ.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝗙𝗢𝗟𝗟𝗢𝗪 𝗧𝗛𝗘𝗦𝗘 𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧 𝗟𝗜𝗡𝗞𝗦

ғᴏʟʟᴏᴡ ᴏᴜʀ ᴏғғɪᴄɪᴀʟ ᴡᴀ-ᴄʜᴀɴɴᴇʟ 🌊
 [https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l] 

ᴊᴏɪɴ ᴘᴏᴘᴋɪᴅ xᴛᴇᴄʜ ɢʀᴏᴜᴘ ᴄʜᴀᴛ 💦
[ https://chat.whatsapp.com/BOGXdAdg92XI2p0KkyDLVX ] 

ᴊᴏɪɴ ᴏᴜʀ ᴜɴʟɪᴍɪᴛᴇᴅ ᴠᴄғ sᴇʀᴠɪᴄᴇ ɢʀᴏᴜᴘ 🛜
[ https://chat.whatsapp.com/BOGXdAdg92XI2p0KkyDLVX ] 

ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴅᴇᴘʟᴏʏᴍᴇɴᴛ🧑‍💻
 [ https://wa.me/+254111385747 ] 

ɪғ ʏᴏᴜ ʜᴀᴠᴇ ᴀᴄᴄᴏᴜɴᴛ, ᴛᴀᴘ ᴛʜɪs ʟɪɴᴋ 
 [ https://github.com/Popkiddevs/POPKID-XTECH ] 
 

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃 𝐗𝐓𝐄𝐂𝐇 𝐓𝐄𝐀𝐌 ❤️`
	 await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id,{text:WASI_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await WASI_MD_QR_CODE()
});
module.exports = router
