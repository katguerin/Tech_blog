// missing other code that must be in module 13

router.put('/upvote', (req, res) => {
    // make sure the session exists first
    if (req.session) {
      // pass session id along with all destructured properties on req.body
      Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
        .then(updatedVoteData => res.json(updatedVoteData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });

// missing other code from module 13
//   Post.create({
//     title: req.body.title,
//     post_url: req.body.post_url,
//     user_id: req.session.user_id
//   })

// missing other code from module 13
// router.delete('/:id', withAuth, (req, res) => {
//     // inner logic remains the same...
//   });