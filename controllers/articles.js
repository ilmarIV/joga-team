const db = require("../utils/db");

const getAllArticles = (req, res) => {
  let sql = "SELECT * FROM article";
  db.query(sql, (error, result) => {
    res.render("index", {
      articles: result,
    });
  });
};

const deleteArticleBySlug = (req, res) => {
  // Check if the 'deleted_articles' table exists
  let sql = `SHOW TABLES LIKE 'deleted_articles'`;
  db.query(sql, (error, result) => {
    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }
    // If the table does not exist, create it
    if (result.length == 0) {
      // Table 'deleted_articles' does not exist
      let sql = `
      CREATE TABLE IF NOT EXISTS deleted_articles (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      slug varchar(255) NOT NULL,
      image varchar(255) NOT NULL,
      body longtext NOT NULL,
      published datetime NOT NULL,
      author_id int DEFAULT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY (slug),
      KEY (author_id)
      );`;
      db.query(sql, (error, result) => {
        if (error) {
          console.error("Database error:", error);
          return res.status(500).json({ error: "Database error" });
        }
        console.log("Created new table 'deleted_articles'");
      });
    }

    // Table 'deleted_articles' exists

    let sql = `
            INSERT IGNORE INTO deleted_articles (name, slug, image, body, published, author_id)
            SELECT name, slug, image, body, published, author_id
            FROM article
            WHERE slug = ?;
    `;
    db.query(sql, [req.params.slug], (error, result) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }

      if (result.affectedRows > 0) {
        console.log(`Article "${req.params.slug}" stored to deleted_articles successfully!`)
      } else {
        console.log(`Article "${req.params.slug}" already exists in deleted_articles.`)
      }
    });

    //Finally delete the original article.
    let sql2 = `DELETE FROM article WHERE slug ="${req.params.slug}"`;
    db.query(sql2, [req.params.slug], (error, result) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }

      if (result.affectedRows > 0) {
        console.log(`Article "${req.params.slug}" deleted from articles.`)
        return res.json({ success: true, message: "Article deleted successfully." });
      } else {
        console.log(`Article "${req.params.slug}" not found in articles.`)
        return res.json({ success: false, message: "Article not found." });
      }
    });
  });


};

const getArticleBySlug = (req, res) => {
  let sql = `SELECT * FROM article WHERE slug="${req.params.slug}"`;
  db.query(sql, (error, result) => {
    let article = result[0];
    let author_id = article.author_id;
    let sql = `SELECT * FROM author WHERE id="${author_id}"`;
    db.query(sql, (error, result) => {
      const author = result[0];
      article[`author_name`] = author.name;
      res.render("article", {
        article: article,
      });
    });
  });
};

module.exports = {
  getAllArticles,
  getArticleBySlug,
  deleteArticleBySlug,
};

//{}
