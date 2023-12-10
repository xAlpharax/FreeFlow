const { Prisma, PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 12000
const prisma= new PrismaClient();
const session = require('express-session');
app.set('view engine', 'ejs');
app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));
const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.redirect("http://localhost:3000/"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '259045734642-9n1mgstp1hp30ponmum0piobc8pd8m35.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:12000/auth/google/callback/"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });


app.get('/', function(req, res) {
  res.render('pages/auth.ejs');
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses/:param', async (req, res) => {
  var request_parameter = req.params.param ;
  try {
    switch (request_parameter) {
      case 'all':
        var response = await prisma.course.findMany();
        res.send(response);
        break;
      default:
        var response = await prisma.course.findMany({
          where:{
            id: {
              equals: parseInt(request_parameter)
            }
          }
        });
        res.send(response);
        break;
    }
  } catch (error) {
    res.status(500);
    res.send({"error" : "Nu au fost gasite rezultate"});
  }
})
app.post('/courses', async (req, res) => {
    console.log(req.body);
    res.status(200);
    try {
      const request = prisma.course.create({
        data:{
          title: req.body.title,
          description: req.body.description,
          author:{
            connect: {id: req.body.user_id}
          }
        }
      })
    } catch (error) {

    }
})
app.get('/user_data/:param', async (req, res) => {
  var request_parameter = req.params.param ;
  try {
    switch (request_parameter) {
      case 'all':
        var response = await prisma.course.findMany();
        res.send(response);
        break;
      default:
        var response = await prisma.user.findMany({
          where:{
            id: {
              equals: parseInt(request_parameter)
            },
            include: {
              user_data: true
            }
          }
        });
        res.send(response);
        break;
    }
  } catch (error) {
    res.status(500);
    res.send({"error" : "Nu au fost gasite rezultate"});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
