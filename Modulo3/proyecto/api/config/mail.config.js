const nodemailer = require("nodemailer")
const GMAIL_PASS = process.env.GMAIL_PASS

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "crossfitwoodgram@gmail.com",
        pass:"wlahlgwbihrtroof",
    }
})


module.exports.sendEmail = (user) => {
  transporter
    .sendMail({
      from: "crossfitwoodgram@gmail.com",
      to: user.email,
      subject: `Welcome`
       
    ,
    })
    .then(() => console.log("email sent!"))
    .catch((error) => {
      console.log("error sending mail", error);
    });
};