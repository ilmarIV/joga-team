const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index', {
            articles: result
        })
    })
}

const deleteArticleBySlug =(req, res) =>{
// Check if the 'deleted_articles' table exists
   let sql = `SHOW TABLES LIKE 'deleted_articles'`;
    db.query(sql, (error, result) => {
       let article = result[0]
        console.log(article)
    // If the table does not exist, create it

     })
}


const getArticleBySlug = (req, res) => {
    let sql = `SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
        let article = result[0]
        let author_id = article.author_id
        let sql = `SELECT * FROM author WHERE id="${author_id}"`
        db.query(sql, (error, result) => {
            const author = result[0]
            article[`author_name`] = author.name
            res.render('article', {
                article:article
            })
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    deleteArticleBySlug
}