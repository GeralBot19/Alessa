let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `📝 𝙼𝙴𝙽𝚂𝙰𝙹𝙴: 𝙰𝙽𝙾𝚃𝙰𝚃𝙴 𝙿𝙻𝙰𝙽𝚃𝙰 𝙾 𝚂𝙴𝚁𝙰𝚂 𝙲𝚄𝙿𝙾:  ${pesan}`
let teks = `👑 𝙻𝙻𝙰𝙼𝙰𝙽𝙳𝙾 𝙰 𝙻𝙰𝚂 𝙿𝙻𝙰𝙽𝚃𝙰𝚂 👑 \n\n ${oi}\n\n 👑 @𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂: \n`
for (let mem of participants) {
teks += `👑≽ @${mem.id.split('@')[0]}\n`}
teks += `👑 𝙱𝙾𝚃 𝙳𝙴 𝙰𝙻𝙴𝚂𝚂𝙰 👑 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
