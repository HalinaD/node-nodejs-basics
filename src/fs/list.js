import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesFolder = path.join(__dirname, 'files');

    try {
        await fs.access(filesFolder);
        const filenames = await fs.readdir(filesFolder);
        console.log(filenames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();