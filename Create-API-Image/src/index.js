import express from 'express'
import mysql from 'mysql2'
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import cors from 'cors'
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssword123',
  database: 'mydb'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/image/:id', (req, res) => {
  const imageId = req.params.id;
  const query = 'SELECT imagePath FROM images WHERE id = ?';

  connection.query(query, [imageId], (error, results) => {
    if (error) return res.status(500).json({ error });
    if (results.length > 0) {
      let i = 0
      const imagePath = join(__dirname, 'public', path.basename(results[i++].imagePath));
      res.sendFile(imagePath);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
