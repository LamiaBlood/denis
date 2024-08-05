const githubService = require('../services/githubService');

exports.getRepoByIdOrName = async (req, res) => {
    const { idOrName } = req.params;
    const repo = await githubService.getRepoByIdOrName(idOrName);
    res.json(repo);
};

exports.getAllRepos = async (req, res) => {
    const repos = await githubService.getAllRepos();
    res.json(repos);
};

exports.syncWithGitHub = async (req, res) => {
    await githubService.syncWithGitHub();
    res.send('Синхронизация начата');
};
