module.exports = {
    name: 'alive',
    aliases: ['a'],
    category: 'music',
    exp: 0,
    description: 'Testing stuff',
    async execute(client, arg, M) {
        M.reply(
            `හැම දෙයක්ම වැඩ කරනවා *Exp:* ${await client.exp.get(M.sender)} *Level:* ${(await client.DB.get(`${M.sender}_LEVEL`)) || 0}`
        )
    }
}
