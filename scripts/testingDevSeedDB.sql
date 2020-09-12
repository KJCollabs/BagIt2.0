-- Set the DB
USE bagIt2_DB;

-- Set default values for date fields 
ALTER TABLE `Category` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW
();
ALTER TABLE `Category` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW
() ON
UPDATE NOW();

ALTER TABLE `items` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW
();
ALTER TABLE `items` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW
() ON
UPDATE NOW();

ALTER TABLE `User` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW
();
ALTER TABLE `User` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW
() ON
UPDATE NOW();

-- Populate users
INSERT INTO User
    (id, user_name, createdAt, updatedAt)
VALUES
    (1, 'Sam', current_date(), current_date()),
    (2, 'Harry P', current_date(), current_date()),
    (3, 'Tyrion', current_date(), current_date()),
    (4, 'Voldamort', current_date(), current_date()),
    (5, 'Melkor', current_date(), current_date());

-- Populate categories 
INSERT INTO Category
    (id,category_name, createdAt, updatedAt)
VALUES
    (1, 'Bread', current_date(), current_date()),
    (2, 'Meat', current_date(), current_date()),
    (3, 'Dairy', current_date(), current_date()),
    (4, 'Produce', current_date(), current_date()),
    (5, 'Seafood', current_date(), current_date()),
    (6, 'Canned Goods', current_date(), current_date()),
    (7, 'Baking and Cooking', current_date(), current_date()),
    (8, 'Snacks', current_date(), current_date()),
    (9, 'Drinks', current_date(), current_date()),
    (10, 'Wine and Beer', current_date(), current_date()),
    (11, 'Hygiene', current_date(), current_date()),
    (12, 'Household Items', current_date(), current_date()),
    (13, 'Laundry', current_date(), current_date()),
    (14, 'Baby Stuff', current_date(), current_date()),
    (15, 'Cosmetics', current_date(), current_date()),
    (16, 'Paper Products', current_date(), current_date()),
    (17, 'Medicine/Remedies', current_date(), current_date()),
    (18, 'Freezer', current_date(), current_date()),
    (19, 'Oils', current_date(), current_date()),
    (20, 'Spices', current_date(), current_date()),
    (21, 'Pasta', current_date(), current_date()),
    (22, 'Cleaning Products', current_date(), current_date()),
    (23, 'Deli', current_date(), current_date()),
    (24, 'General', current_date(), current_date()),
    (25, 'Bathroom', current_date(), current_date()),
    (26, 'Uncategorized', current_date(), current_date())
;

-- Populate items
INSERT INTO items
    (id,items_name,active,shopped,fav,CategoryId,UserId, createdAt, updatedAt)
VALUES
    (1, 'Toothpaste', true, true, false, 1, 1, current_date(), current_date()),
    (2, 'Butter Beer', true, true, true, 10, 2, current_date(), current_date()),
    (3, 'Brisket', true, false, false, 2, 3, current_date(), current_date()),
    (4, 'Beef Jerky', false, false, false, 8, 4, current_date(), current_date()),
    (5, 'Yeast', false, true, true, 7, 4, current_date(), current_date());