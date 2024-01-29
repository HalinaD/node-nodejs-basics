import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(fileToWrite);
    
    process.stdin.pipe(writableStream);
};

await write();