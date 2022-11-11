
const SlackStrategy = require("passport-slack-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new SlackStrategy(
    {
      clientID: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);