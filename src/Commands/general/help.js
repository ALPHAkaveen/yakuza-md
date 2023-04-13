module.exports = {
    name: 'help',
    aliases: ['h', 'menu', 'list'],
    category: 'general',
    exp: 10,
    description: 'Displays the command list or specific command info',
    async execute(client, arg, M) {
        if (!arg) {
            const categories = client.cmd.reduce((obj, cmd) => {
                const category = cmd.category || 'Uncategorized'
                obj[category] = obj[category] || []
                obj[category].push(cmd.name)
                return obj
            }, {})
            const emojis = ['👨🏻‍💻', '💰', '😂', '⚙️', '🎵', '🌀', '🎲', '🛹', '🛠️', '🎊']
            const commandList = Object.keys(categories)
            let commands = ''
            for (const category of commandList) {
                commands += `\n${emojis[commandList.indexOf(category)]} *${client.utils.capitalize(
                    category,
                    true
                )}*\n\n${categories[category].map((cmd) => `• _${client.prefix}${cmd}_`).join('\n')}\n`
            }

            const message = `~ <× [ *—͟͞͞𝚢𝚊𝚔𝚞𝚣𝚊 𝙼𝙳* ] ×> ~\n\n*Hey 👋 ${
                M.pushName
            } (>❤️ω❤️)>*\n*𝙷𝙸 𝚒 𝚖 𝚢𝚊𝚔𝚞𝚣𝚊 𝙼𝙳 WhatsApp use a bot *\n*𝙸 𝚊𝚖 𝚑𝚎𝚛𝚎 𝚝𝚘 𝚖𝚊𝚔𝚎*\n*ᴅᴇᴇᴘ ᴇᴀɢʟᴇ WhatsApp* 🎋\n*experience better ~*\n\n*————↝ LINKS ↜————*\n\n*Please fork and star* ⭐️\n*my repo and don’t forget to* \n*like my video tutorial 🍃*\n\n🥢 *official website:*\ncoming soon\n\n⛩ *Subscribe My you tube channel* \n*YT_URL*\n\n💈 *Link:*\ncoming soon\n\n*🎐COMMANDS🎐*\n\n${commands}\n🗃️ *Note:* Use ${
                client.prefix
            }help <cmd>\nto view the command info`
            const url =
                'https://i.ibb.co/LZ2w0Fv/IMG-20230406-WA0012.jpg'
            const buffer = await client.utils.getBuffer(url)
            await client.sendMessage(
                M.from,
                {
                    video: {
                        url: 'https://i.ibb.co/SNkmTLX/pentol-stiker.gif'
                    },
                    gifPlayback: true,
                    caption: message,
                    contextInfo: {
                        externalAdReply: {
                            title: '𝙷𝙸 𝚒 𝚖 𝚢𝚊𝚔𝚞𝚣𝚊 𝙼𝙳',
                            body: '𝙷𝙸 𝚒 𝚖 𝚢𝚊𝚔𝚞𝚣𝚊 𝙼𝙳',
                            sourceUrl: 'shorturl.at/gvU39',
                            thumbnail: buffer,
                            mediaType: 1
                        }
                    }
                },
                {
                    quoted: M
                }
            )
            return
        }
        const command = client.cmd.get(arg) || client.cmd.find((cmd) => cmd.aliases && cmd.aliases.includes(arg))
        if (!command) return M.reply('Command not found')
        const message = `*CMD INFO*\n\n*🟥 Name:* ${command.name}\n*🟩 Aliases:* ${command.aliases.join(
            ', '
        )}\n*🟨 Desc:* ${command.description}`
        M.reply(message)
    }
}
