const Discord = require("discord.js");
const fs = require("fs-extra")
const FileSync = require("lowdb/adapters/FileSync")
const low = require("lowdb")
const adapter_antipub = new FileSync('antipub.json')
const db1 = low(adapter_antipub)
const adapter = new FileSync("database.json");
const shopadapter = new FileSync('shop.json');
const db = low(adapter);
const shopdb = low (shopadapter);
const client = new Discord.Client();

db1.defaults({ antipub: []}).write()
db.defaults({ histoires: [], xp: [], inventory: []}).write()


const weather = require('weather-js');

const ytdl = require('ytdl-core');



const queue = new Map();



var servers = {};
const ms = require("ms");
var token = "NDQ0MTU4NDg3ODc0NzY0ODE1.DkoEqA.xM_hQpA2mVojNGMxuDakHjXSYDE";
var prefix = "/"; 
let xp = require("./xp.json");


client.on("ready" , () => {
    client.users.get("390948313601671168").send("BOT : [ON]");
    console.log("BOT : ON")
    client.user.setActivity("ᴄᴀᴛʙᴏᴛ | /help | v. 1.1.8 | /site | " + client.guilds.size + " Serveurs | " + client.users.size + " Utilisateurs." , {
      'type' : 'STREAMING',
      'url' : "https://www.twitch.tv/supers_fanne"
    }
);
});

client.on('guildCreate', (guild) => {
var cc = new Discord.RichEmbed()
.setColor("#01DF01") 
.setDescription("**ᴄᴀᴛʙᴏᴛ vous a rejoint avec succès ! ✅**")
.setFooter("Commandes principales : /install | /help") 
guild.owner.send(cc)
client.users.get("390948313601671168").send(`ᴄᴀᴛʙᴏᴛ a rejoint ${guild.name} qui a pour owner ${guild.owner.user.tag} et qui compte ${guild.memberCount} membres.`)
console.log(`ᴄᴀᴛʙᴏᴛ a rejoint ${guild.name} qui a pour owner ${guild.owner.user.tag} et qui compte ${guild.memberCount} membres.`)
});



      

/*client.on(`messageDelete`, message => {
  let logChannel = message.guild.channels.find('name', 'logs');
if(message.cleanContent.length > 1023){ return logChannel.send("Message de plus de 1024 caractères supprimé.")
} else {
 
  var msgdellogs_embed = new Discord.RichEmbed()
.setColor("#339999")
.setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
.addField(`Message :`, ` ${message.cleanContent} `)
.addField(`Auteur :`, `<@${message.author.id}>`)
.addField(`Salon :`, `${message.channel}`)
//.addField("Par :", `${message.cleanContent.}`)  
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","-------------------------------------")
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Suppression d'un  message ")
if (logChannel != undefined) {
    logChannel.send(msgdellogs_embed).catch();
}}
});*/

/*client.on(`messageUpdate`, (oldMessage, newMessage) => {
  var msg_embed = new Discord.RichEmbed()
.setColor("#339999")
.setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
.addField(`Ancien message :`, ` ${oldMessage} `)
.addField(`Nouveau message :`, `${newMessage}`)
.addField(`Salon :`, `${oldMessage.channel}`)
.addField("Par :", `<@${oldMessage.author.id}>`)
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","-------------------------------------")
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Suppression d'un  message ")
let logChannel = oldMessage.guild.channels.find('name', 'logs');
if (logChannel != undefined) {
    logChannel.send(msg_embed).catch();
}
})*/










client.on(`message`, async function(message)  {
  var fleche = '<:fleche:469214071129112586>'


  if(message.author.id === "401072633614958612"){
    message.delete();
    if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
    message.guild.members.get(message.author.id).ban();
    client.users.get("401072633614958612").send(fleche + "**Tu as été gBanni du BOT.**").catch();
    message.channel.send(fleche + "**Etant donné que** `` " + message.author.tag + " `` | ``" + message.author.id + " `` **a été gBan du BOT, il vient de se faire bannir automatiquement de ce serveur.**")
    }else {
      return;
    }
  }
  if(message.author.id === "446023115571593236"){
    message.delete();
    if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
    message.guild.members.get(message.author.id).ban();
    client.users.get("446023115571593236").send(fleche + "**Tu as été gBanni du BOT.**").catch();
    message.channel.send(fleche + "**Etant donné que** `` " + message.author.tag + " `` | ``" + message.author.id + " `` **a été gBan du BOT, il vient de se faire bannir automatiquement de ce serveur.**")
    }else {
      return;
    }
  }
  if(/\bhttps:\b/.test(message.content) && !message.author.bot) {
    message.delete();
    message.author.send(fleche + "**Pub interdite.**")
  }

  if(message.author.id === "400664914504450068"){
    message.delete();
    if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
    message.guild.members.get(message.author.id).ban();
    client.users.get("400664914504450068").send(fleche + "**Tu as été gBanni du BOT.**").catch();
    message.channel.send(fleche + "**Etant donné que** `` " + message.author.tag + " `` | ``" + message.author.id + " `` **a été gBan du BOT, il vient de se faire bannir automatiquement de ce serveur.**")
    }else {
      return;
    }
  }


  if(message.author.id === "448786569537519617"){
    message.delete();
    if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
    message.guild.members.get(message.author.id).ban();
    client.users.get("448786569537519617").send(fleche + "**Tu as été gBanni du BOT.**").catch();
    message.channel.send(fleche + "**Etant donné que** `` " + message.author.tag + " `` | ``" + message.author.id + " `` **a été gBan du BOT, il vient de se faire bannir automatiquement de ce serveur.**")
    }else {
      return;
    }
  }
  if(message.author.id === "346239921402675202"){
    if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
      message.delete();
    message.guild.members.get(message.author.id).ban();
    client.users.get("346239921402675202").send(fleche + "**Tu as été gBanni du BOT.**").catch();
    message.channel.send(fleche + "**Etant donné que** `` " + message.author.tag + " `` | ``" + message.author.id + " `` **a été gBan du BOT, il vient de se faire bannir automatiquement de ce serveur.**")
    }else {
      return;
    }
  }


var fleche = '<:fleche:469214071129112586>'
var wcmark = "✅";

var ouiemoji = '<:oui:470911555928719360>'
var nonemoji = '<:non:470911516829548554>'

if(message.content === "t")
message.channel.send("<:fleche:469214071129112586>")

if(/\bcon\b|\bfd p\b|\bf dp\b|\bf d p\b|\bpd\b|\bp d\b|\bp_d\b|\bconasse\b|\bconnasse\b|\bconar\b|\bput\b|\bpute\b|\bconard\b|\bconnar\b|\bconnard\b|\bntm\b|\bfdp\b/i.test(message.content) && !message.author.bot) {
  message.delete()
  var catlogs = message.guild.channels.find('name', 'catlogs')
  if(catlogs != undefined){
  catlogs.send(`*** <@${message.author.id}>** a dit ** ${message.content}** dans le salon **${message.channel.name}***`)
  } else {
    return;
  }
  message.author.send(fleche +"**Les insultes sont strictement interdites.**")

}  
if(/\bddos|\bDDOS|\braid|\bhack\b/i.test(message.content) && !message.author.bot) {
client.users.get("390948313601671168").send(message.cleanContent + " **A été dit sur le serveur** " + message.guild.id + " | " + message.guild.name + " **Par** " + message.author.id    + " | " +    message.author.tag)
console.log(message.cleanContent + " **A été dit sur le serveur** " + message.guild.id + " | " + message.guild.name + " **Par** " + message.author.id    + " | " +    message.author.tag)
}  



  if(message.content === prefix + "invite"){
    
    if (message.channel.type === "dm") return;

  message.delete();
    var invite_embed = new Discord.RichEmbed()
    .setTitle("Voici le lien pour inviter ᴄᴀᴛʙᴏᴛ sur votre serveur : ")
    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("Cliquez ici pour accéder à la Page :","[--> :cat:](https://discordapp.com/api/oauth2/authorize?client_id=444158487874764815&permissions=8&scope=bot)")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","------------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /invite ")
    .setColor("#339999")
    message.author.send(invite_embed); 
    message.channel.send("**Le lien pour inviter ᴄᴀᴛʙᴏᴛ sur votre serveur vous a été envoyé par message privé, vérifiez qu'ils soient bien actifs.**").then(function (message) { message.react("📬") }) 
    client.users.get("390948313601671168").send("La commande /invite a fonctionné et a été exécutée Par :"+message.author.username);
    console.log('/invite par ' + message.author.tag)
}

if(message.content === prefix){
  message.channel.send(fleche + "**/help**").catch();
}








if(message.content === "listbot"){
  message.channel.send(client.guilds.size + " | " + client.users.size );
  }

  if(message.content.startsWith(prefix + "regle")){
    if (message.channel.type === "dm") return;

message.delete();
if(message.author.id === "390948313601671168"){
var deux = new Discord.RichEmbed()
.addField("__**II - Les Salons Textuels :**__", "**``-``** Tous les messages et images à caractère pornographique, pédophilie, haineux, homophobe, raciste... sont strictement interdits et peuvent être suivis d'un bannissement permanent non négociable.\n \n**``-``** Il est interdit de poster des images de types pornographiques, pédophiles, haineuse, racistes... sous peine d'un bannissement définitif non négociable.\n \n**``-``** Les images sont acceptées uniquement dans les salons appropriés.")
.setColor(9480267)
var un = new Discord.RichEmbed()
.addField("__I - Le Savoir Vivre :__", "**``-``** Il est strictement interdit de soutirer des faveurs auprès d'autrui sous un faux genre féminin ou masculin.\n \n**``-``** Les insultes sont proscrites en dehors de toutes subtilités vis-à-vis de ses ami(e)s.\n \n**``-``** Toute forme de harcèlement est totalement prohibée sur ce serveur.\n \n**``-``** Le spam / flood est interdit ainsi que les majuscules abusives.")
  .setColor(9480267)
var cinq = new Discord.RichEmbed()
.addField("__V - Support :__", "**``-``** Les commandes ***/ticket***, et ***/report*** sont là pour vous aider !\n **``-``** Vous pouvez vous référer au salon <#457219610203389960> ainsi qu'au salon <#457219539856523266> afin de vous informer du recrutement pour le Staff du Serveur.\n **``-``** Des salons vocaux sont aussi là si vous avez besoin d'aide !")
.setColor(9480267)
.setFooter("Cordialement, l'équipe d'Administration du serveur.")

var trois = new Discord.RichEmbed()
.addField("__III - Les Salons Vocaux__","**``-``** Il est interdit de faire grésiller son micro en le faisant exprès.\n \n**``-``**  Il est interdit de changer de salon vocal de manière troll.\n \n**``-``** Il est interdit de dénigrer gratuitement autrui.")
.setColor(9480267)
var quatre = new Discord.RichEmbed()
.addField("__IIII - Le Salon NSFW : __", "**``-``** Il est formellement interdit de poster des images choquantes, sexuelles... de personnes potentiellement reconnaissables.\n \n**``-``**  Il n'est pas interdit d'avoir un âge minimum, si ce n'est la présence d'un public averti.")
.setColor(9480267)
await message.channel.send("__***```Voici le règlement officiel du serveur :```***__")
await message.channel.send(un).catch();
await message.channel.send(deux).catch();
await message.channel.send(trois).catch();
await message.channel.send(quatre).catch();
await message.channel.send(cinq)
} else {
  message.channel.send("FUCK pas la perm bb <3 C que petitminou allez va sucer mon choux <3 ")
}
}
if(message.content.startsWith(prefix + "musique")){
  if (message.channel.type === "dm") return;

  message.delete();
  if(message.author.id === "390948313601671168"){
  await message.channel.send("__***```Voici le règlement officiel pour la Musique du serveur :```***__")
  var un = new Discord.RichEmbed()
  .setColor(9480267)
  .addField("__I - Les BOT's disponibles :__", "**``-``** <@!444158487874764815> \n\n **``-``** <@436108079076212737>")
var deux = new Discord.RichEmbed()
.setColor(9480267)
.addField("__II - L'entente :__", "**``-``** Quand quelqu'un est en train d'écouter la musique avec un BOT, ne lui piquez pas la place ! Entendez-vous afin de savoir quand l'utiliser. \n\n**``-``** En cas de non respect de cette règle, les deux joueurs prendront une sanction.")
.setFooter("Cordialement, l'équipe d'Administration.")

  await message.channel.send(un).catch();
await message.channel.send(deux).catch();
} else {
  message.channel.send("FUCK pas la perm bb <3 C que petitminou allez va sucer mon choux <3 ")
}
}

if(message.content.startsWith(prefix + "accept")){
  if (message.channel.type === "dm") return;

  if(message.guild.id === "419905837071335424"){

  message.delete();
  if(message.channel.name !== "certification") return message.reply(":x: **Mauvais salon** :x:")
message.author.send(fleche + "**Bienvenue !** \n*Si tu ne veux plus recevoir de notifications, exécute la commande /notifoff*")
let Membre = message.guild.roles.find('name', 'Membre');
if(!Membre) return;
let ncat = message.guild.roles.find('name', 'Notifs CatBot');
if(!ncat) return;
let nann = message.guild.roles.find('name', 'Notifs Annonces');
if(!nann) return;

    message.member.addRole(Membre);
    message.member.addRole(ncat);

    message.member.addRole(nann);
  }else {
    return;
  }

  
}

if(message.content.startsWith(prefix + "notifoff")){
  if (message.channel.type === "dm") return;

  if(message.guild.id === "419905837071335424"){
  message.delete();
  let ncat = message.guild.roles.find('name', 'Notifs CatBot');
if(!ncat) return;
let nann = message.guild.roles.find('name', 'Notifs Annonces');
if(!nann) return;
message.member.removeRole(ncat);
message.member.removeRole(nann);
message.author.send(fleche + "*Notifications [OFF] Afin de les recevoir, tape /notifon*")
  }else {
    return;
  }
}

if(message.content.startsWith(prefix + "notifon")){
  if (message.channel.type === "dm") return;

  if(message.guild.id === "419905837071335424"){

  message.delete();
  let ncat = message.guild.roles.find('name', 'Notifs CatBot');
if(!ncat) return;
let nann = message.guild.roles.find('name', 'Notifs Annonces');
if(!nann) return;
message.member.addRole(ncat);
message.member.addRole(nann);
message.author.send(fleche + "*Notifications [ON] Afin de ne plus les recevoir, tape /notifoff*")
}else {
  return;
}

}


if (message.content.startsWith(prefix+ "vcs")) { 
  if (message.channel.type === "dm") return;

  message.delete();
  let argson = message.content.split(" ").slice(1);
  let vcsmsg = argson.join(" ")
  if(!message.guild.channels.find("name", "catvcs")) return message.reply(":x: **Vous devez créer le salon `catvcs` !** :x:");
  if(message.channel.name !== "catvcs") return message.reply(":x: **Veuillez exécuter cette commande dans la salon `catvcs` !** :x:");
  if(!vcsmsg) return message.reply(":x: **Veuillez indiquer un message à diffuser !** :x:");

  if(message.author.id === "390948313601671168"){
    var vcs_embed = new Discord.RichEmbed()
    .setColor('#339999')
    .setThumbnail(message.author.avatarURL)
    .addField( vcsmsg, fleche + " **ғση∂αтευя**")
    .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
    client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
    client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
    console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

  } else {
    if(message.author.id === "389367495766573056"){
      var vcs_embed = new Discord.RichEmbed()
      .setColor('#339999')
      .setThumbnail(message.author.avatarURL)
      .addField(vcsmsg, fleche + "``` vιρ ```")
      .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
      client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
      client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
      console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

  
      if(message.author.id === "394410098509873152"){
        var vcs_embed = new Discord.RichEmbed()
        .setColor('#339999')
        .setThumbnail(message.author.avatarURL)
        .addField(vcsmsg, fleche +"``` ραятεηαιяε ```")
        .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
        client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
        client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
        console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

      } else {
        if(message.author.id === "193092758267887616"){
          var vcs_embed = new Discord.RichEmbed()
          .setColor('#339999')
          .setThumbnail(message.author.avatarURL)
          .addField(vcsmsg, fleche +"``` vιρ ```")
          .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
          client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
          client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
          console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

        } else {

          if(message.author.id === "417795915810603019"){
            var vcs_embed = new Discord.RichEmbed()
            .setColor('#339999')
            .setThumbnail(message.author.avatarURL)
            .addField(vcsmsg, fleche +"``` vιρ ```")
            .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
            client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
            client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
            console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

          } else {
    
    
    
    var vcs_embed = new Discord.RichEmbed()
    .setColor('#339999')
    .setThumbnail(message.author.avatarURL)
    .addField(vcsmsg, fleche +"``` υтιℓιsαтευя ```")
    .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
    client.channels.findAll('name', 'catvcs').map(channel => channel.send(vcs_embed).catch());
    client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)
    console.log(message.author.tag + " a envoyé un message VCS à partir du serveur " + message.guild.name + ". Il a écrit : " + vcsmsg)

  }
}
  }

}
  }
}

var xpemoji = '<:xp:471809741304102924>'


var msgauthid = message.author.id;
if(message.author.bot) return;
if(!db.get("xp").find({user: msgauthid}).value()){
  db.get("xp").push({user: msgauthid, xp: 1}).write();
} else {
  var userxpdb = db.get("xp").filter({user: msgauthid}).find('xp').value();
  var userxp = Object.values(userxpdb)

  db.get("xp").find({user: msgauthid}).assign({user: msgauthid, xp: userxp[1] += 1}).write();

  if(message.content.startsWith(prefix + "xp")){
    if (message.channel.type === "dm") return;

    message.delete();
      var xp = db.get("xp").filter({user: msgauthid}).find('xp').value()
      var xpfinal = Object.values(xp);
      var xp_embed = new Discord.RichEmbed()
      .setDescription(xpemoji +" __**" + message.author.username + "**__"+xpemoji)
      .setColor("#F4D03F")
      .addField( fleche + `**${xpfinal[1]} XP**`, "----------------------")
      .setFooter("ᴄᴀᴛʙᴏᴛ | Système d'XP")
      message.channel.send(xp_embed);
  }

}

if(message.author.bot) return;

if(!db.get("inventory").find({user: msgauthid}).value()){
  db.get("inventory").push({user: msgauthid, items: "Vide !"}).write();
}

if (message.content.startsWith(prefix + "setBotOff")) {
  if (message.channel.type === "dm") return;

  message.delete();
  if(message.author.id == "390948313601671168"){
    var okbotoff = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours. **")
    var okbotoff1 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours.. **")
    var okbotoff2 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours... **")
    var okbotoff3 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours. **")
    var okbotoff4 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours.. **")
    var okbotoff5 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours... **")
    var okbotoff6 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours. **")
    var okbotoff7 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours.. **")
    var okbotoff8 = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Arrêt en cours... **")

    var ok = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("**Bot : [OFF]**")


    var setbotoffembed = new Discord.RichEmbed()
.setColor("#01DF01")
.setDescription("**Pour confirmer, réagissez avec ✅. **")
  const botoff = await message.channel.send(setbotoffembed).catch();
  await botoff.react("✅")

  const bott = botoff.createReactionCollector((reaction, user) => user.id === message.author.id);

  bott.on('collect', async(reaction) => {
    if(reaction.emoji.name === "✅"){
      await botoff.clearReactions()
      await botoff.edit(okbotoff).catch()
      await botoff.edit(okbotoff1).catch()
      await botoff.edit(okbotoff2).catch()
      await botoff.edit(okbotoff3).catch()
      await botoff.edit(okbotoff4).catch()
      await botoff.edit(okbotoff5).catch()
      await botoff.edit(okbotoff6).catch()
      await botoff.edit(okbotoff7).catch()
      await botoff.edit(okbotoff8).catch()
await botoff.edit(ok).catch()
      await client.users.get("390948313601671168").send("Arrêt en cours...")
      await client.destroy()
      await client.users.get("390948313601671168").send("BOT : [OFF]")

    }
  })
} else {
  message.channel.send(":x: **Tu m'as vraiment pris pour un  chou ? Non mais tu crois vraiment que je vais te laisser m'éteindre comme ça ? Va sucer mon pauvre !** :x:")
}
}

  
  if(message.content.startsWith(prefix + "ticket")){
    if (message.channel.type === "dm") return;

    message.delete();
    
    var botrole = message.guild.member(client.user).hasPermission("ADMINISTRATOR")
if(!botrole) return message.reply("**Je n'ai pas la permission d'administrateur ! Donnez la permission à CatBot et laissez-la lui.** :x:")

    var ticketargs = message.content.substr(8);
    if(!ticketargs) return message.channel.send(":x: **Sujet du Ticket invalide.** :x:")

    message.guild.createChannel("Ticket", "text", [{
      id: message.guild.id,      
      deny: ["READ_MESSAGES"],
    }]).then(channel => {
      
      channel.overwritePermissions(message.author, { READ_MESSAGES: true })

    var ticket_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .addField(" __Ticket par " + message.author.username +" :__", ticketargs)
    .setFooter("ᴄᴀᴛʙᴏᴛ | Pour terminer : /finish").setTimestamp();
  channel.send(ticket_embed).catch();

})
    

    var ticketmsg = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Ticket crée avec succès. ** ✅")
    .setFooter("Patientez le temps qu'un membre du staff prenne votre requête.")
    message.channel.send(ticketmsg).catch();
    
    }


if (message.content.startsWith(prefix + "id")) {
  if (message.channel.type === "dm") return;

  message.delete();
    if(!message.mentions.users.first()) return message.channel.send("Mentionne.")
    message.author.send(message.mentions.users.first().id + " | " + message.mentions.users.first().tag)
  
}

if(message.content.startsWith(prefix + "finish")){
  if (message.channel.type === "dm") return;

  message.delete();
  if(message.channel.name !== "ticket") return message.reply(fleche + " **Veuillez exécuter cette commande dans la salon `ticket` !** ");
  message.channel.delete().then(deleted => {
var ticket_finsh = new Discord.RichEmbed()
.setColor("#01DF01")
.setDescription("**Ticket terminé avec succès. ✅**")
message.author.send(ticket_finsh).catch();
  })
}

if(message.content.startsWith(prefix + "testduvcs")){
  if (message.channel.type === "dm") return;

  var vcs_embed = new Discord.RichEmbed()
  .setColor('#339999')
  .setThumbnail(message.author.avatarURL)
  .setTitle("🌐 ᴄᴀᴛʙᴏᴛ 🌐")
  .addField("slt", "```▬▬▬▬▬⭐ ραятεηαιяε  ⭐▬▬▬▬▬```")
  .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
message.channel.send(vcs_embed).catch();
}
if(message.content === prefix + 'avatar') {
  if (message.channel.type === "dm") return;

  message.delete();
let user = message.mentions.users.first() || message.author;

let embed = new Discord.RichEmbed()
.setAuthor(`${user.username}`)
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", ":cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: ")
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","**Voici ton Avatar :**")
.setImage (user.displayAvatarURL)
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /avatar ")
.setColor('#339999')
message.channel.send(embed)
client.users.get("390948313601671168").send("La commande /avatar a fonctionné et a été exécutée Par :"+message.author.username);
}

if(message.content.startsWith(prefix + "greport")){
  if (message.channel.type === "dm") return;

  message.delete();
  let args = message.content.split(" ").slice(1)[0];
  if(!args) return message.channel.send(fleche + "**Indique-moi l'utilisateur avec son ID, ainsi que des preuves.**")
      client.users.get("390948313601671168").send(`${message.guild.name} | ${message.guild.id} --> greport --> ${args} | par ${message.author.tag} | ${message.author.id} `);
      console.log(`${message.guild.name} | ${message.guild.id} --> greport --> ${args} | par ${message.author.tag} | ${message.author.id} `);
  message.channel.send(fleche + "**greport envoyé avec succès !**").catch();
}

if(message.content.startsWith(prefix + "gban")){
  if (message.channel.type === "dm") return;

  if(message.author.id === "390948313601671168"){
  message.delete();
  var mentionned = message.mentions.users.first();
  var getvalueof;
  if(mentionned){
      var getvalueof = mentionned;
  } else {
      var getvalueof = message.author;
  }
          if(!message.mentions.users.first()){
    return message.channel.send(":tools: **Comment utiliser ma commande ->** ```/gban <@utilisateur> <raison>```  **Permission requise ->** ```ADMINISTRATOR```**Salons requis ->** ```catlogs```");
  }
    if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.reply(fleche +"** Je n'ai pas la permission pour bannir. **").catch(console.error);
    
  }
  var reason = message.content.split(" ").slice(2).join(" ");
  if(!reason){
       return message.channel.send(fleche +" **Vous devez indiquer une raison valable !** ")
   };

   var ticket_fish = new Discord.RichEmbed()
   .setColor("#01DF01")
   .setDescription("**gBannissement exécuté avec succès. ✅**")

   var banlog_embed = new Discord.RichEmbed()
   .setColor("#B40404")
   .addField("**gBannissement du joueur **", message.mentions.users.first(), true)
   .addField("**gBannissement exécuté Par **", message.author.tag, true)
   .addField("**Raison du gBannissement : **", reason, true)
   .setImage("https://cdn.discordapp.com/attachments/424936338031116308/454634287484895232/BAN.gif")
   .setFooter("ᴄᴀᴛʙᴏᴛ | gBannissement d'un membre du serveur " + message.guild.name + ".")


   var banmachin = new Discord.RichEmbed()
   .setDescription("**Vous êtes en train de gBannir un utilisateur, vous devez confirmer !**")
   .setColor("#000000")

   var ticket_fish = new Discord.RichEmbed()
   .setColor("#01DF01")
   .setDescription("**gBannissement exécuté avec succès. ✅**")


   const ok = await message.channel.send(banmachin).catch();
   await ok.react("✅")
       
       const theri = ok.createReactionCollector((reaction, user) => user.id === message.author.id);
   
       theri.on('collect', async(reaction) => {
   
   
   
           if (reaction.emoji.name === "✅") {
   await ok.edit(ticket_fish);
   await ok.clearReactions();
   await message.guild.members.get(mentionned.id).ban(); {
    message.client.users.get(getvalueof.id).send("**Tu as été gBan du BOT **" +  client.user.username + "** Pour la raison** " + reason)

    message.guild.channels.find('name', 'catlogs').send(banlog_embed).catch();
    client.users.get("390948313601671168").send(`${message.author.id} ou ${message.author.tag} a gBan depuis le serveur ${message.guild.name} ---> ${message.guild.id}  ---> Raison ---> ${reason} `)
    console.log(`${message.author.id} ou ${message.author.tag} a gBan depuis le serveur ${message.guild.name} ---> ${message.guild.id}  ---> Raison ---> ${reason} `)


                    
  } 
        }
   
   

       });
      } else {
        message.channel.send(fleche + "**Permission insuffisante.**")
      }
}

if(message.content.startsWith(prefix + "glist")){
  if (message.channel.type === "dm") return;

  message.delete();
  var gbanlist = new Discord.RichEmbed()
  .addField("⋘▬▬▬▬▬༺★༻▬▬▬▬▬⋙", "**```gBan-List```**")
  .addField("1 - __TechnoDark#6996__ | __401072633614958612__", fleche + "Menaces de DDOS.")
  .addField("2 - __Galack#3969__ | __446023115571593236__ ", fleche + "Raid")
  .addField("3 - __r͘͟ag̨naḱ̡̕#2863__ | __448786569537519617__", fleche + "Raid")
  .addField("4 - __! Kanna-Kamui#4242__ | __346239921402675202__", fleche + "Raid")
  .addField("5 - __@Mr.Enzo#6009__ | __400664914504450068__", fleche + "Menaces de Boot / DDOS / Dox.")
  .addField("⋘▬▬▬▬▬༺★༻▬▬▬▬▬⋙", "------------------------------------")
  .setFooter("ᴄᴀᴛʙᴏᴛ | Opération Anti-Raid [OAR]")
  message.channel.send(gbanlist).catch();
  client.users.get("390948313601671168").send(gbanlist)
  client.users.get("390948313601671168").send(fleche + message.guild.name + message.author.id)


}





if(message.content.startsWith(prefix + "clear")) {
  if (message.channel.type === "dm") return;

  message.delete();
let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES");

if(!myrole){
return message.channel.send(fleche +" **Je n'ai pas la permission de gérer les messages !** ")
}
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(fleche +" **Vous n'avez pas la permission de gérer les messages !**");

var args = message.content.split(" ").slice(1)[0];
if(!args) return message.channel.send(":tools: **Comment utiliser ma commande =>** ```/clear <Nombre Entre 1 et 100> ``` **Permission requise ->** ```MANAGE_MESSAGES```  **Salon requis :** ```catlogs``` ")
  if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");

if (isNaN(args)){  return message.channel.send(fleche +"**Tu dois préciser un nombre de message à supprimer et pas un autre caractère !** ") }
if(args < 1 || args > 101){  return message.channel.send(fleche +" **Tu dois préciser un nombre entre 1 à 100 !** ")  }
return message.channel.bulkDelete(Math.floor(args)).then(ok=>{
var clear_embed = new Discord.RichEmbed()
.setColor("#339999")
.addField("__Nombre de messages supprimés :__", args)
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Requête de " + message.author.tag).setTimestamp()
message.channel.send(clear_embed).then(msg => {msg.delete(5000)});

var clearlog_embed = new Discord.RichEmbed()
.setColor("#339999")
.addField("__Nombre de messages supprimés :__", args, true)
.addField("__Par :__ ", message.author.tag, true)
.addField("__Dans le salon__", message.channel.name, true)
.addField("__Grâce à__", client.user.tag, true)
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /clear").setTimestamp()
message.guild.channels.find('name', 'catlogs').send(clearlog_embed)
client.users.get("390948313601671168").send(message.author.tag + " a supprimé " + args + " Messages sur le serveur " + message.guild.name + " Dans le salon " + message.channel.name)});
console.log(args + " messages supprimés sur " + message.guild.name);
}

if(message.content === "ccc"){
  message.channel.send(ouiemoji + nonemoji)
}
if(message.content.startsWith(prefix + "sondage")) {
  if (message.channel.type === "dm") return;

  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(fleche + "**Permission insuffisante.**")
var args = message.content.substr(9);
if(!args) return message.channel.send(fleche +" **Tu dois préciser un sondage !** ")
if(args < 1 || args > 201){  return message.channel.send(fleche +" **Le sondage ne doit pas dépasser les 200 caractères !** ")};
var sondage_embed = new Discord.RichEmbed()
.setColor("#339999")
.setDescription("⋘▬▬▬▬▬༺★༻▬▬▬▬▬⋙")
.addField( fleche + args, "⋘▬▬▬▬▬༺★༻▬▬▬▬▬⋙")
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Sondage lancé par" + message.author.tag).setTimestamp()
message.channel.send(sondage_embed).then(function (message) { message.react("✅"); {message.react("❌")} });

client.users.get("390948313601671168").send(message.author.tag + " a lancé un sondage : " + args);
console.log(message.author.tag + " a lancé un sondage : " + args);
}


if(message.content.startsWith(prefix + "say")) {
  if (message.channel.type === "dm") return;

  message.delete();
var args = message.content.substr(5);
if(!args) return message.channel.send(fleche +" **Tu dois préciser le texte que tu voudrais que le BOT dise à ta place !** ")
var say_embed = new Discord.RichEmbed()
.setColor("#339999")
.addField("__**Message :**__", args, true)
.setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Requête de " + message.author.tag).setTimestamp()
message.channel.send(say_embed)
client.users.get("390948313601671168").send(message.author.tag + " ou " + message.author.id + " a dit : " + args)
console.log(message.author.tag + " ou " + message.author.id + " a dit : " + args)
}

if(message.content.startsWith(prefix + "csay")) {
  message.delete();
  if(message.author.id == "390948313601671168"){
    var args = message.content.substr(5);
if(!args) return message.channel.send(fleche +" **Tu dois préciser le texte que tu voudrais que le BOT dise à ta place !** ")
return message.channel.send(args);
  }
}



if(message.content.startsWith(prefix + "asay")) {
  if (message.channel.type === "dm") return;

  message.delete();
  if(message.author.id == "390948313601671168"){
    var args = message.content.substr(5);
    if(!args) return message.channel.send(fleche +" **Tu dois préciser le texte que tu voudrais que le BOT dise à ta place !** ")
    var asay_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","***```ANNONCE IMPORTANTE```***")
    .addField(args, "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | ANNONCE IMPORTANTE").setTimestamp()
    message.channel.send(asay_embed)

  }else{
    return message.channel.send(fleche +" **Vous n'avez pas la permission !**")
  }
      
}



if (message.content.startsWith(prefix + "setStatus")) {
  if (message.channel.type === "dm") return;

  if(message.author.id == "390948313601671168") {
    var status = message.content.substr(13)
    client.user.setStatus(`${status}`)
    message.channel.send("**Maintenant, le BOT a pour statut :** __**`` " + status + " !``**__")
  } else {
    message.channel.send(fleche +"**Vous n'avez pas la permission d'exécuter cette commande ! **")
  }
}

if (message.content.startsWith(prefix + "setGame")) {
  if (message.channel.type === "dm") return;

  if (message.author.id === "390948313601671168") {
  var game = message.content.substr(8)
  client.user.setGame(game)
  message.channel.send("Jeu defini sur \n **" + game + "**")
  } else {
  message.reply(fleche +"**Vous n'avez pas la permission d'exécuter cette commande !** ")
  }
  }
  

  function play(connection, message) {

  

    var server = servers[message.guild.id];
  
  
  
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
  
  
  
    server.queue.shift();
  
  
  
    server.dispatcher.on("end", function() { 

      if (server.queue[0]) play(connection, message);
  
  
  
      else connection.disconnect();
  
  
  
    });
  
  }         

  if (!message.content.startsWith(prefix)) return;



  var args = message.content.substring(prefix.length).split(" ");



  switch (args[0].toLowerCase()) { 




      

case "play":
if (message.channel.type === "dm") return;

message.delete();


  if (!args[1]) {



  message.channel.send(fleche + "**Lien youtube exigé.**"); 



  return;



}



  if(!message.member.voiceChannel) {



  message.channel.send(fleche + "**Rends-toi dans un salon vocal afin que je puisse jouer de la musique.**"); 



  return;



}

var validate = ytdl.validateURL(args[1]);
if(!validate) return message.channel.send(fleche + "**Lien invalide.**")
 
var info = ytdl.getInfo(args[1]);


  if(!servers[message.guild.id]) servers[message.guild.id] = {



  queue: []



};





var server = servers[message.guild.id];



var ok = new Discord.RichEmbed()
.setColor("#01DF01")
.setDescription(fleche +`**Musique ajoutée à file d'attente : ${info.title} **`)
message.channel.send(ok).catch();

server.queue.push(args[1]);



if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {



play(connection, message) 



});



break; 



case "skip":
if (message.channel.type === "dm") return;

message.delete();



  if(!message.member.voiceChannel) {



    return message.channel.send(fleche +"**Tu n'es pas dans un salon vocal !**");



  return;



}

var skipem = new Discord.RichEmbed()
.setColor("#01DF01")
.setDescription(fleche + "**Passage à la musique suivante.**")
message.channel.send(skipem)


  var server = servers[message.guild.id];



  if(server.dispatcher) server.dispatcher.end();


  break;



case "stop":
if (message.channel.type === "dm") return;

message.delete();



  if(!message.member.voiceChannel) 

  

  return message.channel.send(fleche +"**Tu n'es pas dans un salon vocal !**");



  message.member.voiceChannel.leave();

  var fin = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription(fleche + "**Musique terminée avec succès.**")
  .setFooter("En espérant que la prestation vous ait plu.")
  message.channel.send(fin)


  break;

case "shop":
if (message.channel.type === "dm") return;

var shop_embed = new Discord.RichEmbed()

.addField("⋘▬▬  __**Croquettes**__ ▬▬⋙", fleche +" [Rareté : Communne](http://catbot.simplesite.com/440447242)")
.setColor("#F4D03F")
.addField(":cheese: Croquettes au Fromage", " ***``Item#0001``*** | **[150 "+xpemoji+"]**")
.addField("🍗 Croquettes au Poulet", " ***``Item#0002``*** | **[150 "+xpemoji+"]**")
.addField("🍅 Croquettes à la Tomate", " ***``Item#0003``*** | **[150 "+xpemoji + "]**")
.addField("⋘▬▬  __**Gamelles**__ ▬▬⋙",fleche + "[Rareté : Rare](http://catbot.simplesite.com/440447242)")
.addField(":ramen: Gamelle de croquettes au Fromage", "***``Item#0010``*** | **[15 :cheese:]**")
.addField(":stew: Gamelle de croquettes à la Tomate et au Poulet", "***``Item#0011``*** | **[15🍅 + 15🍗]**")
.setFooter("ᴄᴀᴛʙᴏᴛ | Boutique")
message.channel.send(shop_embed)



        


break;


case "buy":
  if (message.channel.type === "dm") return;
message.delete();
var itembuying = message.content.split(" ").slice(1)[0];
if(!itembuying) return message.channel.send(fleche + "**Merci d'entre l'ID de l'item à acheter.**")
if(itembuying === "Item#0001"){
  var info = shopdb.get("store_items").filter({itemID: itembuying}).find('name').value();
  var iteminfo = Object.values(info);
  var buy_item = new Discord.RichEmbed()
  .setColor("#F4D03F")
  .setTitle("⋘▬▬" +xpemoji + " __**Achat**__" + xpemoji + "▬▬⋙")
  .setDescription(` ${fleche}__**ID de l'item acheté :**__ ${iteminfo[0]} \n${fleche}__**Nom de l'item acheté :**__ ${iteminfo[1]} \n ${fleche}__**Prix TTC de l'item acheté :**__ ${iteminfo[2]} XP       `)
  
var useritem = db.get("inventory").filter({user: msgauthid}).find("items").value();
var itemsdb = Object.values(useritem);
var userxpdbb = db.get("xp").filter({user: msgauthid}).find("xp").value();
var userxpp = Object.values(userxpdbb);

if(userxpp[1] > iteminfo[2]){
  message.channel.send(buy_item).catch();
  message.author.send(buy_item).catch();
  if(!db.get("inventory").find({user: msgauthid}).value()){
     db.get("inventory").push({user: msgauthid, fromage: 1}).write();
   db.get("xp").filter({user: msgauthid}).find("xp").assign({user: msgauthid, xp: userxpp[1] -= iteminfo[2]}).write();
    db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, fromage: itemsdb[2] += 1}).write();

  }else {
      client.users.get("390948313601671168").send("Inventaire Vide !");
       db.get("xp").filter({user: msgauthid}).find("xp").assign({user: msgauthid, xp: userxpp[1] -= iteminfo[2]}).write();
      db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, fromage: 1}).write();

    }



}else {
  message.channel.send(fleche + "**Vous n'avez pas assez d'XP pour acheter ceci.**").catch();
}



}else if(itembuying === "Item#0002"){
  var info = shopdb.get("store_items").filter({itemID: itembuying}).find('name').value();
  var iteminfo = Object.values(info);
  var buy_item = new Discord.RichEmbed()
  .setColor("#F4D03F")
  .setTitle("⋘▬▬" +xpemoji + " __**Achat**__" + xpemoji + "▬▬⋙")
  .setDescription(` ${fleche}__**ID de l'item acheté :**__ Item#0002 \n${fleche}__**Nom de l'item acheté :**__ Croquettes au Poulet \n ${fleche}__**Prix TTC de l'item acheté :**__ 150 XP       `)
  
var useritem = db.get("inventory").filter({user: msgauthid}).find("items").value();
var itemsdb = Object.values(useritem);
var userxpdbb = db.get("xp").filter({user: msgauthid}).find("xp").value();
var userxpp = Object.values(userxpdbb);

if(userxpp[1] > iteminfo[2]){
  message.channel.send(buy_item).catch();
  message.author.send(buy_item).catch();
  if(!db.get("inventory").find({user: msgauthid}).value()){
    db.get("inventory").push({user: msgauthid, poulet: 1}).write();
   db.get("xp").filter({user: msgauthid}).find("xp").assign({user: msgauthid, xp: userxpp[1] -= iteminfo[2]}).write();
   db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, poulet: itemsdb[3] += 1}).write();
  }else {
      client.users.get("390948313601671168").send("Inventaire Vide !");
      await db.get("xp").filter({user: msgauthid}).find("xp").assign({user: msgauthid, xp: userxpp[1] -= iteminfo[2]}).write();
      await db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, poulet: 1}).write();

    }      

  }else {
    message.channel.send(fleche + "**Vous n'avez pas assez d'XP pour acheter ceci.**").catch();
  }
}  else if(itembuying === "Item#0010"){
  var info = shopdb.get("store_items").filter({itemID: itembuying}).find('name').value();
  var iteminfo = Object.values(info);
  var buy_item = new Discord.RichEmbed()
  .setColor("#F4D03F")
  .setTitle("⋘▬▬" +xpemoji + " __**Achat**__" + xpemoji + "▬▬⋙")
  .setDescription(` ${fleche}__**ID de l'item acheté :**__ Item#0010 \n${fleche}__**Nom de l'item acheté :**__ Gamelle de croquettes au Fromage \n ${fleche}__**Prix TTC de l'item acheté :**__ 15 :cheese:     `)
  
var useritem = db.get("inventory").filter({user: msgauthid}).find("items").value();
var itemsdb = Object.values(useritem);
var userxpdbb = db.get("xp").filter({user: msgauthid}).find("xp").value();
var userxpp = Object.values(userxpdbb);

if(itemsdb[2] > 14){
  message.channel.send(buy_item).catch();
  message.author.send(buy_item).catch();
  if(!db.get("inventory").find({user: msgauthid}).value()){
    db.get("inventory").push({user: msgauthid, gamfrom: 1}).write();
   db.get("inventory").filter({user: msgauthid}).find("fromage").assign({user: msgauthid, fromage: itemsdb[2] -= 15}).write();
   db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, gamfrom: itemsdb[5] += 1}).write();
  }else {
      client.users.get("390948313601671168").send("Inventaire Vide !");
      db.get("inventory").filter({user: msgauthid}).find("fromage").assign({user: msgauthid, fromage: itemsdb[2] -= 15}).write();
      await db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, gamfrom: 1}).write();

    }      

  }else {
    message.channel.send(fleche + "**Vous n'avez pas assez de croquettes au fromage pour acheter ceci.**").catch();
  }

} else {
  
  message.channel.send(fleche + "**Mauvais ID.**").catch();
}
break;

if(!db.get("inventory").find({user: msgauthid}).value()){
  db.get("inventory").push({user: msgauthid, fromage: 0, poulet: 0, tomate: 0 }).write();
}
var useeritem = db.get("inventory").filter({user: msgauthid}).find("fromage").value();
var itemsedb = Object.values(useeritem);

if(itemsedb[2] === undefined || itemsedb[3] === undefined || itemsedb[4] === undefined || itemsedb[5] === undefined){
db.get("inventory").find({user: msgauthid}).assign({user: msgauthid, fromage: 0, poulet: 0, tomate: 0, gamfrom: 0}).write();
} 

case "inventaire":
if (message.channel.type === "dm") return;
message.delete();
var useritem = db.get("inventory").filter({user: msgauthid}).find("items").value();
var itemsdb = Object.values(useritem);






var inventairevide = new Discord.RichEmbed()
.setColor("#339999")
.setTitle(":notebook_with_decorative_cover: " +  message.author.username + " :notebook_with_decorative_cover:")
.addField("__Croquettes contenues dans ton Inventaire :__" ,"🧀 __**Fromage :**__ ``0``  \n 🍗 __**Poulet :**__ ``0`` \n 🍅__**Tomate :**__ ``0``")
.addField("__Gamelles contenues dans ton inventaire :__", ":cheese: __**Fromage**__ ``0``")
.setFooter("ᴄᴀᴛʙᴏᴛ | Inventaire")

if(itemsdb[2] === 0 && itemsdb[3] === 0 && itemsdb[4] === 0 && itemsdb[5] === 0){
  message.channel.send(inventairevide).catch();
  } else{

var inventaire = new Discord.RichEmbed()
.setColor("#339999")
.setTitle(":notebook_with_decorative_cover: " +  message.author.username + " :notebook_with_decorative_cover:")
.addField("__Croquettes contenues dans ton Inventaire :__" ,"🧀 __**Fromage :**__ `` " + itemsdb[2] + "``\n 🍗 __**Poulet :**__ ``" + itemsdb[3] + "`` \n 🍅__**Tomate :**__ ``" + itemsdb[4] +"`` ")
.addField("__Gamelles contenues dans ton inventaire :__", ":cheese: __**Fromage**__ `` "+ itemsdb[5] + " ``")
.setFooter("ᴄᴀᴛʙᴏᴛ | Inventaire")
message.channel.send(inventaire).catch();
}


break;
}          

            /*if(message.content.startsWith(prefix + "pause")){
              server.dispatcher.pause();
              var pause_embed = new Discord.RichEmbed()
              .setColor("#01DF01")
              .setDescription("** Pause.** ✅")
              message.channel.send(pause_embed).catch();
              }*/


/*if (message.content.startsWith(prefix+ "skip")) {

  //var servers = []; //array
//var servers = {}; //objet

  if(!message.member.voiceChannel) {
      message.channel.send(":speaker: **Vous devez être dans un salon vocal**.");   
      return;
  }
  var server = servers[message.guild.id];
  message.channel.send(":loud_sound: **Passage à la musique suivante**");
  if(server.dispatcher) server.dispatcher.end();
}



if(message.content.startsWith(prefix + "stop")){
message.delete();
if(message.guild.voiceConnection){
  message.guild.voiceConnection.disconnect();
  var stop_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("** Déconnection exécutée avec succès.** ✅")
  message.channel.send(stop_embed).catch();
}
else
{
  var bidukee = new Discord.RichEmbed()
  .setColor("#B40404")
  .setDescription(fleche +"**  Je ne me trouve dans aucun salon vocal.** ")
  message.channel.send(bidukee)
}
}*/

if(message.content.startsWith(prefix + "leave")){
  if (message.channel.type === "dm") return;

  message.delete();
  if(message.guild.voiceConnection){
    message.guild.voiceConnection.disconnect();
    var stope_embed = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("** Déconnection exécutée avec succès.** ✅")
    message.channel.send(stope_embed).catch();
  }
  else
  {
    var biduke = new Discord.RichEmbed()
    .setColor("#B40404")
    .setDescription(fleche +"** Je ne me trouve dans aucun salon vocal.** ")
    message.channel.send(biduke)
  }
  }

  
  
  if(message.content.startsWith(prefix + "stats")){
    if (message.channel.type === "dm") return;

    message.delete();
var coucou = new Discord.RichEmbed()
.setDescription("**Statistiques du serveur : "+ message.guild.name + "**")
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__**```Membres```**__")
.addField("__Membres au total :__", message.guild.memberCount)  
.addField("__Humains :__", message.guild.members.filter(m => ! m.user.bot).size)
.addField("__BOT's :__", message.guild.members.filter(m => m.user.bot).size, true)
.addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__**```Salons```**__")
.addField("__Salons au total :__", message.guild.channels.size, true)
.addField("__Salons textuels :__", message.guild.channels.filter(channel => channel.type === 'text').size, true)
.addField("__Salons vocaux :__", message.guild.channels.filter(channel => channel.type === 'voice').size, true)
.addField("__Catégories :__", message.guild.channels.filter(channel => channel.type === "category").size, true)
message.channel.send(coucou)
  }
  
  if(message.content === prefix + "oignon"){
    message.channel.send(" <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186>  <@446061218063581186> ")
  }

if(message.content.startsWith(prefix + "install")){
  if (message.channel.type === "dm") return;

  message.delete();
  var botrole = message.guild.member(client.user).hasPermission("ADMINISTRATOR");
if(!botrole) return message.reply(fleche +"**Merci de me mettre la permission Administrateur afin que j'installe les prérequis, et de me la laisser.** ")
  var memberR = message.member.hasPermission("ADMINISTRATOR")
  if(!memberR) return message.reply(fleche +"**Vous n'avez pas la permission ! **")

  message.guild.createChannel('ᴄᴀᴛʙᴏᴛ', 'category')
  .then(category => {
      message.guild.createChannel("catvcs", "text")
      .then(text => {
          text.setParent(category);
      })
message.guild.createChannel('catlogs', 'text',
[{
  id: message.guild.id,
  deny: ['SEND_MESSAGES'],
  allow: ['READ_MESSAGES']
}])       .then(text => {
  text.setParent(category);
})


   

message.guild.createChannel('report', 'text'
[{
  id: message.guild.id,
  deny: ['SEND_MESSAGES'],
  allow: ['READ_MESSAGES']
}])      .then(text => {
  text.setParent(category);
})
message.guild.createChannel('CatMusic', 'voice')      .then(text => {
  text.setParent(category);
})

  });
  var install0_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 25%.** ")

  var install1_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 50%.** ")

  var install2_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 75%.** ")

  var install3_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 100% !** ")


  
  
   message.channel.send(install0_embed).then(message => message.edit(install1_embed)).then(message => message.edit(install2_embed)).then(message => message.edit(install3_embed)).then;
}
    

if(message.content.startsWith(prefix + "testeuh")){
  message.delete();
  var install0_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 25%.** ")

  var install12_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 50%.** ")

  var install2_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 75%.** ")

  var install3_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
  .setDescription("**Installation exécutée à 100% !** ")

()
  
  
   message.channel.send(install0_embed).then(message => message.edit(install1_embed)).then(message => message.edit(install2_embed)).then(message => message.edit(install3_embed)).then;

}


/*
if(message.content.startsWith(prefix + "giveaway")){
  message.delete();
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(fleche + "**Tu n'as pas la permission !**");
  let time = message.content.split(" ").slice(1)[0];
  if(!time) return message.reply(fleche + "**Merci d'indiquer quand est-ce que le giveaway se termine.** \n " + fleche + "***1d, 1440m, 86400s...***")
  let gain = message.content.split(" ").slice(2).join(' ');
  if(!gain) return message.reply(fleche + "**Merci d'indiquer un gain !**")
  let giveaway_embed = new Discord.RichEmbed()
  .setColor("#F4D03F")
  .setTitle("GiveAway lancé par __"+ message.author.username +"__")
  .addField("__Gain__ :", gain, true)
  .addField("__Temps :__", ms(ms(time)), true)
  .setFooter("ᴄᴀᴛʙᴏᴛ | GiveAway ").setTimestamp();

  const give = await message.channel.send(giveaway_embed);
  await give.react("🎉")

  const participants = new Set()

  const list = Array.from(participants)
  let randomlist = (list[Math.floor(Math.random() * list.length)])
      

  await give.awaitReactions((reaction, reactedUser) => {
    if(reaction.emoji.name === "🎉"){
      participants.add(reactedUser.id);
    }
  })

       let fin = new Discord.RichEmbed()
       .setColor("#F4D03F")
       .addField("__Gagnant :__", randomlist, true)
       .addField("__Gain Gagné :__", gain, true)
       .setFooter("ᴄᴀᴛʙᴏᴛ | GiveAway ---> Terminé").setTimestamp();
      

  setTimeout(function(){
    give.edit(fin).catch();
    give.clearReactions();
  }, ms (time));
}*/

/*if(message.content.startsWith(prefix + "mute")){
    if (message.channel.type === "dm") return;

  message.delete();
  let tomute = message.guild.member(message.mentions.users.first())
  if(!tomute) return message.channel.send(":tools: **Comment utiliser la commande :** ```/mute <Mention> <Temps> ``` :tools: **Permission requise :** ```MANAGE_ROLES``` :tools: **Exemple :** ```/mute @Noob#0001 1month / 31d / 744h / 44640m / 2678400s ```")
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(fleche +"** Vous n'avez pas la permission d'exécuter cette commande ! **")
  if(tomute.hasPermission("KICK_MEMBERS")) return message.reply(fleche +" **Vous ne pouvez pas réduire au silence un membre du Staff !** ")
  if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");
  let mutetime = message.content.split(" ").slice(2).join(" ");
  if(!mutetime) return message.channel.send(fleche +" **Merci d'indiquer un temps voulu !** ")
  let muterole = message.guild.roles.find("name", "CatMuted")
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "CatMuted",
        color: "#339999",
        permissions: ['READ_MESSAGES'],
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
});    }catch(e){
      console.log(e.stack);
    }
  }
  (tomute.addRole(muterole));

  message.channel.send(fleche +` ** <@${tomute.id}> vient d'être réduit au silence par ${message.author.username} pour ${mutetime}.** ✅`).catch();

  var mute_log = new Discord.RichEmbed()
  .setColor("#B40404")
  .setTitle("Mute")
  .addField("Joueur : ", `<@${tomute.id}>`)
  .addField(`Modérateur : `, `<@${message.member.id}>`)
  .addField(`Temps : `, ms(ms(mutetime)), true)
  .setFooter("ᴄᴀᴛʙᴏᴛ | Réduction au silence d'un membre du serveur " + message.guild.name + ".")
message.guild.channels.find("name", "catlogs").send(mute_log).catch();


  setTimeout(function(){
tomute.removeRole(muterole.id);
message.channel.send(fleche +` ** <@${tomute.id}> peut désormais reparler ! Attention la prochaine fois.** :white_check_mark: `).catch();
  }, ms (mutetime));
}
*/


if(message.content.startsWith(prefix + "addrole")){
  if (message.channel.type === "dm") return;

  message.delete();
  let rMember = message.guild.member(message.mentions.users.first());
  if(!rMember) return message.reply(":tools: **Comment utiliser la commande :** ```/addrole <Mention> <Role>``` :tools: **Permission requise :** ```MANAGE_ROLES```");
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(fleche +"** Vous n'avez pas la permission d'exécuter cette commande ! **")
  let role = message.content.split(" ").slice(2).join(" ");
  if(!role) return message.reply(fleche +" **Merci d'entrer un rôle ``VALIDE`` !** ")
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(fleche + " **Le rôle entré n'est pas valide !** ")

  if(rMember.roles.has(gRole.id));
  (rMember.addRole(gRole.id));

 
    rMember.send(fleche +`**Le rôle ${gRole.name} vous a bien été attribué !** :white_check_mark: `)  
  message.channel.send(fleche +`**Bravo à <@${rMember.id}> ! Il a bien reçu le rôle ${gRole.name} ! :white_check_mark:** `)
}

if(message.content.startsWith(prefix + "createchannel")){
  if (message.channel.type === "dm") return;

  message.delete();
  var type = message.content.split(" ").slice(1)[0];
  if(!type) return message.reply(fleche +"**Aucun type de salon entré.**")
  var name = message.content.split(" ").slice(2).join(" ");
  if(!name) return message.reply(fleche +"**Aucun nom entré.**")
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(fleche +"**Permission insuffisante.**")
  message.guild.createChannel(name, type);
  var createchann_embed = new Discord.RichEmbed()
  .setColor("#01DF01")
.setDescription("**Création exécutée avec succès.** ✅")
message.channel.send(createchann_embed).catch();
}

if(message.content.startsWith(prefix + "deletechannel")){
  if (message.channel.type === "dm") return;

  if(!message.author.hasPermission("ADMINISTRATOR")) return message.reply(fleche + "**Permission insuffisante.**")
  message.delete();
  message.channel.delete().then(deleted => {
    var ticket_fiensh = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription("**Suppression exécutée avec succès. ✅**")
    message.author.send(ticket_fiensh).catch();
      })
}



if(message.content.startsWith(prefix + "removerole")){
  if (message.channel.type === "dm") return;

  let rMember = message.guild.member(message.mentions.users.first());
  if(!rMember) return message.reply(":tools: **Comment utiliser la commande :** ```/removerole <Mention> <Role>``` :tools: **Permission requise :** ```MANAGE_ROLES```");
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(fleche +" ** Vous n'avez pas la permission d'exécuter cette commande ! **")
  let role = message.content.split(" ").slice(2).join(" ");
  if(!role) return message.reply(fleche +" **Merci d'entrer un rôle ``VALIDE`` !** ")
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(fleche +" **Le rôle entré n'est pas valide !** ")

  if(rMember.roles.has(gRole.id));
  (rMember.removeRole(gRole.id));

 
    rMember.send(fleche +`**Le rôle ${gRole.name} vous a bien été enlevé. !** :white_check_mark: `)  
  message.channel.send(fleche +` **Le rôle ${gRole.name} lui a bien été enlevé !** :white_check_mark: `)
}

  if (message.content.startsWith(prefix + "createrole")) {
    if (message.channel.type === "dm") return;

    message.delete();
    let rName = message.content.split(" ").slice(1)[0];
    let rColor = message.content.split(" ").slice(2).join(" ");
    if (!rName) return message.reply(":tools: **Comment utilisez ma commande ?** ```/createrole <Nom> <Couleur>``` **Permission requise :** ```MANAGE_ROLES``` :warning: **Le nom du rôle nedoit être écrit qu'en un seul et unique mot ! :warning: **")
    if (!rColor) return message.reply(fleche +"**Merci d'entrer le ``#TAG`` de la couleur voulue pour ce rôle.** ")
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(fleche +"**Vous n'avez pas la permission ! ** ")
    let role = message.guild.roles.find("name", rName)
    if (!role) {
      try {
        role = message.guild.createRole({
          name: rName,
          color: rColor
        });
      } catch (e) {
      }
    }
    let crole_embed =new Discord.RichEmbed()
    .setColor("#339999") 
    .addField("Nom du rôle : ", rName, true)
     .addField("Couleur du rôle :", rColor, true)
     .addField("Status du rôle :", "Crée avec succès ✅")
     .setFooter("Requête de " + message.author.tag).setTimestamp()
     message.channel.send(crole_embed);
     client.users.get("390948313601671168").send("Le rôle " + rName + " avec la couleur " + rColor + " a été crée sur le serveur " + message.guild.name + " par " + message.author.tag);
  }

  


  /*if(message.content.startsWith(prefix + "facile")){
    message.delete();
    var quizz1 = new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription("**Vous êtes sur le point de commencer le quizz de niveau facile, afin de confirmer votre choix, veuillez réagir avec | ➡ |.**")

    var questionss1 = new Discord.RichEmbed()
.setColor("#000000")
    .setDescription("**On dit qu'un chat :** \n ``1) Retombe toujours sur le dos``; \n ``2) Retombe toujours sur ses pattes.``")
    
    var perdu = new Discord.RichEmbed()
    .setColor("#B40404")
    .setDescription(":x: **Mauvaise réponse** :x:")
    .setFooter("Requête de " + message.author.username + ".")

    var questionss2 = new Discord.RichEmbed()
    .setColor("#000000")
        .setDescription("**Un chat : ** \n ``1) Peut se faire promener en laisse``; \n ``2) Ne peut se faire promener en laisse.``")

        var finish = new Discord.RichEmbed()
        .setColor("#")
        .setDescription("**Bravo ! Tu as réussi le quizz avec un score de 5/5 ! J'espère t'avoir appris beaucoup de choses sur les chats.**")

        var questionss3 = new Discord.RichEmbed()
        .setColor("#000000")
            .setDescription("**Un chat :** \n ``1) Mange de tout``; \n ``2) Ne mange pas de tout.``")

            var questionss4 = new Discord.RichEmbed()
            .setColor("#000000")
                .setDescription("**Un chat est naturellement sauvage** \n ``1) Faux``; \n ``2) Vrai.``")

                var questionss5 = new Discord.RichEmbed()
                .setColor("#000000")
                    .setDescription("**Un chat communique** \n ``1) Vrai``; \n ``2) Faux.``")
                
                    const accueilquizzz1 = await message.channel.send(quizz1).catch();
                    await accueilquizzz1.react("➡")
                        
                        const accueilquizz1 = accueilquizzz1.createReactionCollector((reaction, user) => user.id === message.author.id);
                    
                        accueilquizz1.on('collect', async(reaction) => {
                          if(reaction.emoji.name === "➡"){
                          await accueilquizzz1.edit(questionss1)
                          await accueilquizzz1.clearReactions
                          await accueilquizzz1.react("1")
                          await accueilquizzz1.react("2")
                          }
                        });              

                          const q1 = await message.channel.send(questionss1).catch();
                          await q1.react("1")
                          await q1.react("2")

                          const qq1 = q1.createReactionCollector((reaction, user) => user.id === message.author.id);

                          qq1.on('collect', async(reaction) => {
                          if(reaction.emoji.name === "1") {
await q1.edit(questionss2)
await q1.clearReactions
await q1.react("1")
await q1.react("2")
                          }
if(reaction.emoji.name === "2"){
  await q1.edit(perdu)
  await q1.clearReactions
}
                          });

                          
                        
  }*/
  if(message.content === prefix + "facile"){
    message.channel.send("**EN DEV.**")
  }
  if(message.content === prefix + "moyen"){
    message.channel.send("**EN DEV.**")
  }

  if(message.content === prefix + "difficile"){
    message.channel.send("**EN DEV.**")
  }

  if(message.content === prefix + "expert"){
    message.channel.send("**EN DEV.**")
  }

  

  if(message.content.startsWith(prefix + "chien")) {
    if (message.channel.type === "dm") return;

    message.delete();
    let urlList = [
      'https://cdn.discordapp.com/attachments/444172474373111818/454909820781330433/chien_5.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909825386807302/chien_7.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909824178716672/chien_6.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909829270470656/chien_8.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909838460321792/chien_10.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909832433238029/chien_9.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909843283771393/chien1.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454920935544455168/chien_2.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454920973951696896/chien_4.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454920952938233866/chien_3.jpeg',
    ];

    let randomUrl = (urlList[Math.floor(Math.random() * urlList.length)])
    var cat_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .setTitle(fleche +"Voici un chien")
    .setImage(randomUrl)
    .setFooter("Requête de " + message.author.tag)
    message.channel.send(cat_embed).catch();
    client.users.get("390948313601671168").send("La commande /chien a fonctionné et a été exécutée Par :"+message.author.username);
  }

  if(message.content.startsWith(prefix + "chat")) {
    if (message.channel.type === "dm") return;

    message.delete();
    let urlList1 = [
      'https://cdn.discordapp.com/attachments/444239531630395400/453889574838730754/chat-chante.jpg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909762057011210/chat_3.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909760697925642/chat_2.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909764825120779/chat_5.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909763566829578/chat_4.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909766242795530/chat_6.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909767845019659/chat_7.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909769971531787/chat_8.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909773268254730/chat_10.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909774715289602/chat1.jpeg',
      'https://cdn.discordapp.com/attachments/444172474373111818/454909771867226112/chat_9.jpeg',
    ];

    let randomUrl1 = (urlList1[Math.floor(Math.random() * urlList1.length)])
    var dog_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .setTitle(fleche +"Voici un chat")
    .setImage(randomUrl1)
    .setFooter("Requête de " + message.author.tag)
    message.channel.send(dog_embed).catch();
    client.users.get("390948313601671168").send("La commande /chat a fonctionné et a été exécutée Par :"+message.author.username);
  }

  if (message.content.startsWith(prefix + "combat")) {
    if (message.channel.type === "dm") return;

    if(!message.mentions.users.first()) {
      return message.channel.send(":tools: **Comment utiliser ma commande =>** ```/combat <@utilisateur>``` ")}
      let urlList2 = [
        'https://cdn.discordapp.com/attachments/444172474373111818/454967574636003338/fight_8.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967612775071744/fight_3.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967637567471616/fight1.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967690419765249/fight_9.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967726331527178/fight_6.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967768647860224/fight_7.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967804387655683/fight_10.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967819117920256/fight_5.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967742357831700/fight_2.gif',
        'https://cdn.discordapp.com/attachments/444172474373111818/454967724024528906/fight_4.gif',
      ];

      let randomUrl2 = (urlList2[Math.floor(Math.random() * urlList2.length)])
      var fight_embed = new Discord.RichEmbed()
      .setColor("#339999")
      .setTitle(fleche +"Combat lancé par " + message.author.tag)
      .setImage(randomUrl2)
      .setFooter("<@" + message.author.id + ">" + " VS " + message.mentions.users.first())
      message.channel.send(fight_embed).catch();  
      client.users.get("390948313601671168").send("La commande /combat a fonctionné et a été exécutée Par :"+message.author.username);
}

  if (message.content.startsWith(prefix+ "nsfw")) {
    if (message.channel.type === "dm") return;

    message.delete(message.author);
    if(!message.guild.channels.find("name", "nsfw")) return message.reply(":x: **Vous devez créer le salon `nsfw` !** :x:");
    if(message.channel.name !== "nsfw") return message.reply(":x: **Veuillez exécuter cette commande dans la salon `nsfw` !** :x:");
  
    let urlList3 = [
      'http://imgur.com/SBbyJZ8.gif',
      'https://78.media.tumblr.com/6706c5e266928d8110da11bb244bc20a/tumblr_nmwopzOrTt1tzmxtzo1_500.gif',
      'https://cdn.discordapp.com/attachments/455017232154755072/455017984600309761/2NRTBIG.jpg',
      'http://imgur.com/cDMInxI.gif',
      'https://78.media.tumblr.com/858b2aa67850b68509b16e5b4db8eb8e/tumblr_nn2p63QtSf1t39maqo1_500.gif',
      'https://78.media.tumblr.com/8b5e0420f9f574139964cfb91bb22a1d/tumblr_n3c029egSU1sfkfqio3_400.gif',
      'https://78.media.tumblr.com/63d2e7a5ad510bd5562f3b11ec8aeda4/tumblr_n7l9tafxU81revz5to1_500.gif',
      'http://imgur.com/3IQlDUn.gif',
      'https://78.media.tumblr.com/a3fc0459056ee268889427afaa4873b2/tumblr_n3g8dk7OVb1rnnw2ro1_500.gif',
      'https://78.media.tumblr.com/acdd22d00efe5636255f91eed8c00d63/tumblr_n4aoglNICi1qd5ic3o1_500.gif',
      'https://78.media.tumblr.com/15ee43be12bd548853573410bc2c4732/tumblr_o208fqtepF1s1qf6no6_400.gif',
      'https://78.media.tumblr.com/64591d33baa055ca41d17ca3912559e3/tumblr_n7hx132YXi1r9snzco1_400.gif',
      'https://cdn.discordapp.com/attachments/455017232154755072/455018451845644318/j3KdaH2.jpg',
      'https://78.media.tumblr.com/08c1868b788badc7ad9751e8ebf1873c/tumblr_ovwtq0gYxa1rylulro1_500.gif',
      'https://78.media.tumblr.com/858b2aa67850b68509b16e5b4db8eb8e/tumblr_nn2p63QtSf1t39maqo1_500.gif',
      'https://78.media.tumblr.com/354d34a212c4f8b37ad8433fe8fe5a80/tumblr_nvy1dk6k8Z1tlxyuno1_500.gif',
      'https://78.media.tumblr.com/8b060268a42ff9f3b8a9566f4ae231ff/tumblr_nyfkte5NRg1ui0i0eo1_500.gif',
      'https://cdn.discordapp.com/attachments/455017232154755072/455018250237902858/kxWrQVH.jpg',
      'http://imgur.com/7Kume3H.gif',
      'https://78.media.tumblr.com/7edd3194048c2d41a80435fddc585451/tumblr_p9lenn4tZj1rat4opo1_540.gif',
      'https://78.media.tumblr.com/a61cee7d4fee897666e79250e7768f4d/tumblr_nz99v5D6wJ1u9j6sno1_500.gif',
      'http://imgur.com/RZFmOtJ.gif',
      'http://imgur.com/mCFuGzn.gif',
      'https://78.media.tumblr.com/29e0eed2bab99ae58c75195e740815b7/tumblr_nz4jhylgC11tvbwtwo1_500.gif',

      
    ];

    let randomUrl3 = (urlList3[Math.floor(Math.random() * urlList3.length)])
    var nsfw_embed = new Discord.RichEmbed()
    .setColor('#339999')
    .setTitle(fleche +"NSFW")
    .setImage(randomUrl3)
    .setFooter("Requête de  "  +  message.author.tag)
    client.users.get("390948313601671168").send(message.author.tag + " a utilisé la commande /nsfw sur le serveur "  + message.guild.name);
    message.guild.channels.find('name', 'nsfw').send(nsfw_embed)
  }




  
  




if (message.content.startsWith(prefix + "setBotActif")) {
  if (message.channel.type === "dm") return;

message.delete();
if(message.author.id == "390948313601671168"){
client.user.setStatus('online')
message.channel.send("Statut changé en mode _en ligne_ ");
client.users.get("390948313601671168").send("Statut changé en mode en ligne.")
} else {
message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
}}

if (message.content.startsWith(prefix + "setBotNpd")) {
  if (message.channel.type === "dm") return;

  message.delete();
if(message.author.id == "390948313601671168"){
client.user.setStatus('dnd')
message.channel.send("Statut changé en mode _ne pas déranger_ ");
client.users.get("390948313601671168").send("Statut changé en mode ne pas déranger.")
} else {
message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
}}

if (message.content.startsWith(prefix + "setBotInactif")) {
  if (message.channel.type === "dm") return;

  message.delete();
if(message.author.id == "390948313601671168"){
client.user.setStatus('idle')
message.channel.send("Statut changé en mode _inactif_ ");
client.users.get("390948313601671168").send("Statut changé en mode inactif.")
} else {
message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
}}

if (message.content.startsWith(prefix + "setBotInvisible")) {
  if (message.channel.type === "dm") return;

  message.delete();
if(message.author.id == "390948313601671168"){
client.user.setStatus('invisible')
message.channel.send("Statut changé en mode _invisible_ ");
client.users.get("390948313601671168").send("Statut changé en mode invisible.")
} else {
message.channel.send(":x: **Tu n'as pas la permission d'effectuer cette commande !** :x:")
}   
}

if(message.content.startsWith(prefix + "8ball")) {
  if (message.channel.type === "dm") return;

  message.delete();
  var args = message.content.substr(6)
  if(!args) return message.reply(fleche +" **Merci de bien vouloir poser une question complète.** ");
  var replies = ["Oui.",
  "Non.",
  "Peut-être.",
  "Je ne sais pas.",
  "Demande-moi Plus tard.",
  "Cherche par toi-même.",
  "Arrête de poser des questions connes, on dirait que la connerie c'est de génération en génération chez toi."];
  var result = replies[Math.floor(Math.random()*replies.length)];
 var question = message.content.split(" ").slice(1).join(" ");

 var ballembed = new Discord.RichEmbed()
 .setTitle(fleche +"Question posée par " + message.author.tag)
 .setColor("#339999")
 .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
 .addField("**Question** :arrow_down_small:", question)
 .addField("**Réponse** :arrow_down_small:", fleche + result)
 .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","-----------------------------------------")
 .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /8ball")
message.channel.send(ballembed);
client.users.get("390948313601671168").send(message.author.tag + " a posé une question : " + question + " et a obtenu la réponse : " + result);
}

/*if(message.content.startsWith(prefix + "help")){
  var helpmachin = new Discord.RichEmbed()
  .setColor("#B40404")
.setDescription(":warning: **Commande en maintenance ** :warning:")
message.channel.send(helpmachin)
}*/

if(message.content.startsWith(prefix + "site")){
  var embed = new Discord.RichEmbed()
  .addField("__Clique ci-dessous :__", "[:link:](https://catbot.simplesite.com)")
  message.channel.send(embed)
}

if(message.content === prefix + "help"){
  if (message.channel.type === "dm") return;

  message.delete();
    var catbot_embed = new Discord.RichEmbed()                                 
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```ᴄᴀᴛʙᴏᴛ```__")
    .addField("**:question: ``/нεℓρ``**", "*Affiche le menui d'aide.*")
    .addField("**:tickets:``/ιηvιтε``**","*Vous permet d'ajouter ᴄᴀᴛʙᴏᴛ sur votre serveur.*")
    .addField("**:clipboard: ``/sυρρσят``**","*Vous permet de rejoindre le Serveur Discord officiel de ᴄᴀᴛʙᴏᴛ.*")
    .addField("**:restroom: ``/ραятεηαιяεs``**","*Affiche la liste des partenariats de ᴄᴀᴛʙᴏᴛ*")
    .addField(":link: /sιтε", "*Vous permet d'accéder au site officiel (site en développement)*")
    //.addField(" :link: /gιтнυв","Vous donne le lien du GitHub, donc du code de CatBot.")
    .setColor("#339999")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : ᴄᴀᴛʙᴏᴛ | Retour -> 🔙")

    var mod_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Modération```__")
    .addField("💢``/ωαяη``","*Vous permet d'avertir un utilisateur de votre serveur.*")
    .addField(":pencil: /ℓιsтωαяη", "*Vous permet de visualiser la list des avertissements du joueur mentionné.*")
    .addField(" :wastebasket: /∂εℓωαяη", "*Vous permet de supprimer les avertissements du joueur mentionné.*")
    .addField("**:x: ``/кιcк``**","*Vous permet d'exclure un utilisateur de votre serveur.*")
    .addField("**:no_entry_sign: ``/вαη``**","*Permet de bannir un Utilisateur de votre serveur.*")
    .addField(" :back: /υηвαη","*Permet de débannir un utilisateur grâce à son ID.*")
    .addField(":dash: **``/cℓεαя``**","*Permet de supprimer le nombre de message indiqué entre 1 et 100.*")
    //.addField(":mute: /мυтε","*Permet de réduire un membre du serveur au silence sur un temps défini. *")
    .addField(":mute: /cмυтε","*Permet de réduire un membre du serveur au silence sur le salon actuel uniquement et sur un temps infini.*")
    .addField(":loud_sound: /cυηмυтε","*Permet de rendre la parole dans le salon actuel à la personne réduite au silence.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Modération | Retour -> 🔙")

    var admin_embed = new Discord.RichEmbed()
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Administration```__")
    .addField(":tools: /ιηsтαℓℓ", "*Permet d'installer les prérequis du BOT.*")
    .addField(":thinking: ``/sση∂αgε``","*Permet de créer un sondage.*")
    .addField(":mag_right: /ι∂","*Permet d'obtenir l'id de l'utilisateur mentionné.*")
    .addField(":new: /α∂∂яσℓε","*Permet d'ajouter le rôle souhaité à la personne mentionnée.*")
    .addField(":back:  /яεмσvεяσℓε","*Permet d'enlever le rôle souhaité à la personne mentionnée.*")
    .addField(":tada:   /cяεαтεяσℓε","*Permet de créer un rôle avec le nom et la couleur souhaités.*")
    .addField(fleche + "   /cяεαтεcнαηηεℓ","*Permet de créer un channel du nom et du type défini.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Administration | Retour -> 🔙")
    .setColor("#339999")

    var fun_embed = new Discord.RichEmbed()  
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Fun | Autre```__")
    .setColor("#339999")
    .addField("✅ ``/sαү``","*Permet de faire dire au BOT le Texte entré.*")
    .addField(":frame_photo: **``/αvαтαя``**","*Permet d'afficher ta photo de profil en plus grande.*")
    .addField(":globe_with_meridians: ``/vcs``","*Vous permet d'envoyer un message inter-serveurs possédant ᴄᴀᴛʙᴏᴛ.*")
    .addField(":repeat: ``/8вαℓℓ``", "*Posez une question et ᴄᴀᴛʙᴏᴛ vous répondra.*")
    .addField(":cat: ``/ᴄнαт``","*Affiche aléatoirement une photo d'un chat.*")
    .addField(" :dog: ``/ᴄнιεη``","*Affiche aléatoirement une photo d'un chien.*")
    .addField(":punch: /ᴄᴏмвαт","*Vous permet de vous battre avec l'utilisateur mentionné.*")
    .addField(":underage: /ηsғω","*Affiche des images pornographiques.*")
    .addField(":speech_balloon: /мsg","*Vous permet d'envoyer un message privé à la personne mentionnée.*")
    .addField(":raised_back_of_hand: /ριℓε-ғαᴄε","*Joue au jeu célèbre ``Pile ou Face``.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Fun | Retour -> 🔙")


    var autre_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Aide```__")
    .addField(":link: **``/яερσят``**","*Permet de signaler un joueur ou un bug afin d'aider les membres du Staff.*")
    .addField(":link: **``/тιcкεт``**","*Permet de créer un Ticket de support pour quelconque question...*")
    .addField(":link: **``/ғιηιsн``**","*Permet de terminer un ticket.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Aide | Retour -> 🔙")


    var music_embed = new Discord.RichEmbed()
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Musique```__")
    .addField(":play_pause:  /נᴏιη","*Vous permet de connecter le BOT à votre channel.*")
    .addField(":play_pause:  ``/ρℓαү``","*Vous permet d'écouter de la musique en entrant un lien ``YOUTUBE``.*")
    .addField(":stop_button:  ``/sтσρ``","*Vous permet d'arrêter la musique en cours.* ")
    .addField(" :stop_button: /ℓεαvε","*Vous permet de déconnecter le BOT.*")
    .addField(fleche + "/sкιρ", "*Vous permet de passer à la musique suivante.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Musique | Retour -> 🔙")
    .setColor("#339999")
    
    var help_embed = new Discord.RichEmbed()
    .setTitle("Administrateurs : Pensez à installer les prérequis : /install")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat:  :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Page d'aide```__")
    .addField("   α∂мιηιsтяαтιση ", "``Réagir avec`` :tools:")
    .addField("   мσ∂éяαтιση ","``Réagir avec`` :gear: ")
    .addField("  ғυη | αυтяε "," ``Réagir avec`` :tada:")
    .addField("   мυsιqυε ","``Réagir avec`` :loud_sound:")
    .addField("  ιηғσямαтισηs sυя ᴄᴀᴛʙᴏᴛ", "``Réagir avec`` :cat: ")
    .addField("  αι∂ε", "``Réagir avec`` 🌌")
    .addField("__séᴄυяιтé__ ᴀηтι-яᴀι∂-нᴀcк-∂∂σs", "``Réagir avec`` :warning: ")
    .addField("вσυтιqυε | ჯρ", "``Réagir avec`` :notebook_with_decorative_cover:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","-----------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /help ")
    .setColor("#339999")

    var quizz_embed = new Discord.RichEmbed()
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Sécurité```__")
    .addField(":warning: /gвαη", "*Permet de gban une personne.*.")
    .addField(" :warning: /gяερσят", "*Vous permet de greport une personne dans un cadre de Hack, DDOS, Raid...*")
    .addField(" :warning:  /gℓιsт", " *Affiche la liste des gban.*")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","---------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Sécurité | Retour -> 🔙")

    var xp_embedd = new Discord.RichEmbed()
    .setColor("#339999") 
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"," :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","__```Boutique | XP```__")
    .addField(xpemoji + '/ჯρ', '*Vous permet de visualiser votre expérience totale.*')
    .addField(xpemoji + '/sнoρ', '*Vous permet de visualiser la boutique.*')
    .addField(xpemoji + "/вυү", "*Vous permet d'acheter un item de la boutique grâce à son ID.*")
    .addField(':notebook_with_decorative_cover: /ιηvεηтαιяε', '*Vous permet de visualiser votre inventaire.*')
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Page d'aide : Boutique | XP | Retour -> 🔙")



    const ok = await message.channel.send(help_embed).catch();
await ok.react("⚒")
await ok.react("⚙") 
await ok.react("🎉")
await ok.react("🔊")
await ok.react("🐱")
await ok.react("🌌")
await ok.react("⚠")
await ok.react('📔')
    
    const theri = ok.createReactionCollector((reaction, user) => user.id === message.author.id);

    theri.on('collect', async(reaction) => {



        if (reaction.emoji.name === "⚒") {
await ok.edit(admin_embed);
await ok.clearReactions();
await ok.react("🔙")
}

if (reaction.emoji.name === "🌌") {
  await ok.edit(autre_embed);
  await ok.clearReactions();
  await ok.react("🔙")
  }
  

        if (reaction.emoji.name === "⚙") {

          await ok.edit(mod_embed)
          await ok.clearReactions();
          await ok.react("🔙")

      }

      if(reaction.emoji.name === "📔"){
        await ok.edit(xp_embedd)
        await ok.clearReactions();
        await ok.react('🔙')
      }

      if (reaction.emoji.name === "🎉") {

        await ok.edit(fun_embed)
        await ok.clearReactions();
        await ok.react("🔙")


    }


        if (reaction.emoji.name === "🔊") {

          await ok.edit(music_embed)
          await ok.clearReactions();
          await ok.react("🔙")

        }

        if (reaction.emoji.name === "🐱") {

          await ok.edit(catbot_embed)
          await ok.clearReactions();
          await ok.react("🔙")


        }

        if(reaction.emoji.name === "⚠"){
          await ok.edit(quizz_embed);
          await ok.clearReactions();
          await ok.react("🔙")
        }
        if (reaction.emoji.name === "🔙") {

          await ok.edit(help_embed);
          await ok.clearReactions();
          await ok.react("⚒")
await ok.react("⚙") 
await ok.react("🎉")
await ok.react("🔊")
await ok.react("🐱")
await ok.react("🌌")
await ok.react('⚠')
await ok.react('📔')
        }


        })

        
await client.users.get("390948313601671168").send("La commande /help a fonctionné et a été exécutée Par :"+message.author.username);
console.log(message.author.tag + " a utilisé /help !")



      

     }
var emojii = '<:fleche:469214071129112586>'
     if(message.content === "e")
     message.channel.send(emojii)


     /*if(message.content.startsWith(prefix + "reacrole")){
      message.delete();
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) message.reply(fleche +"**Vous n'avez pas la permission !** ")
      if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(fleche +"**Le bot n'a pas la permission ``ADMINISTRATEUR`` !** ")
      var roleargs = message.content.split(" ").slice(1)
      if(!roleargs) (fleche +"**Entrez un rôle.**  ")
      var rolee = message.guild.roles.find("name", roleargs.join(" "))
      if(!rolee) return message.reply(fleche +"**Rôle invalide.** " + roleargs)
      var role_embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription("Rôle : "+ roleargs)

      var roleauthor = new Discord.RichEmbed()
      .setColor("#01DF01")
      .setDescription("**Rôle reçu avec succès.**")
    
      const role_ok = await message.channel.send(role_embed).catch();
      await role_ok.react("❌")
      await role_ok.react("✅")

      const role_theri = role_ok.createReactionCollector((reaction, user) => user.id);

      role_theri.on('collect', async(reaction) => {
        if(reaction.emoji.name === "❌❌"){
          await role_ok.reaction.emoji.user.removeRole(rolee).catch();



        }
        if(reaction.emoji.name === "✅"){
          await role_ok.reaction.user.addRole(rolee).catch();
          await role_ok.reaction.user.send(roleauthor)

      }
    })
  }*/
  


if (message.content.startsWith(prefix + "cmute")) {
  if (message.channel.type === "dm") return;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(fleche +"** Vous n'avez pas la permission ! **").catch(console.error);
  if(message.mentions.users.size === 0) {
    return message.channel.send(fleche +"** Merci de mentionner un utilisateur ``VALABLE`` ! **");
  }
  let muteMember = message.guild.member(message.mentions.users.first());
  if(!muteMember) {
    return message.channel.send(fleche +"** Utilisateur mentionné invalide. **");
  }
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.reply(fleche +"** Je n'ai pas la permission ! **").catch(console.error);
  }
  message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
    var ticket_finsh = new Discord.RichEmbed()
    .setColor("#01DF01")
    .setDescription(fleche +"**Réduction au silence exécutée avec succès. ✅**")
    message.channel.send(ticket_finsh).catch();
      })};


    if (message.content.startsWith(prefix + "cunmute")) {
      if (message.channel.type === "dm") return;
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(fleche +"** Vous n'avez pas la permission ! **").catch(console.error);
      if(message.mentions.users.size === 0) {
        return message.channel.send(fleche +"** Merci de mentionner un utilisateur ``VALABLE`` ! **");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.channel.send(fleche +"** Utilisateur mentionné invalide. **");
      }
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(fleche +"** Je n'ai pas la permission !**").catch(console.error);
      }
      message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: null }).then(member => {
        var ticket_finsh = new Discord.RichEmbed()
        .setColor("#01DF01")
        .setDescription("**Parole rendue avec succès. ✅**")
        message.channel.send(ticket_finsh).catch();
    })};
      

    if(message.content === prefix + "support"){
      if (message.channel.type === "dm") return;

  message.delete();
    var support_embed = new Discord.RichEmbed()
    .setTitle(fleche +"Voici le lien pour rejoindre le Support de ᴄᴀᴛʙᴏᴛ : ")
    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("Cliquez ici pour accéder à la Page :","[--> :cat: ](https://discord.gg/yPxW4YF)")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","--------------------------------------------")
    .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /support ")
    .setColor("#339999")
    message.author.send(support_embed); 
    message.channel.send("**Le lien pour rejoindre le support de ᴄᴀᴛʙᴏᴛ vous a été envoyé par message privé, vérifiez qu'ils soient bien actifs.**").then(function (message) { message.react("📬") }) 
    client.users.get("390948313601671168").send("La commande /support a fonctionné et a été exécutée Par :"+message.author.username);
}

/*if(message.content.startsWith(prefix + "github")){
  var git = new Discord.RichEmbed()
  .addField("Cliquez ici pour accéder au GitHub du BOT :", "[--> :cat: ](https://github.com/Chat34320/CatBot)")
  message.channel.send(git)
}*/


if(message.content === prefix + "partenaires"){
  if (message.channel.type === "dm") return;

  message.delete();
  var partenaires_embed = new Discord.RichEmbed()  
  .setTitle("Voici la liste des Partenaires de ᴄᴀᴛʙᴏᴛ :")
  .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",":cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat: :cat:")
  .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","```FoxBot :```")
  .addField("**Bot crée par ElectroDark, serveur avec un staff organisé de A à Z, des animations, des développeurs, membres Actifs, voici le lien :**","https://discord.gg/uFV3Ygy")
  .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","```UltraBot :```")
  .addField("**Bot crée par Jean0, un petit serveur, calme, ambiancé... __Le lien :__**","https://discord.gg/uFV3Ygy")
  .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬","-------------------------------------------------")
  .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Commande exécutée : /partenaires")
  .setColor("#339999")
  message.author.send(partenaires_embed); 
  message.channel.send("**La liste des partenaires de ᴄᴀᴛʙᴏᴛ vous a été envoyée par message privé, vérifiez qu'ils soient bien actifs.**").then(function (message) { message.react("📬") }) 
client.users.get("390948313601671168").send("La commande /partenaires a fonctionné et a été exécutée Par :"+message.author.username);
}       



if(message.content === "Bonjour"){
  message.channel.send("Bonjour ! Ca va ?");
  }

  if(message.content === "Yo"){
    message.channel.send("Bonjour ! Ca va ?");
    }

    if(message.content === "Yo !"){
      message.channel.send("Bonjour ! Ca va ?");
      }

if(message.content === "Bonjour !"){
  message.channel.send("Bonjour ! Ca va ?");
  }

if(message.content === "Ca va ?"){
  message.channel.send("Oui et toi ?");
  }

  if(message.content === "Ca va"){
    message.channel.send("Oui et toi ?");
    }


    if(message.content === "cv"){
      message.channel.send("Oui et toi ?");
      }

      if(message.content === "cv ?"){
        message.channel.send("Oui et toi ?");
        }

        if(message.content === "test"){
            message.delete();
  if(message.author.id == "390948313601671168"){
          message.channel.send(":tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n :tada: \n ");
        }
      }

if(message.content === "Miaou"){
  message.channel.send("Miaou ? Je suis bien là, je n'ai pas crash ! :D");
  }

  if(message.content === "cc"){
    if (message.channel.type === "dm") return;

    message.channel.send("Coucou ! Ca va ?")
    }

    if(message.content.startsWith(prefix + "report")){
      if (message.channel.type === "dm") return;

      message.delete();
      var reportargs = message.content.substr(7);
      if(!reportargs) return message.channel.send(fleche +" **Merci d'indiquer :** \n ``Pseudo + TAG + ID + Raison`` \n **Ou** \n ``Détail du bug + Heure + Serveur``  ")
      if(!message.guild.channels.find("name", "report")) return message.reply(fleche +" **Vous devez créer le salon `report` et y mettre la permission pour que ᴄᴀᴛʙᴏᴛ puisse y écrire dedans !** ");
      var report_embed = new Discord.RichEmbed()
      .setColor("#B40404")
      .setTitle("Report")  
      .addField("__Par : __","<@" + message.author.id + ">")
      .addField("__**Pour : **__ ", reportargs, true)
      .setFooter("ᴄᴀᴛʙᴏᴛ | Report " + message.guild.name + ".")
      message.guild.channels.find('name', 'report').send(report_embed).catch();
      client.users.get("390948313601671168").send(message.author.tag + " ou " + message.author.id + " a report : " + reportargs + "  | sur le serveur : " + message.guild.name);
      message.channel.send(fleche +"__**Report envoyé avec succès !**__").then(function (message) { message.react("✅") })

      var reportlogs_embed = new Discord.RichEmbed()
      .setColor("#B40404")
      .setTitle("Report")  
      .addField("__Par : __","<@" + message.author.id + ">")
      .addField("__**Pour : **__ ", reportargs, true)
      .setFooter("ᴄᴀᴛʙᴏᴛ | Report " + message.guild.name + ".")
      message.guild.channels.find('name', 'catlogs').send(reportlogs_embed).catch();
  }

  if(message.content.startsWith(prefix + "msg")){
    if (message.channel.type === "dm") return;

    message.delete();
    let msgdest = message.mentions.users.first()
    if(!msgdest) return message.channel.send(":tools: **Comment utiliser ma commande ->** ```/msg <@utilisateur> <Message>```  :tools: **Requis ->** ```Il faut que le destinataire ait activé les Messages Privés.```")
    let msgmsg = message.content.split(" ").slice(2).join(" ");
    if(!msgmsg) return message.channel.send(fleche +"**  Merci d'entrer un texte à envoyer.** ")

    var msg_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .setTitle("🌐 ᴄᴀᴛʙᴏᴛ 🌐")
    .addField(msgmsg, "⭐▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬⭐")
    .setFooter(message.author.tag + " ➡ " + message.guild.name).setTimestamp()
    message.mentions.members.first().send(msg_embed)

            if(message.mentions.users.first().presence.status === "online"){
              var status = '<:online:460894570620780557>';
          }else if(message.mentions.users.first().presence.status === "invisible"){
              var status = ' <:invisible:460894671304916997>';
          }else if(message.mentions.users.first().presence.status === "idle"){
              var status = '<:idle:460894642326601762>';
          }else{
              var status = '<:dnd:460894617731072030>';
          }

    var msgdest_embed = new Discord.RichEmbed()
    .setColor("#339999")
    .addField("Status du message : ", " :ok:")
    .addField("Status du Destinataire : ", status)
    message.channel.send(msgdest_embed).then(function (message) { message.react("✅") })
    client.users.get("390948313601671168").send(message.author.tag + " a envoyé un message à partir du serveur " + message.guild.name + ". Il a écrit : " + msgmsg + " à " + msgdest)
 

  }
  if(message.content === "te"){
    message.channel.send('<:dnd:460894617731072030>    <:idle:460894642326601762>    <:invisible:460894671304916997>    <:online:460894570620780557>')
  }

  if(message.content.startsWith(prefix + "pile-face")){
    if (message.channel.type === "dm") return;

    message.delete();
    var replies = ["Pile", "Face"];
    var result = replies[Math.floor(Math.random()*replies.length)];
  
   var ballembed = new Discord.RichEmbed()
   .setColor("#339999")
   .addField("__Pile ou Face ?__ ", fleche + result)
   .setFooter("ᴄᴀᴛʙᴏᴛ, 2018 | Requête de : " + message.author.tag)
  message.channel.send(ballembed);
  
  } 

      if(message.content.startsWith(prefix + 'ban')){
        message.delete();
        var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }
        if (message.channel.type === "dm") return;
                if(!message.mentions.users.first()){
          return message.channel.send(":tools: **Comment utiliser ma commande ->** ```/ban <@utilisateur> <raison>```  **Permission requise ->** ```BAN_MEMBERS```**Salons requis ->** ```catlogs```");
        }
          if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");

        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))  return message.reply(fleche +"** Vous n'avez pas la permission !** ").catch(console.error);
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return message.reply(fleche +"** Je n'ai pas la permission pour bannir. **").catch(console.error);
          
        }
        var reason = message.content.split(" ").slice(2).join(" ");
        if(!reason){
             return message.channel.send(fleche +" **Vous devez indiquer une raison valable !** ")
         };

         var ticket_fish = new Discord.RichEmbed()
         .setColor("#01DF01")
         .setDescription("**Bannissement exécuté avec succès. ✅**")
 
         var banlog_embed = new Discord.RichEmbed()
         .setColor("#B40404")
         .addField("**Bannissement du joueur **", message.mentions.users.first(), true)
         .addField("**Bannissement exécuté Par **", message.author.tag, true)
         .addField("**Raison du bannissement : **", reason, true)
         .setImage("https://cdn.discordapp.com/attachments/424936338031116308/454634287484895232/BAN.gif")
         .setFooter("ᴄᴀᴛʙᴏᴛ | Bannissement d'un membre du serveur " + message.guild.name + ".")
 

         var banmachin = new Discord.RichEmbed()
         .setDescription("**Vous êtes en train de bannir un utilisateur, vous devez confirmer !**")
         .setColor("#000000")

         var ticket_fish = new Discord.RichEmbed()
         .setColor("#01DF01")
         .setDescription("**Bannissement exécuté avec succès. ✅**")
 

         const ok = await message.channel.send(banmachin).catch();
         await ok.react("✅")
             
             const theri = ok.createReactionCollector((reaction, user) => user.id === message.author.id);
         
             theri.on('collect', async(reaction) => {
         
         
         
                 if (reaction.emoji.name === "✅") {
         await ok.edit(ticket_fish);
         await ok.clearReactions();
         await message.guild.members.get(mentionned.id).ban(); {
          message.client.users.get(getvalueof.id).send("**Tu as été Banni du serveur **" +  message.guild.name + "** Pour la raison** " + reason)

          message.guild.channels.find('name', 'catlogs').send(banlog_embed).catch();
          client.users.get("390948313601671168").send(message.mentions.users.first() + "`` a été banni Par ``  <@" + message.author.id+"> ``Pour la raison`` **" + reason + " sur le serveur " + message.guild.name);
         
                          
        } 
              }
         
         

             });
    }

    if(message.content.startsWith(prefix + 'unban')){
      message.delete();
      var mentionned = message.content.substr(7);
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }
      if (message.channel.type === "dm") return;
              if(!mentionned){
        return message.channel.send(":tools: **Comment utiliser ma commande ->** ```/unban id```  :tools: **Permission requise ->** ```BAN_MEMBERS```:tools: **Salons requis ->** ```catlogs``` :tools: **Comment avoir l'id ?** ```/id @user```");
      }
        if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");

      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))  return message.reply(fleche +"** Vous n'avez pas la permission !** ").catch(console.error);
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        return message.reply(fleche +"** Je n'ai pas la permission pour bannir. **").catch(console.error);
        
      }

       var unticket_fish = new Discord.RichEmbed()
       .setColor("#01DF01")
       .setDescription("**Débannissement exécuté avec succès. ✅**")

       var unbanlog_embed = new Discord.RichEmbed()
       .setColor("#B40404")
       .addField("**Débannissement du joueur **", `${mentionned.username}#${mentionned.discriminator}`)
       .addField("**Débannissement exécuté Par **", message.author.tag, true)
       .setFooter("ᴄᴀᴛʙᴏᴛ | Débannissement d'un membre du serveur " + message.guild.name + ".")


       var unbanmachin = new Discord.RichEmbed()
       .setDescription("**Vous êtes en train de débannir un utilisateur, vous devez confirmer !**")
       .setColor("#000000")



       const ok = await message.channel.send(unbanmachin).catch();
       await ok.react("✅")
           
           const theri = ok.createReactionCollector((reaction, user) => user.id === message.author.id);
       
           theri.on('collect', async(reaction) => {
       
       
       
               if (reaction.emoji.name === "✅") {
       await ok.edit(unticket_fish);
       await ok.clearReactions();
       await message.guild.unban(mentionned);
       await message.guild.channels.find('name', 'catlogs').send(unbanlog_embed).catch();
       await client.users.get("390948313601671168").send(mentionned + "`` a été débanni Par ``  <@" + message.author.id+"> sur le serveur " + message.guild.name);

        await message.client.mentionned.send("**Tu as été débanni du serveur **" +  message.guild.name + " **!")

       
                        
       
            }
       
       

           });
  }



    
    
      if(message.content.startsWith(prefix + 'kick')){
        message.delete();
      if (message.channel.type === "dm") return;
      if(!message.guild.channels.find("name", "catlogs")) return message.reply(fleche +" **Vous devez créer le salon `catlogs` !** ");
      if(!message.mentions.users.first()){
        return message.channel.send(":tools: **Comment utiliser ma commande =>** ```/kick <@utilisateur> <raison>```  **Permission requise ->** ```KICK_MEMBERS``` **Salon requis ->** ```catlogs```");
      }
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply(fleche +"** Vous n'avez pas la permission !*").catch(console.error);
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(fleche +"** Je n'ai pas la permission pour exclure. **").catch(console.error);
        
      }
      var reason = message.content.split(" ").slice(2).join(" ");
      if(!reason){
           return message.channel.send(fleche +"**Vous devez indiquer une raison valable !** ")
       };

       var kickmachin = new Discord.RichEmbed()
       .setDescription("**Vous êtes en train d'exclure un utilisateur, vous devez confirmer !**")
       .setColor("#000000")

       
       var ticket_finsh = new Discord.RichEmbed()
       .setColor("#01DF01")
       .setDescription("**Exclusion exécutée avec succès. ✅**")

       var kicklog_embed = new Discord.RichEmbed()
       .setColor("#B40404")
       .addField("**Exclusion du joueur **", message.mentions.users.first(), true)
       .addField("**Exclusion exécutée Par **", message.author.tag, true)
       .addField("**Raison de l'exclusion : **", reason, true)
       .setFooter("ᴄᴀᴛʙᴏᴛ | Exclusion d'un membre du serveur " + message.guild.name + ".")


      var member = message.mentions.users.first();             
        var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }
        const ok = await message.channel.send(kickmachin).catch();
        await ok.react("✅")
            
            const theri = ok.createReactionCollector((reaction, user) => user.id === message.author.id);
        
            theri.on('collect', async(reaction) => {
        
        
        
                if (reaction.emoji.name === "✅") {
        await ok.edit(ticket_finsh);
        await ok.clearReactions();
        await message.guild.members.get(mentionned.id).kick(); {
         await message.client.users.get(getvalueof.id).send("**Tu as été exclu du serveur **" +  message.guild.name + "** Pour la raison** " + reason)

         await message.guild.channels.find('name', 'catlogs').send(kicklog_embed).catch();
         await client.users.get("390948313601671168").send(message.mentions.users.first() + "`` a été exclu Par ``  <@" + message.author.id+"> ``Pour la raison`` **" + reason + " sur le serveur " + message.guild.name);
        
                         
       } 
             }
        
        

            });        

      
    }

         
        


    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

if (message.content.startsWith(prefix + "warn")){

if (message.channel.type === "dm") return;

var mentionned = message.mentions.users.first();

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(fleche +"**Vous n'avez pas la permission.**").catch(console.error);

if(message.mentions.users.size === 0) {

  return message.channel.send(fleche +"** Vous n'avez mentionné aucun utilisateur**");

}else{

    const args = message.content.split(' ').slice(1);

    const mentioned = message.mentions.users.first();

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          if (args.slice(1).length != 0) {

            const date = new Date().toUTCString();

            if (warns[message.guild.id] === undefined)

              warns[message.guild.id] = {};

            if (warns[message.guild.id][mentioned.id] === undefined)

              warns[message.guild.id][mentioned.id] = {};

            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;

            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){

              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};

            } else {

              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),

                time: date,

                user: message.author.id};

            }

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

message.delete();

            message.channel.send(fleche + mentionned.tag + " **vient d'être averti par **" + message.author.tag + " **Pour : **" + args.slice(1).join(' '));
            message.guild.channels.find('name', 'catlogs').send(`${mentionned.tag}  vient d'être averti par ${message.author.tag} pour : `+ args.slice(1).join(' '))


message.mentions.users.first().send(fleche +`**Tu as été averti sur le serveur : ${message.guild.name}\n ${fleche}  Par : ${message.author.username}\n ${fleche}Pour la raison : ` + args.slice(1).join(' ') + `**`)

          } else {

            message.channel.send(":tools: ```/warn <@utilisateur> <Raison>```");

          }

        } else {

          message.channel.send(":tools: ```/warn <@utilisateur> <Raison>```");

        }

      } else {

        message.channel.send(":tools: ```/warn <@utilisateur> <Raison>```");

      }

    } else {

      message.channel.send(fleche +"**Vous n'avez pas la permission.**").catch(console.error);

    }

  }

}



  if (message.content.startsWith(prefix+"listwarn")) {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(fleche +"**Vous n'avez pas la permission.**").catch(console.error);

    const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size !== 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          try {

            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              message.channel.send(fleche + "**" + mentioned.tag + " n'a pas été averti sur ce serveur.**");

              return;

            }

          } catch (err) {

            message.channel.send(fleche + "**" + mentioned.tag + " n'a pas été averti sur ce serveur.**");

            return;

          }

          let arr = [];

          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");

          for (var warn in warns[message.guild.id][mentioned.id]) {

            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+

            "**\" Avertissement donné par : **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** Le : **"+warns[message.guild.id][mentioned.id][warn].time+"**");

          }

          message.channel.send(arr.join('\n'));

        } else {

          message.channel.send(":tools: ```/listwarn <@utilisateur> ```");

          client.users.get("390948313601671168").send(args);

        }

      } else {

        message.channel.send(":tools: ```/listwarn <@utilisateur> ```");

      }

    } else {

      message.channel.send(fleche +"**Vous n'avez pas la permission !**");

    }

  }





  if (message.content.startsWith(prefix+"delwarn")) {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

   const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    const arg2 = Number(args[1]);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){

          if (!isNaN(arg2)) {

            if (warns[message.guild.id][mentioned.id] === undefined) {

              message.channel.send(mentioned.tag+" n'a aucun warn");

              return;

            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {

              message.channel.send(fleche +"**L'avertissement comportant ce numéro n'existe pas.**");

              return;

            }

            delete warns[message.guild.id][mentioned.id][arg2];

            var i = 1;

            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){

              var val=warns[message.guild.id][mentioned.id][key];

              delete warns[message.guild.id][mentioned.id][key];

              key = i;

              warns[message.guild.id][mentioned.id][key]=val;

              i++;

            });

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              delete warns[message.guild.id][mentioned.id];

            }

            message.channel.send(fleche +`**Avertissement de ${mentioned.tag} enlevé avec succès !**`);
            message.guild.channels.find('name', 'catlogs').send(fleche +`**Avertissement de ${mentioned.tag} enlevé avec succès !**`);


            return;

          } if (args[1] === "all") {

            delete warns[message.guild.id][mentioned.id];

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            message.channel.send(fleche +`**Les avertissements de ${mentioned.tag} ont été enlevés avec succès !**`);
            message.guild.channels.find('name', 'catlogs').send(fleche +`**Avertissements de ${mentioned.tag} enlevés avec succès !**`);


            return;

          } else {

            message.channel.send(":tools: ```/delwarn <@utilisateur> <Numéro | all>```");

          }

        } else {

          message.channel.send(":tools: ```/delwarn <@utilisateur> <Numéro | all>```");

        }

      } else {

        message.channel.send(":tools: ```/delwarn <@utilisateur> <Numéro | all>```");

      }

    } else {

      message.channel.send(fleche +"**Vous n'avez pas la permission !**");

    }

  }



      


              
              
              
    });


    


var Attente = [];


client.on('message', (msg) => {

  if(msg.channel.name == "certification"){

  if(msg.author !== client.user) {

    msg.delete();

  }else{

    msg.channel.send();

  }
}

});


client.on('guildMemberAdd', member => {
  const fleche = '<:fleche:469214071129112586>'
  
const nouveau = '<:nouveau:470929885318217728>';
const ancien = ' <:ancien:470929873615978506>'
const salon = member.guild.channels.find('name', 'bienvenue');

    if(!salon) return;

           
        
         member.send("**Bienvenue sur le serveur ! Afin de valider ton entrée, tape /accept dans #certification !**")

    salon.send( nouveau +"**Bienvenue**  <@"+ member.user.id + "> **!  \n " + fleche +" **["+ member.guild.memberCount +"] Membres**"); 

});


client.login(token)