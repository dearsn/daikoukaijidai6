import { AirtableProducts } from './airtable-products';
import { CsvParser } from './csv-parser';

// 1. Parse from raw data
const parser = new CsvParser();

// 2. Sync to Airtable
AirtableProducts.sync(parser.data).then(() => {
  console.log('done');
});
