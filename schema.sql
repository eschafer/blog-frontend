DROP TABLE IF EXISTS post;
CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY, title TEXT, content TEXT, published_at TEXT);
INSERT INTO post (id, title, content, published_at)
VALUES (1, 'My first blog post', 'Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.', '2020-10-23T00:00:00.000Z'),
       (2, 'Updating my blog', 'It''s my second blog post! I''m still writing and publishing using Cloudflare Workers + Pages :)', '2020-10-26T00:00:00.000Z');
