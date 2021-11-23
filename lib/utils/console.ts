import chalk from 'chalk'
import figlet from 'figlet'

export const log = (content: string) => console.log(chalk.greenBright(content))
export const warn = (content: string) => console.log(chalk.yellowBright(content))
export const error = (content: string) => console.log(chalk.redBright(content))
export const startLogo = (content: string) => figlet(content, (err: string, data: string) => (err ? error('Start Figlet content went wrong...') : log(data)))
