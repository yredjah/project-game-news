
const nodemailer = require('nodemailer');

module.exports = {
  mailerArticleNotif: function(article, contactEmail) {
    
    const testAccount = nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contactgamenews019@gmail.com',
        pass: 'Games123456@',
      },
    });

    const info = transporter.sendMail({
      from: '"Game News" <contactgamenews019@gmail.com>',
      to: contactEmail,
      subject: 'There is a new article',
      text: `New article : \n 
      ${article.title} \n
      ${article.resume} \n
      http://localhost:8080/article/${article.id}`,
    });

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  },
};

