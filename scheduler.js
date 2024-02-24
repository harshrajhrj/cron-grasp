// article : https://medium.com/@shriharimohan/node-js-cron-handling-overlapping-tasks-like-a-noob-d8627b493496
import { CronJob } from 'cron'
import { nanoid } from 'nanoid'
let isJobRunning = false

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const job = new CronJob('*/5 * * * * *', async () => {
    if (isJobRunning) {
        console.log("__ JOB SKIPPED __ ")
        return
    }
    isJobRunning = true
    try {
        const id = nanoid(10)
        console.log("\n\n__ JOB RUNNING __ ", id, new Date())
        /* Your  functionality goes here 
      I have used a delay function to 
      simulate a long running job */
        await delay(60000)
        isJobRunning = false
        console.log("__ JOB COMPLETED __ ", id, new Date())
    }
    catch (err) {
        console.error(err);
    }
})

job.start();