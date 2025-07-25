require('dotenv').config();
const dbConfig = require('./config/db.config.js');
const app = require('./app');
const PORT = process.env.PORT || 9090;
//database connection
dbConfig(); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});