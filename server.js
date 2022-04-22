import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

// routes import
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api', authRouter);
app.use('/api', userRouter);

// Connect to MongoDB
const URI = process.env.MONGODB_URI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB');
    }
  },
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
