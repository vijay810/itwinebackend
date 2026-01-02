// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('../config/db');
// const errorHandler = require('../middlewares/error.middleware');

// const app = express();

// /* -------------------- MIDDLEWARES -------------------- */
// app.use(cors());
// app.use(express.json());

// /* -------------------- ROUTES -------------------- */
// app.use('/auth', require('../routes/auth.routes'));
// app.use('/leave', require('../routes/leave.routes'));
// app.use('/clients', require('../routes/clients.routes'));
// app.use('/user', require('../routes/user.routes'));
// app.use('/news', require('../routes/news.routes'));

// /* -------------------- ERROR HANDLER -------------------- */
// app.use(errorHandler);

// const PORT = process.env.PORT || 4000;

// /* -------------------- START SERVER -------------------- */
// const startServer = async () => {
//    await connectDB();

//    app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//    });
// };

// startServer();



require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');
const errorHandler = require('../middlewares/error.middleware');

const app = express();

/* -------------------- MIDDLEWARES -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- ROUTES -------------------- */
app.use('/auth', require('../routes/auth.routes'));
app.use('/leave', require('../routes/leave.routes'));
app.use('/clients', require('../routes/clients.routes'));
app.use('/user', require('../routes/user.routes'));
app.use('/news', require('../routes/news.routes'));

/* -------------------- ERROR HANDLER -------------------- */
app.use(errorHandler);

/* -------------------- DB CONNECTION -------------------- */
connectDB();

/* -------------------- LOCAL SERVER ONLY -------------------- */
if (process.env.NODE_ENV !== 'production') {
   const PORT = process.env.PORT || 4000;
   app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
   });
}

module.exports = app;

