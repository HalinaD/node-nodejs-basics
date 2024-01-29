import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileText = 'I am fresh and young';
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(filePath, fileText, { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();