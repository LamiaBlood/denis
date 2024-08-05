const express = require('express');
const repoRoutes = require('./routes/repoRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', repoRoutes);

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

// Логика автоматической синхронизации
const syncWithGitHub = require('./services/githubService').syncWithGitHub;

const startSync = () => {
    syncWithGitHub();
    setInterval(syncWithGitHub, 3600000); // Каждые 60 минут
};

startSync();
