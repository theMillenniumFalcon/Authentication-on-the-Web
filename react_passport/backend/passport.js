const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const GOOGLE_CLIENT_ID = "731571533603-445i8jltiar2jupadul08h0tehrda5k2.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user) 
})