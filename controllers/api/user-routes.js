// missing db & more from previous lesson


// router.post('/login', (req, res) => {
//     User.findOne({
//       where: {
//         email: req.body.email
//       }
//     })// .then(dbUserData => {
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;
  
//       res.json(dbUserData);
//     });
//   })
  
//       const validPassword = dbUserData.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res.status(400).json({ message: 'Incorrect password!' });
//         return;
//       }
  
//       req.session.save(() => {
//         // declare session variables
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;
  
//         res.json({ user: dbUserData, message: 'You are now logged in!' });
//       });
//     });
//   });

// router.post('/logout', (req, res) => {
    // if (req.session.loggedIn) {
    //     req.session.destroy(() => {
    //       res.status(204).end();
    //     });
    //   }
    //   else {
    //     res.status(404).end();
    //   }
// });
