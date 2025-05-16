require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());

const routes = require('./routes/index');
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB 연결 성공');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 서버 실행 중: http://0.0.0.0:${PORT}`);
  });
}).catch(err => {
  console.error('❌ MongoDB 연결 실패:', err);
});
