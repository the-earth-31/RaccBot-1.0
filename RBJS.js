const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


process.on('unhandledRejection', error => {
  console.error(
    "There was an error! Did you update the config.json file? " +
    "You messed something up. \n",
    error
  );
  process.exit();
});

client.on('ready', () => {
  console.log(client.user.tag)
});

client.on('message', async message => {
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


});

client.login('OTE3MTE2MDc4MzE5MDk5OTU0.Ya0A6A.jooojf7kRrzrMDtB5mXlpwRAPHE');