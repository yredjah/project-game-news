/* eslint-disable */
const nodemailer = require("nodemailer");

module.exports = {
  mailer: function(){
    let testAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contactgamenews019@gmail.com', 
        pass: 'Games123456@', 
      }
    });
  
    let info = transporter.sendMail({
      from: '"Game News" <contactgamenews019@gmail.com>', 
      to: "jiloboyz@gmail.com", 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>" 
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
  
  // main().catch(console.error);
};

// async function main(){
//   let testAccount = await nodemailer.createTestAccount();
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'contactgamenews019@gmail.com', 
//       pass: 'Games123456@', 
//     }
//   });

//   let info = await transporter.sendMail({
//     from: '"Game News" <contactgamenews019@gmail.com>', 
//     to: "y.redjah@gmail.com", 
//     subject: "Hello ✔", 
//     text: "Hello world?", 
//     html: "<b>Hello world?</b>" 
//   });

//   console.log("Message sent: %s", info.messageId);

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// main().catch(console.error);
