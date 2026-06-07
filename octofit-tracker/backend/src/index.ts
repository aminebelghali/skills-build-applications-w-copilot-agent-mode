import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit-tracker';

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

async function startServer() {
  try {
    await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB at ${mongoUri}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }

  app.listen(port, () => {
    console.log(`OctoFit backend running on http://localhost:${port}`);
  });
}

void startServer();
