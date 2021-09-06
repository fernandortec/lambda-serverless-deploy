import { app } from '../app'
import serverless from 'serverless-http'

const run = serverless(app)

export { run }