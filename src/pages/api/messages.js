// import { promises as fs } from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'src/json');
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents);
// }

// Import dependencies
// import { promises as fs } from 'fs';
import { google } from 'googleapis';

const service = google.sheets('v4');
import credentials from './credentials.json';

// Configure auth client
const authClient = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/spreadsheets']
);

export default async function handler(req, res) {
  try {
    // Authorize the client
    const token = await authClient.authorize();

    // Set the client credentials
    authClient.setCredentials(token);

    // Get the rows
    const response = await service.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: '1a-q0c182ewoXwckPQe1xdYcqPWDJ8IPURd6NAarfqZo',
      range: 'B:C',
    });

    // All of the answers
    const answers = [];

    // Set rows to equal the rows
    const rows = response.data.values;

    // Check if we have any data and if we do add it to our answers array
    if (rows.length) {
      // Remove the headers
      rows.shift();

      // For each row
      for (const row of rows) {
        answers.push({ timeStamp: row[0], answer: row[1] });
      }
    } else {
      console.log('No data found.');
    }

    res.status(200).json(answers);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}
