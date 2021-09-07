const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const SOUNDS_NUMBER = 6;
const MAX_NUMBER_OF_COTCOTS = 20;
const MIN_DUREE_COTCOTS = 25000;

/* SLEEP FUNCTION */
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* CLIENT CONNECTION */
client.once('ready', () => {
    console.log('Chicken is ready !');
});

client.login(process.env.TOKEN);

/* MESSAGE RECEIVED */
client.on('message', async message => {
    if(message.content === '-cotcot'){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
            let cpt = 0;
            let cpt_max = Math.floor(Math.random() * MAX_NUMBER_OF_COTCOTS) + 1;
            while(cpt < cpt_max){
                let id_sound = Math.floor(Math.random() * SOUNDS_NUMBER) + 1;
                let dispatcher = connection.play(fs.createReadStream('sounds/chicken'+id_sound+'.ogg')); // COT COT CODAC !!!
                await sleep((Math.random() * 30)*1000 + MIN_DUREE_COTCOTS); // Waiting between 25000ms and 55000ms
                cpt++;
            }
            connection.disconnect();  
        }
    }
});