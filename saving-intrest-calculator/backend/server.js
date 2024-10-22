const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/calculate-interest', (req, res) => {
  const { principal, age, investmentPeriod } = req.body;

  const interestRate=10;

 
  const interestEaarned = principal * interestRate * investmentPeriod;
  const finalage=age + investmentPeriod;
  res.json({ interestEaarned });
  res.json({ finalage });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
