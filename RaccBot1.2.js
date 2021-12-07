const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var GphApiClient = require('giphy-js-sdk-core') //npm install --save giphy-js-sdk-core
const client1 = GphApiClient("#giphy token#") //from giphy developer portal

process.on('unhandledRejection', error => {
  console.error(
    "There was an error!" +
    "You messed something up. \n",
    error
  );
});

client.on('ready', () => {
  console.log(client.user.tag)
});

client.on('message', async message => {     //giphy client on

if (message.content.startsWith('&gif')) {

var randomResponse = Math.floor(Math.random() * 18); //picks random result 0-18

const searchForGif = (gifName) => {                 //gif search
  return client1.search('gifs', {"q": gifName, "offset": randomResponse})
         .then((response) => {
           var gif = response.data[0].url;
           return gif;
         })
         .catch((err) => {
           return err;
         })
}
    var searchPromise = searchForGif("raccoon");   //verified search

   searchPromise.then((gif) => {
     message.channel.send(gif);
   })    
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

client.login('#discord token#'); //discord token from developer app