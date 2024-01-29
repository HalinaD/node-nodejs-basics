import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourcePath = path.join(__dirname, 'files');
    const destinationPath = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourcePath);
        try {
            await fs.access(destinationPath);
            throw new Error('FS operation failed');
        } catch (err) {
            await fs.mkdir(destinationPath);
        }

        const files = await fs.readdir(sourcePath);

        await Promise.all(files.map(async (file) => {
            const sourceFile = path.join(sourcePath, file);
            const destinationFile = path.join(destinationPath, file);
            await fs.copyFile(sourceFile, destinationFile);
        }));

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
