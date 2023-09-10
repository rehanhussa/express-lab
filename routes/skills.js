// routes/skills.js
 var express = require('express');
 var router = express.Router();

 // Require the controller that exports skills CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

 // GET /skills
 router.get('/', skillsCtrl.index);
// GET /new
router.get('/new', skillsCtrl.new);
// GET /:id
router.get('/:id', skillsCtrl.show);
// POST /
router.post('/', skillsCtrl.create);
// DELETE /:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
