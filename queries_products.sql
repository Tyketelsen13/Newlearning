-- Comments in SQL Start with dash-dash --

-- INSERT INTO products
--   (name, price, can_be_returned)
-- VALUES
--   ('chair', 44.00, 'f');


-- INSERT INTO products
--   (name, price, can_be_returned)
-- VALUES
--   ('stool', 25.99, 't');

-- INSERT INTO products
--   (name, price, can_be_returned)
-- VALUES
--   ('table', 124.00, 'f');

-- SELECT * FROM products;

-- SELECT name FROM products;

-- SELECT name, price FROM products;

-- -- INSERT INTO products
--   (name, price, can_be_returned)
-- VALUES
--   ('hammock', 99.00, 't');

-- SELECT * FROM products WHERE can_be_returned;

-- SELECT * FROM products WHERE price < 44.00;

-- SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;

-- UPDATE products SET price = price - 20;

-- DELETE FROM products WHERE price < 25;

-- UPDATE products SET price = price + 20;

-- UPDATE products SET can_be_returned = 't';

-- Part 2

-- SELECT * FROM analytics;

-- -- SELECT * FROM analytics 
--   WHERE id = 1880;

-- SELECT id, app_name FROM analytics
--    WHERE last_updated = '2018-08-01';

-- SELECT category, COUNT(*) FROM analytics 
--   GROUP BY category;

-- SELECT * FROM analytics 
--   ORDER BY reviews DESC 
--   LIMIT 5;

-- SELECT * FROM analytics 
--   WHERE rating >= 4.8 
--   ORDER BY reviews DESC
--   LIMIT 1;

-- SELECT category, AVG(rating) FROM analytics 
--   GROUP BY category 
--   ORDER BY avg DESC;

--   SELECT app_name, price, rating FROM analytics 
--   WHERE rating < 3 
--   ORDER BY price DESC 
--   LIMIT 1;

-- SELECT * FROM analytics 
--   WHERE min_installs <= 50 
--     AND rating IS NOT NULL 
--   ORDER BY rating DESC;

--   SELECT app_name FROM analytics
--   WHERE rating < 3 AND reviews >= 10000;

--   SELECT * FROM analytics
--   WHERE price BETWEEN 0.1 and 1 
--   ORDER BY reviews DESC 
--   LIMIT 10;

--   SELECT * FROM analytics 
--   WHERE last_updated = (SELECT MIN(last_updated) FROM analytics);

--   SELECT * FROM analytics
--   ORDER BY last_updated LIMIT 1;

--   SELECT * FROM analytics 
--   WHERE price = (SELECT MAX(price) FROM analytics);

--   SELECT * FROM analytics
--   ORDER BY price DESC LIMIT 1;

--   SELECT SUM(reviews) AS "All the Reviews" FROM analytics;

--   SELECT category FROM analytics 
--   GROUP BY category 
--   HAVING COUNT(*) > 300;

--   SELECT app_name, reviews, min_installs,  min_installs / reviews AS proportion
--   FROM analytics
--   WHERE min_installs >= 100000
--   ORDER BY proportion DESC
--   LIMIT 1;
