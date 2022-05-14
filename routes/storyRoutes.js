const express = require('express');
const story = require('../controllers/storyController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .post(authController.protect,
    authController.restrictTo('user'),
    story.createStory)
  .get(story.getAllStories);
  
router.
    route('/:id')
    .get(story.getOneStory)
    .patch(story.updateStory)
    .delete(story.deleteStory)
module.exports = router;