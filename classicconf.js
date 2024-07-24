/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Emperordagoat)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'ano_nymous_sam' // ubah aja
global.email = 'samuelcircute@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ༺֎ᚏ༈࿉𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒⧉ᚙ֎⸙༻' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['25765809718'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺' // ubah aja ini nama sticker
global.author = '༻࿇𝐊𝐈𝐍𝐆_𝐒𝐀𝐌❖༺' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"eJtUYWCFguNKSs66d2D/k9c57Gc9xNCNNNsBATe5p3I="},"public":{"type":"Buffer","data":"MenXy4fg+ZGvC20IdEgEJaEzEHEcfbletRZsbVy9hkg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oKgH2v+SOV6aNB6CMriKWSWq+x9bAPsqD6UW2yjJVWA="},"public":{"type":"Buffer","data":"S5D/CxNAtv68P91cxR09N+nQJuPKEfNwx6v80qXLIhE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eFsEPGxaipno/cpgE5U8KqD9vXtm5D187xGPsuks11Q="},"public":{"type":"Buffer","data":"5iogbBuhrwCub8TPNKE6QtdUPhx/mMFjG4UmZWX3DE8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GM1W5UJ/fnPNh0yU0Y6USihiTgKarm+7anUBkN+krGk="},"public":{"type":"Buffer","data":"SIclTKOwAN2ce+3l2e/HgDFV6Ch4t35esjK11wCUHSA="}},"signature":{"type":"Buffer","data":"Ybbp19oHvvdqllsFqGGN8ARlPWGKPkR5ASQIJH7o96JVtpRf2lmPY5m72X/mc/iqu96F2IqoxCMeCGvG/rGqjg=="},"keyId":1},"registrationId":121,"advSecretKey":"bgqHom9dMBBcrAfV0OdmpGdp6nfJIkCSZtBnZ2PiIp4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"PClkTjJyQMO0T4Qgr1RzdQ","phoneId":"b4d4a079-ded3-42a2-8c44-9a755e30f052","identityId":{"type":"Buffer","data":"+fb3sy4HAq+QEnrJpAWaS+PfpnA="},"registered":true,"backupToken":{"type":"Buffer","data":"uVQQFUmNLdLZBhq2iXAm5TEuukU="},"registration":{},"pairingCode":"WLATESG6","me":{"id":"25765809718:77@s.whatsapp.net","name":"ルシファー"},"account":{"details":"CLv7hvgCEISEhbUGGCkgACgA","accountSignatureKey":"u6+rzqA1pMNuSGooWGp5df3tpZ6RL5MTGp/2qh9acmU=","accountSignature":"YOZkTygEvkvd2VrDhgeXPuEYptQBpwHKYuCOthXhmNOztNQKP3FRAMC5sc8ulvZrRLdW9leWXg8fhiOgjOh/BA==","deviceSignature":"M5yAxH8mg0gKoHZBrANYRGIT0hxpjZ54EJcnhGzHDvCMy4k8zL/NcYog6RxW4mEZrJ4GvXSftxo78Xw2gPqLig=="},"signalIdentities":[{"identifier":{"name":"25765809718:77@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bbuvq86gNaTDbkhqKFhqeXX97aWekS+TExqf9qofWnJl"}}],"platform":"smba","lastAccountSyncTimestamp":1721844241,"myAppStateKeyId":"AAAAAH9v"}'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = false
global.rn = 'typing'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
