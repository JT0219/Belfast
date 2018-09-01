const Discord = require('discord.js');
const bot = new Discord.Client();

function userInfo(user) {
    var finalString = ' ';

    finalString += 'You are the lad known as **'+ user.username +'**.';

    var userCreated = user.createdAt.toString().split(' ');
    finalString += ' Your account was created on **' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '**.';

    return finalString;
}

bot.on('ready', async () => {
    bot.user.setActivity('Britain numbah wan', { type: "PLAYING"} );
});

bot.on('message', (message) => {
if(message.author.bot) return;

    if(message.content.includes('nigga')){
        message.delete();
        message.author.send('Mate, racist langauge isn\'t allowed.')
    }
    if(message.content.includes('nigger')){
        message.delete();
        message.author.send('Mate, racist language isn\'t allowed.')
    }
    if(message.content == 'Hello, Belfast'){
        message.channel.send('Hi there, mate!');
    }
    if(message.content == 'I would like some more coffee'){
        message.channel.send('I only serve tea, what do I look like, a barista?');
    } 
    if(message.content == 'Maids are of the lowest quality'){
        message.channel.send('The fuck did you just say? I\'ll have you know that I am a maid that has trained for over twenty years of service in the Royal Navy, and you say this? I am disappointed.');
    }
    if(message.mentions.users.has('480889200946970673')){
        message.channel.send('Have I been summoned by my commander? I hope it\'s something interes-oh, it\'s just you.');
    } 
    if(message.content == 'Rule Britannia'){
        message.channel.send('Britannia rules the waves!');
    }
    if(message.content == 'I would like some more tea'){
        message.channel.send('Now that\'s more like it.');
    }
    if(message.content == 'Give me my user info'){
        message.channel.send(userInfo(message.author));
    }
    if(message.content == 'Introduce yourself'){
        message.channel.send('Greetings, I am Edinburgh Class\'s second ship: **Belfast**, the largest cruiser amongst the Royal Navy. That is why I am the head maid.');
    }
    if(message.content == 'Ever heard of Scharnhorst?'){
        message.channel.send('You mean that German bloke? Yeah, I saw her sinking in Norway, that twat.');
    }

});

bot.login('NDgwODg5MjAwOTQ2OTcwNjcz.DlzdwA.w6W0MmRSTGMnSlWY28pjCSIAtZU');
