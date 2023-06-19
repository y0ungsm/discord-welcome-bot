const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.on("guildMemberAdd", (member) => {
  const embed = new MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setColor(`#2C2F33`)
    .setDescription(
      `<:dot:1094011363392753826> __przeczytaj__:
      ╰ [regulamin](PUT_UR_LINK_TO_CHANNEL)
      <:dot:1094011363392753826> __zerknij na__:
      ╰ [sklep](PUT_UR_LINK_TO_CHANNEL)
      <:dot:1094011363392753826> __masz pytanie, chcesz coś kupić?__
      ╰ otwórz [ticketa](PUT_UR_LINK_TO_CHANNEL)
      `
    )
    .setFooter(
      `Jesteś ${member.guild.memberCount
      } osobą | Godzina: ${new Date().toLocaleTimeString()}`
    );
  client.channels.cache
    .get("PUT_UR_CHANNELID_HERE")
    .send({ embeds: [embed], content: `${member}` });
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(
  "PUT_UR_TOKEN_HERE"
);

