
import fg from 'fast-glob'
import getSrcDirContent from '../utils/get-app-dir'
import { log, error } from './../utils/console'
function getModuleFile(entry, type) {
    return fg.sync(`${entry}/**${type}.ts`)
}
function generateRouter(app) {
    const modulesPath = getSrcDirContent('modules')
    console.log('modulesPath', modulesPath)
    const entries = fg.sync('src/**/*', { onlyDirectories: true })

    entries.forEach(async entry => {
        const route = getModuleFile(entry, 'route')[0]
        const controller = getModuleFile(entry, 'controller')[0]
        if (route && controller) {
            const start = new Date().getTime()
            const router = await import(process.cwd() + '/' + route)
            const Controller = await import(process.cwd() + '/' + controller)
            router.default(new Controller.default(12321313131))
            const end = new Date().getTime()
            log(`[Generate Route] ${route} ${end - start} ms`)
        } else {
            error('route && controller')
        }
    })
}

export default generateRouter
