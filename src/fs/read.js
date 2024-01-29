import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const fileText = await fs.readFile(fileToRead, 'utf-8');
        console.log(fileText);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();