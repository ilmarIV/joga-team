const app = require('./utils/app')
const db = require('./utils/db')
const articleRoutes = require('./routes/articles')

app.use('/', articleRoutes)

app.listen(3012, () => {
    console.log('web server is connected')
})