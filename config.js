const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"6PH1EqMF67cF/hwWycbBDROst/JZk0NAqmAcaBeA224="},"public":{"type":"Buffer","data":"RUamMOwX/h/KG4CsZ3mfEwKyeBWnI26yFWCI2/Tr4EM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sHzXuSQJOTmdrrY4QnlLdCtfNfNdLGlzkd+SXEcV43c="},"public":{"type":"Buffer","data":"ALbohZVpqT88UuuxNDkKU7mvmrJ6O5QiP6VTUoJFADM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UIairRKeRNS8IQrufu7khmBBS+dPoZKQ62CKbIvFX3Y="},"public":{"type":"Buffer","data":"oQzYGJTxvPF68NTmj2DDKyUjFpOfMOPSUEWyPTGg8Qo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IFpB3XFuXDpLu3fcpCp8XvthW0us5FlFA2VP8Kh7EH0="},"public":{"type":"Buffer","data":"llPDv5XypDCbFTaokElsj08A5R7o7opYbZ9jJDPpnw0="}},"signature":{"type":"Buffer","data":"LFZ/QOKHfR9cmdXbBMhpKseNH3bgRpbDoLExxu4rkXIg+cjHbC3rmN+8VSuwub5Oi8VNDu/nE9MQrE/7YDj3Cw=="},"keyId":1},"registrationId":116,"advSecretKey":"ULhtslj8VeI3i6ZpzsW7gmA7Z2UKYmTwfk00G7Y0S5w=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"mggnjhwpTQicrtZ8MWmADA","phoneId":"60c9aac3-ec4d-4b1a-a2cc-be11d1807d28","identityId":{"type":"Buffer","data":"2EMP0AZ71I1kM6seG/a7n+eh24w="},"registered":true,"backupToken":{"type":"Buffer","data":"1BTsSkb8fuCFouJE+ckqxE4bBr4="},"registration":{},"pairingCode":"J55HB9C4","me":{"id":"2349152564052:11@s.whatsapp.net","name":"XAVIER"},"account":{"details":"CNOU5egCEIPx0LYGGAogACgA","accountSignatureKey":"Sd2AagzJKN4fFS4eN6mjO/EVBvGCkQpKrA3yCwaZ1zA=","accountSignature":"TT+GNNsy+yCibLXiiQ21AwDtjape2c9tOvfVSaPvlW90YBP6IJsufqB+mwX2KueuZz5BUAMYXF8y3rRMdTEEAA==","deviceSignature":"ulAkjDuCk/ByvEUalbWOyQt6nF837DxcV4zn9W29Y76Jq8LUIs0EtfFGN63nOVw/IHq5XVbd/IIbItD8dDFLAg=="},"signalIdentities":[{"identifier":{"name":"2349152564052:11@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUndgGoMySjeHxUuHjepozvxFQbxgpEKSqwN8gsGmdcw"}}],"platform":"smba","lastAccountSyncTimestamp":1725184145}"
global.Owner = ["2348138686232"]; //like 2347080968564 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
