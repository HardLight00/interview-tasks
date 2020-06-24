const getFetchTime = () => 1000 + Math.random() * 2000;
    
const numberOfUrls = 20;
const throughput = 5;
const urls = Array(numberOfUrls).fill('url_').map((url, index) => url + index % 10);
const urlsData = Object.fromEntries(
    urls.map(url => [url, url])
);

const fetch = url => new Promise(resolve =>
    setTimeout(() => resolve(urlsData[url]), getFetchTime()));

const getUrls = async (urls, throughput) => {
    urls = [...urls].reverse();
    const workers = new Array(throughput).fill('worker');
    let result = [];
    const cached = {};
    const order = {};
    let loaded = 0;
    await Promise.all(workers.map(async () => {
        while (urls.length !== 0) {
            const url = urls.pop();
            const orderNumber = loaded++;
            if (!cached[url]) {
                cached[url] = fetch(url);
            }
            const data = await cached[url];
            result.push(data);
            order[orderNumber] = result.length - 1;
        }
    }));
    result = result.map((item, index) => result[order[index]])
    return result;
}

getUrls(urls, throughput).then(data => console.log(data))