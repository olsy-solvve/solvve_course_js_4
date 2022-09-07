import express from 'express';
import router from '../router/index.js';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(router);

app.get('/', (req, res) => {
        res.send('<i>test</i>')
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;

