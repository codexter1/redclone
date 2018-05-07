const models = require('../models');


const comment = {
  content:'bread is grapes actually',
  votes: 96
};

models.Comment.create(comment, function(err, comments) {
    if (err) {
      console.log('Failed to create comment: ', err);
      return;
    }
    console.log('Created comment');
    return;
  })
});

models.Comment.remove({}, function(err, res) {
  if (err) {
    console.log('failed to remove comment: ', err);
    return;
  }
  console.log('Comment removed');
});


models.TextPost.create({
  title: 'My New Thing',
  content: 'Mmm pork dumplings',
  thumbnail: 'https://images-gmi-pmc.edge-generalmills.com/6059b986-4800-4508-8546-40cb56e3d815.jpg',
  votes: 69,
  comments: [comment],
}, function(err,post) {
    if (err) {
      console.log('failed to create post: ', err);
      return;
    }
    console.log('Comment created');
    return;
  }
});

models.TextPost.remove({}, function(err,res) {
  if (err) {
    console.log('Failed to remove post', err);
    return;
  }
  console.log('Post removed');
};
