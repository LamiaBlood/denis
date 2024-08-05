const express = require('express');
const router = express.Router();
const repoController = require('../controllers/repoController');

router.get('/repos/:idOrName', repoController.getRepoByIdOrName);
router.get('/repos', repoController.getAllRepos);
router.post('/sync', repoController.syncWithGitHub);

module.exports = router;
