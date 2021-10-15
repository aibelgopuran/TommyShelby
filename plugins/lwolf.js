/* # Exclusively from RAVANA 
# script original owner gos to @lasiya99X 
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘬𝘢𝘻𝘩𝘪𝘯𝘫 𝘦𝘯𝘵𝘩𝘦𝘬𝘪𝘭𝘶𝘮 𝘦𝘻𝘩𝘶𝘵𝘩 𝘮𝘸𝘶𝘵𝘩𝘦😘"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'lwolf ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=LiyaMol&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by ᗩʀᴛʜᴇʀ sʜᴇʟʙʏ' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'lwolf ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=LiyaMol&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by ᗩʀᴛʜᴇʀ sʜᴇʟʙʏ' })

    }));
    
}
