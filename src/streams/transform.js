import { pipeline, Transform } from 'stream';

const transformPipe = new Transform({
    transform(chunk, encoding, callback){
        const text = chunk.toString().trim();
        const reversedText = text.split('').reverse().join('');
        callback(null, reversedText + "\n");
    }
})
const transform = async () => {
    pipeline(
        process.stdin,
        transformPipe,
        process.stdout,
        (error) => console.error(error)
    )
};

await transform();
