import { Client } from "discord.js";

const client = new Client();
const token = "MTAzMzMxNjQ1ODA4OTkzOTAwNQ.GuD7qW.mwO0Ph94ENcquhaHtul4IRqsLYlWjv16_CUfF0";

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);