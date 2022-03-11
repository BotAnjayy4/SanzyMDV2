const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
sanzy: 'https://zeroyt7-api.xyz',
zenz: 'https://zenzapi.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'gysnzbsja',
'https://zenzapi.xyz': 'f2116e96b4',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Indra>_<'
global.owner = ['6289667644225']
global.packname = 'inz'
global.author = 'Indra>_<'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Cuma Buat Admin Gc',
    botAdmin: 'Jadiin Gw Admin Baru Bisa',
    owner: 'Jan Pake Menu Owner',
    group: 'Di Gc Banh bisanya',
    private: 'Chat Pribadi bisanya!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Wet Lagi Proses.... ',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
