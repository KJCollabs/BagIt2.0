-- Set the DB
USE bagit_DB;

-- Set default values for date fields 
ALTER TABLE `Category` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `Category` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

ALTER TABLE `items` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `items` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

ALTER TABLE `User` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `User` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

-- Populate users
INSERT INTO User
    (id, user_name)
VALUES
    (1, 'Sam'),
    (2, 'Harry P'),
    (3, 'Tyrion'),
    (4, 'Voldamort'),
    (5, 'Melkor');

-- Populate categories 
INSERT INTO Category
    (id,category_name)
VALUES
    (1, 'Bread'),
    (2, 'Meat'),
    (3, 'Dairy'),
    (4, 'Produce'),
    (5, 'Seafood'),
    (6, 'Canned Goods'),
    (7, 'Baking and Cooking'),
    (8, 'Snacks'),
    (9, 'Drinks'),
    (10, 'Wine and Beer'),
    (11, 'Hygiene'),
    (12, 'Household Items'),
    (13, 'Laundry'),
    (14, 'Baby Stuff'),
    (15, 'Cosmetics'),
    (16, 'Paper Products'),
    (17, 'Medicine/Remedies'),
    (18, 'Freezer'),
    (19, 'Oils'),
    (20, 'Spices'),
    (21, 'Pasta'),
    (22, 'Cleaning Products'),
    (23, 'Deli'),
    (24, 'General'),
    (25, 'Bathroom'),
    (26, 'Uncategorized')
;

-- Populate items
INSERT INTO items
    (id,items_name,active,shopped,fav,CategoryId,UserId)
VALUES
    (1, 'Toothpaste', true, true, false, 1, 1),
    (2, 'Butter Beer', true, true, true, 10, 2),
    (3, 'Brisket', true, false, false, 2, 3),
    (4, 'Beef Jerky', false, false, false, 8, 4),
    (5, 'Yeast', false, true, true, 7, 4);