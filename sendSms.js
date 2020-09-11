const accountSid = 'ACf7f1a5985ff51521a5fdf13da30dbf45';
const authToken = 'd4d32a1d0980c0211cdb17024e1d301e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Message teste avec nodejs et twilio api pour envoyer des sms',
     from: '+19384448447',
     to: '+221763797367'
   })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err))