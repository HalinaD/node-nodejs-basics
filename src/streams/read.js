import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(fileToRead);
    
    readableStream.pipe(process.stdout);
};

await read();