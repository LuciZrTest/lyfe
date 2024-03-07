const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    fromMe: true,
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```𝙼𝙸𝙰 𝙼𝙳 ⚠︎```')
    const end = new Date().getTime()
    return await message.send('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
