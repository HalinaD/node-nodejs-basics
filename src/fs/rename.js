import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destinationFile = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(sourceFile, destinationFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();