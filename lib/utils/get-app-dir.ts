import path from 'path'

function getSrcDirContent (name : string) {
    const dir = path.join(process.cwd(), './src', name)
    return dir
}

export default getSrcDirContent