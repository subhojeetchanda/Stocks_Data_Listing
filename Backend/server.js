import express from 'express';
import cors from 'cors';
import fs from 'fs';
import csv from 'csv-parser';

const app = express();
const PORT = 3000;
app.use(cors());

let companyData = [];

// Load CSV data into memory
fs.createReadStream('dump.csv')
  .pipe(csv())
  .on('data', (row) => {
    companyData.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// API to get the list of companies
app.get('/companies', (req, res) => {
  const companies = [...new Set(companyData.map(item => item.index_name))];
  res.json(companies);
});

// API to get data for a specific company
app.get('/company/:name', (req, res) => {
  const { name } = req.params;
  const data = companyData.filter(item => item.index_name === name);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
