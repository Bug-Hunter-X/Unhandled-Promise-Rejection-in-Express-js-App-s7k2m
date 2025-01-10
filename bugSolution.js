const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate an error
        throw new Error('Something went wrong!');
      } else {
        res.send('Hello, world!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});