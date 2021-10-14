    /* # Exclusively Liyamol
    # @lasiya99X t.me/lasiya99X
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘬𝘢𝘻𝘩𝘪𝘯𝘫 𝘦𝘯𝘵𝘩𝘦𝘬𝘪𝘭𝘶𝘮 𝘦𝘻𝘩𝘶𝘵𝘩 𝘮𝘸𝘶𝘵𝘩𝘦😜"
    

    if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'liya ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'liya ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
    
}
