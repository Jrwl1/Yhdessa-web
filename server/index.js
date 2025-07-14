
// Express server setup for Yhdessä Talterapi
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB schema for site content
const contentSchema = new mongoose.Schema({
    section: String,
    content: Object
});

const Content = mongoose.model('Content', contentSchema);

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// API endpoints
app.get('/api/content', async (req, res) => {
    const allContent = await Content.find();
    res.json(allContent);
});

app.put('/api/content/:id', async (req, res) => {
    const updated = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
