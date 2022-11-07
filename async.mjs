
function samplePromise() {
    return Promise.resolve("Eko");
}

const data = await samplePromise();
console.info(data);
