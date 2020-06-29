const router = require('express').Router();

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/', (req, res) => {
    console.log(req.session);
  
    // other logic...
  });


router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });


  router.get('/post/:id', (req, res) => {
    const post = {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    };
  
    res.render('single-post', { post });
  });  


  // when attatched to a sequelize database replace the above get function with below function:
  // res.render('homepage', {
  //   posts,
  //   loggedIn: req.session.loggedIn
  // });,
  //     attributes: [
  //       'id',
  //       'post_url',
  //       'title',
  //       'created_at',
  //       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
  //     ],
  //     include: [
  //       {
  //         model: Comment,
  //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //         include: {
  //           model: User,
  //           attributes: ['username']
  //         }
  //       },
  //       {
  //         model: User,
  //         attributes: ['username']
  //       }
  //     ]
  //   })
  //     .then(dbPostData => {
  //       if (!dbPostData) {
  //         res.status(404).json({ message: 'No post found with this id' });
  //         return;
  //       }
  
  //       // serialize the data
  //       const post = dbPostData.get({ plain: true });
  
  //       // pass data to template
  //       res.render('single-post', { post });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // });

module.exports = router;

