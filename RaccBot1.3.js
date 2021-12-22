const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var GphApiClient = require('giphy-js-sdk-core') //npm install giphy-js-sdk-core
const client1 = GphApiClient("[giphy api token")

process.on('unhandledRejection', error => {
  console.error(
    "There was an error! Did you update the config.json file? " +
    "You messed something up. \n",
    error
  );
});

client.on('ready', () => {
  console .log("online")  //online verification
  console.log(client.user.tag)
});

client.on('guildCreate', guild => {  //welcome message
  guild.systemChannel.send(`Yo, its RaccBot. Thanks for adding me to the server. &help for command list :raccoon:`)
});




client.on('message', async message => {

function gifSearch (searchEntry) {

var randomResponse = Math.floor(Math.random() * 45);

const searchForGif = (gifName) => {   //gif searching function
  return client1.search('gifs', {"q": gifName, "offset": randomResponse})
         .then((response) => {
           var gif = response.data[0].url;
           return gif;
         })
         .catch((err) => {  //checks validity of gif
           return err;
         })
}
    var searchPromise = searchForGif(searchEntry);

   searchPromise.then((gif) => {
     message.channel.send(gif);
   }) 
}

if (message.content.startsWith('&gif')) {
   gifSearch("raccoon");  //raccoon gif search
  }
if (message.content.startsWith('&bruh')) {
   gifSearch("bruh");  //bruh gif search
  }

 if (message.content.startsWith("&raccdm ")) {
    var raccMessage = message.content.substr("&raccdm ".length); //splits command into send-able message
    // Do something with poll variable //
    message.channel.send('Message sent! :white_check_mark: ')
    message.author.send('Dear User, ' + raccMessage);
}

if (message.content.startsWith('&id')) {
	const userReply = message.author;    //establishes message user
	message.channel.send('ID sent via DM! :white_check_mark: ')
	message.author.send(`IDs are written in the format of <@[id number]>`)
	return message.author.send(`${userReply.id}`);  //gets author id and sends as message

}



 if (message.content.startsWith('&getrickrolledlol')) {
   message.reply(`https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713`)
  }

if (message.content.startsWith('&help')) {

    message.reply(`-&sad -&speed -&wind -&water -&high five -&yo -&food -&chonk -&hug  -&sleep -&evil -&bread -&shop -&piano 
    ⚪Random Gif Search - &gif
    ⚪Racc Direct Message - &raccdm (message)
    ⚪What is my id? - &id`); //Line (Inline) Reply without mention
  }

  if (message.content.startsWith('&yo')) {

    message.reply(`Wassup it is me, racc bot`); //Line (Inline) Reply without mention
  }

  if (message.content.startsWith('&sad')) {
  	message.reply(`https://tenor.com/view/bobatyun-raccoon-soobin-gif-19369912`);
  }

  if (message.content.startsWith('&speed')) {
  	message.reply(`https://tenor.com/view/racoon-gif-22278566`);
  }

  if (message.content.startsWith('&wind')) {
  	message.reply(`https://tenor.com/view/racoon-happy-ahhh-joy-ride-windy-gif-10015381`);
  }

  if (message.content.startsWith('&water')) {
  	message.reply(`https://tenor.com/view/raccoon-playing-water-pool-pet-gif-7564469`);
  }

  if (message.content.startsWith('&high five')) {
  	message.reply(`https://tenor.com/view/high-five-raccoons-funny-animals-trash-pandas-gif-11969111`);
  }

    if (message.content.startsWith('&food')) {
  	message.reply(`https://tenor.com/view/eating-the-pet-collective-yummy-popcorn-raccoon-gif-16894090`);
  }
    
    if (message.content.startsWith('&chonk')) {
  	message.reply(`https://tenor.com/view/scooch-raccoon-chubby-chonk-absolute-unit-gif-14789220`);
  }

    if (message.content.startsWith('&hug')) {
  	message.reply(`https://tenor.com/view/v-a-sly-racoon-gif-20903341`);
  }

    if (message.content.startsWith('&sleep')) {
  	message.reply(`https://tenor.com/view/raccoon-retreat-withdraw-bed-hide-gif-18813480`);
  }

    if (message.content.startsWith('&evil')) {
  	message.reply(`https://cdn.discordapp.com/attachments/737364590618345482/917539399502295040/unknown.gif`);
  }

    if (message.content.startsWith('&bread')) {
  	message.reply(`https://tenor.com/view/raccoon-bread-raccoon-bread-raccoon-with-bread-racco-gif-22120699`);
  }

    if (message.content.startsWith('&shop')) {
  	message.reply(`https://cdn.discordapp.com/attachments/737364590618345482/917539715551461416/unknown.gif`);
  }

    if (message.content.startsWith('&piano')) {
  	message.reply(`https://cdn.discordapp.com/attachments/737364590618345482/917539866512871484/unknown.gif`);
  }

    if (message.content.startsWith('&roll')) {
  	message.reply(`https://tenor.com/view/raccoon-roll-rolling-gif-9052103`);
  }

});


client.login('[discord bot token]');