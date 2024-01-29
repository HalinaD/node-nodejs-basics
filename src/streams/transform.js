import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform ({
        transform(data, encoding, callback) {
            const reversedChunk = data.toString().split('').reverse().join('');
            this.push(reversedChunk);
            callback();
        }
    })
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();