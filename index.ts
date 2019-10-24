import { Airtable } from './airtable';
import { CsvParser } from './csv-parser';

// 1. Parse from raw data
const parser = new CsvParser();

// 2. Sync to Airtable
Airtable.sync(parser.data).then(() => {
  console.log('done');
});
