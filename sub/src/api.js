
export default function () {
    const DownloadWorker = require('./test-worker.worker?worker')
    const c = new DownloadWorker();
    console.log(c)
}