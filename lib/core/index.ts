import express from 'express'
import { startLogo, log } from '../utils/console'
import generateRouter from './router'
import getSrcDirContent from '../utils/get-app-dir'

async function createPlantAppp() {
    const app = express()
    const appConfigPath = getSrcDirContent('config/app.config.ts')
    const appConfg = await import(appConfigPath)
    const port = appConfg.default.port ? appConfg.default.port : 3000
    generateRouter(app)
    app.listen(port, () => {
        startLogo('Start PlantApp Success ...')
        log(`app listening at http://localhost:${port}`)
    })
}
export default createPlantAppp
