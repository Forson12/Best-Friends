const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session'); // Add express-session middleware

//User model definitions
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orgName: { type: String, default: ''  },
    phoneNumber: { type: String, default: ''  },
    logo: { type: String, default: ''  },
    instaHandles: { type: String, default: ''  },
    twitterHandles: { type: String, default: ''  },
    linkHandles: { type: String, default: '' },
    comments: { type: String, default: ''  },
}));



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Generating random string using node js 
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);



// Use express-session middleware
app.use(session({
  secret: secretKey, // Replace with a strong secret key
  resave: true,
  saveUninitialized: true
}));

const dbUrl = 'mongodb://localhost:27017/Alturo';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Registration route
app.post('/registration', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).send('Username or email already exists');
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Redirect to the login page after successful registration
    res.redirect('/login'); // Update the path based on your project structure
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
  
});


// // Login route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if the user exists in the database
//         const user = await User.findOne({ username, password });
//         if (user) {
//             // Store user information in the session after successful login
//             req.session.user = {
//                 _id: user._id, // Make sure to include the user's ID
//                 username: user.username,
//                 email: user.email,
//                 // Add more user data as needed
//             };

//             // Redirect to the welcome page after successful login
//             res.redirect('/displayOrganisation'); // Update the path based on your project structure
//         } else {
//             // User not found, handle login failure
//             res.status(401).send('Invalid username or password');
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username, password });

        if (user) {
            // Store user and organization information in the session after successful login
            req.session.user = {
                _id: user._id, // Make sure to include the user's ID
                username: user.username,
                email: user.email,
                // Add more user data as needed
            };

            // Fetch organization details from the database based on user ID
            const organization = await User.findOne({ _id: user._id });

            // Store organization details in the session
            req.session.organizationDetails = organization;

            // Redirect to the displayOrganisation page after successful login
            res.redirect('/addOrganisation');
        } else {
            // User not found, handle login failure
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
});




// Set view engine to ejs
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


/*Route to the index page */
// app.get('/', function (req, res) {
  
//   console.log('Handling request for /index or landing page');
//   res.render('pages/index', {users});
// });

app.get('/', async (req, res) => {
  try {
      // Fetch all users from the database
      const users = await User.find();

      // Render the index page and pass the users to the view
      res.render('pages/index', { users });
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});

// app.get('/index', function (req, res) {
//   console.log('Handling request for /index or landing page');
//   res.render('pages/index', {users});
// });

app.get('/index', async (req, res) => {
  try {
      // Fetch all users from the database
      const users = await User.find();

      // Render the index page and pass the users to the view
      res.render('pages/index', { users });
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});

// delete this
/*Route to the displaySupportInfo page */
app.get('/displaySupportInfo', function (req, res) {
  console.log('Handling request for /addSupportInfo');
  res.render('pages/displaySupportInfo');
});


// delete this
/*Route to the addSupportInfo page */
app.get('/addSupportInfo', function (req, res) {
  console.log('Handling request for /addSupportInfoe');
  res.render('pages/addSupportInfo');
});



/* Route to the Contact Page*/
  app.get('/contactUs', function (req, res) {
    console.log('Handling request for / contactUs');
    res.render('pages/contact');
  });

/* Route to the About Us*/
app.get('/aboutUs', function (req, res) {
  console.log('Handling request for / aboutUs');
  res.render('pages/aboutUs');
});


/*Route to the Login Page */
app.get('/login', function (req, res) {
  console.log('Handling request for /login');
  res.render('pages/login');
});


// /*Route to the addOrganisation Page */
// app.get('/addOrganisation', function (req, res) {
//     console.log('Handling request for /addOrganisation');
//     res.render('pages/addOrganisation');
//   });


/*Route to the registration page */
app.get('/registration', function (req, res) {
  console.log('Handling request for /registration');
  res.render('pages/registration');
});

/* Route to the immediate support Page not working :(  */
app.get('/ImmediateSupport', function (req, res) {
  console.log('Handling request for / immediateSupport');
  res.render('pages/immediateSupport');
});


// app.get('/displayOrganisation', function (req, res) {
//   console.log('Handling request for / displayOrganisation');
//   res.render('pages/displayOrganisation');
// }); 


// app.get('/kobiTryout1.ejs', function (req, res) {
//   console.log('Handling request for / kobiTryout1.ejs');
//   res.render('pages/kobiTryout1.ejs');
// }); 

// Route for Log out 
app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
  res.redirect('/');
});

// Route for handling the /addOrganization page


app.get('/addOrganisation', (req, res) => {
    // Assuming you've stored the user in the session upon login
    const user = req.session.user;
  
    // Check if the user is logged in
    if (!user) {
      return res.redirect('/login'); // Redirect to login if not logged in
    }
  
    res.render('pages/addOrganisation', { user });

});


  

//   app.post('/addOrganisation', async (req, res) => {
//     const { orgName, email, phoneNumber, logo, instaHandles, twitterHandles, linkHandles, comments } = req.body;

//     try {
//         // Assuming you've stored the user in the session upon login
//         const user = req.session.user;

//         // Check if the user is logged in
//         if (!user) {
//             return res.redirect('/login'); // Redirect to login if not logged in
//         }

//         console.log('User ID:', user._id);

//         // Access organization details from the session
//         const organization = req.session.organizationDetails || {};

//         // Update organization details
//         organization.orgName = orgName;
//         organization.email = email;
//         organization.phoneNumber = phoneNumber;
//         organization.logo = logo;
//         organization.instaHandles = instaHandles;
//         organization.twitterHandles = twitterHandles;
//         organization.linkHandles = linkHandles;
//         organization.comments = comments;

//         // Update organization details in the database
        

//         // Update the organization details in the session
//         req.session.user.organizationDetails = organization;

//         console.log('Values Updated:', organization); 

//         // update the details 


//         // Redirect to a welcome or dashboard page
//         res.redirect('/displayOrganisation');

//     } catch (error) {
//         console.error('Error updating organization details:', error);
//         res.status(500).send('Internal Server Error');
//     }

// });


app.post('/addOrganisation', async (req, res) => {
  const { orgName, email, phoneNumber, logo, instaHandles, twitterHandles, linkHandles, comments } = req.body;

  try {
      const user = req.session.user;

      if (!user) {
          return res.redirect('/login');
      }

      // Fetch the user document from the database
      const existingUser = await User.findById(user._id);

      if (!existingUser) {
          return res.status(404).send('User not found');
      }

      // Update organization details in the user document
      existingUser.orgName = orgName;
      existingUser.email = email;
      existingUser.phoneNumber = phoneNumber;
      existingUser.logo = logo;
      existingUser.instaHandles = instaHandles;
      existingUser.twitterHandles = twitterHandles;
      existingUser.linkHandles = linkHandles;
      existingUser.comments = comments;

      // Save the updated user document to the database
      await existingUser.save();

      // Update the organization details in the session
      req.session.user = existingUser;

      res.redirect('/displayOrganisation');
  } catch (error) {
      console.error('Error updating organization details:', error);
      res.status(500).send('Internal Server Error');
  }
});








// Add this route in your Express app
app.get('/displayOrganisation', (req, res) => {
    // Assuming you've stored the user in the session upon login
    const user = req.session.user;
    console.log(req.session); // Log the session to the console

    // Check if the user is logged in
    if (!user) {
        return res.redirect('/login'); // Redirect to login if not logged in
    }

    // Access organization details from the session
    const organization = req.session.organizationDetails || {};
    // const user = req.session.user;

    // if (!user) {
    //     return res.redirect('/login');
    // }

    // const organization = req.session.organizationDetails || {};
    res.render('pages/displayOrganisation', { user, organization });

});



  



/*Route to listen to our free port 3000 */
app.listen(3000, () => {
  console.log("Connected at port 3000");
});










