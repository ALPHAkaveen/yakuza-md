module.exports = {
    name: 'ban',
    aliases: ['b'],
    exp: 0,
    category: 'dev',
    description: 'ටැග් කළ පරිශීලකයා තහනම් කරයි',
    async execute(client, arg, M) {
        if (M.quoted?.participant) M.mentions.push(M.quoted.participant)
        if (!M.mentions.length) return M.reply('ඔබ භාවිතා කිරීමට පෙර පරිශීලකයා ටැග් කළ යුතුය!')
        const banned = (await client.DB.get('banned')) || []
        M.mentions.filter(async (user) =>
            !banned.includes(user)
                ? (await client.DB.push('banned', user)) &&
                  (await client.sendMessage(
                      M.from,
                      { text: `*@${user.split('@')[0]}* දැන් තහනම් කර ඇත`, mentions: [user] },
                      { quoted: M }
                  ))
                : await client.sendMessage(
                      M.from,
                      { text: `*@${user.split('@')[0]}* දැනටමත් තහනම් කර ඇත`, mentions: [user] },
                      { quoted: M }
                  )
        )
    }
}
