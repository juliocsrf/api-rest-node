import app from './app';

const port = 3000;
app.listen(port, () => {
    console.log();
    console.log(`Server running on port ${port}`);
    console.log(`Ctrl + Click on http://127.0.0.1:${port}`);
});
