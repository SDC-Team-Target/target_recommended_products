DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE `categories` (
  `category_id` INT NOT NULL,
  `category_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`category_id`));

CREATE TABLE `items` (
  `item_id` INT NOT NULL,
  `item_name` VARCHAR(150) NOT NULL,
  `category` INT NOT NULL,
  `item_price` DECIMAL(5,2) NOT NULL,
  `img_url` VARCHAR(200) NULL,
  PRIMARY KEY (`item_id`),
  FOREIGN KEY (`category`) REFERENCES `categories` (`category_id`));

-- LOAD DATA LOCAL INFILE "../data_test.csv" INTO TABLE boatdb.boats
-- FIELDS TERMINATED BY ','
-- LINES TERMINATED BY '\n'
-- IGNORE 1 LINES
-- (item_id, item_name, category, item_price, img_url);

INSERT INTO `categories` (`category_id`, `category_name`) VALUES ('1', 'Food');
INSERT INTO `categories` (`category_id`, `category_name`) VALUES ('2', 'Kitchen');
INSERT INTO `categories` (`category_id`, `category_name`) VALUES ('3', 'Electronics');
INSERT INTO `categories` (`category_id`, `category_name`) VALUES ('4', 'Toys');
INSERT INTO `categories` (`category_id`, `category_name`) VALUES ('5', 'Cleaning Supplies');

-- LOCATION: /Users/ariasmariella/dumps/Dump20200805


INSERT INTO `items` VALUES 
    (1,'Granny Smith Apples - 3lb Bag - Good & Gather™',1,3.89,'https://target.scene7.com/is/image/Target/GUEST_c39ffa49-ed34-41d6-a6b1-b4d05a253bfa?wid=1401&hei=1401&fmt=webp'),
    (2,'Pink Lady Apple -each',1,0.99,'https://target.scene7.com/is/image/Target/GUEST_2857045c-48ff-4234-a3e2-02a7e992da2e?wid=1401&hei=1401&fmt=webp'),
    (3,'Spam Original Lunch Meat 12oz',1,2.99,'https://target.scene7.com/is/image/Target/GUEST_439b381d-5e22-4015-b833-a4399f323205?wid=1401&hei=1401&fmt=webp'),
    (4,'Russet Potatoes 5lb bag',1,2.49,'https://target.scene7.com/is/image/Target/GUEST_a1f7a423-ac95-46da-ad52-3ddb2c3873ab?wid=1401&hei=1401&fmt=webp'),
    (5,'Lay\'s Classic Potato Chips 8 oz',1,3.59,'https://target.scene7.com/is/image/Target/GUEST_923a37f2-95b7-4a86-90b6-9c506bc38aad?wid=1401&hei=1401&fmt=webp'),
    (6,'Blue Bell Vanilla Ice Cream Cups',1,7.19,'https://target.scene7.com/is/image/Target/GUEST_622948d2-25e9-4348-b9a3-44afadab165a?wid=1401&hei=1401&fmt=webp'),
    (7,'DiGiorno Rising Crust Pepperoni Frozen Pizza',1,5.49,'https://target.scene7.com/is/image/Target/GUEST_2bb1c8bf-0da4-47d6-a25c-e6f59d3de083?wid=1401&hei=1401&fmt=webp'),
    (8,'Kraft Macaroni & Cheese Dinner Original -7.25oz',1,0.89,'https://target.scene7.com/is/image/Target/GUEST_99f72f1b-791c-48bc-9bc9-4fef9c6eaeca?wid=1401&hei=1401&fmt=webp'),
    (9,'Oscar Mayer Center Cut Original Bacon -12oz',1,5.99,'https://target.scene7.com/is/image/Target/GUEST_382b8e86-ec43-4edb-a593-94c17c4af7d6?wid=1401&hei=1401&fmt=webp'),
    (10,'Chicken Caesar Salad Bowl -6.25oz- Good & Gather',1,3.49,'https://target.scene7.com/is/image/Target/GUEST_8a76b652-766f-4706-912c-b3e085611339?wid=1401&hei=1401&fmt=webp'),
    (11,'Lindt Lindor Assorted Chocolate Truffles -6oz',1,4.79,'https://target.scene7.com/is/image/Target/GUEST_57d3b498-f8b7-406b-b649-925fd5dbe16e?wid=700&hei=700&qlt=80&fmt=webp'),
    (12,'Sour Patch Kids Assorted Soft & Cherwy Candy -30.4oz',1,5.29,'https://target.scene7.com/is/image/Target/GUEST_dfa38470-5d67-426c-86dc-f137d89faf2d?wid=1401&hei=1401&fmt=webp'),
    (13,'Dynasty Jasmine Rice 32oz',1,2.99,'https://target.scene7.com/is/image/Target/GUEST_a43e8c89-91e2-47d1-a812-3efd6566e1b0?wid=1401&hei=1401&fmt=webp'),
    (14,'Maruchan Ramen Noodle Soup Mix with Chicken Flavor',1,0.39,'https://target.scene7.com/is/image/Target/GUEST_30f9586e-7470-4ef8-ab91-d3ac01aa6675?wid=1401&hei=1401&fmt=webp'),
    (15,'Eggland\'s Best Cage-Free Grade A Large Brown Eggs - 12ct',1,3.59,'https://target.scene7.com/is/image/Target/GUEST_dce6e3dc-7aa6-4d2c-9fc4-298e9c5522b2?wid=1401&hei=1401&fmt=webp'),
    (16,'Bimbo Soft White Bread - 20oz',1,1.99,'https://target.scene7.com/is/image/Target/GUEST_1d1a4acb-7933-4ef6-b11d-e54dc357c383?wid=1401&hei=1401&fmt=webp'),
    (17,'FIJI Natural Artesian Water - 6pk/16.9 fl oz Bottles',1,6.99,'https://target.scene7.com/is/image/Target/GUEST_e9bb2324-c7cd-4335-a303-9b1aabbd67d5?wid=1401&hei=1401&fmt=webp'),
    (18,'Coca-Cola - 12pk/12 fl oz Cans',1,4.00,'https://target.scene7.com/is/image/Target/GUEST_1403b8a0-3df1-4fdd-b64a-fbdced95e7d9?wid=1401&hei=1401&fmt=webp'),
    (19,'Corona Extra Lager Beer - 12pk/12 fl oz Bottles',1,15.99,'https://target.scene7.com/is/image/Target/GUEST_c09e2da8-a320-4e93-b76a-10c663f4509f?wid=1401&hei=1401&fmt=webp'),
    (20,'Chips Ahoy! Original Chocolate Chip Cookies -13oz',1,2.69,'https://target.scene7.com/is/image/Target/GUEST_a79e9210-c5d3-4fb1-8b92-afa8fcfb9d22?wid=1401&hei=1401&fmt=webp'),
    (21,'OXO Softworks Corkscrew',2,7.99,'https://target.scene7.com/is/image/Target/GUEST_ecd16c47-a284-4574-a8ee-0aefd3b0e871?wid=325&hei=325&qlt=80&fmt=webp'),
    (22,'Oster Classic Series 5-Speed Blender - Black BLSTCP-B00-000',2,19.99,'https://target.scene7.com/is/image/Target/GUEST_678159fd-3482-4ef0-af0f-9ede45a1aba7?wid=325&hei=325&qlt=80&fmt=webp'),
    (23,'Sunbeam 2 Slice Wide-Slot Toaster - Brushed Stainless Steel TSSBTRSB04',2,16.99,'https://target.scene7.com/is/image/Target/GUEST_8cbce1ab-9e22-4e87-8828-397ec97fc2e6?wid=325&hei=325&qlt=80&fmt=webp'),
    (24,'KitchenAid Variable-speed Cordless Hand Blender',2,99.99,'https://target.scene7.com/is/image/Target/GUEST_5ab9c4e5-43c8-467c-9831-0d9eedb06daf?wid=325&hei=325&qlt=80&fmt=webp'),
    (25,'Chefman 3.7qt Digital Air Fryer',2,74.99,'https://target.scene7.com/is/image/Target/GUEST_a70fade3-6304-4a2d-8c05-0150a5078ae8?wid=325&hei=325&qlt=80&fmt=webp'),
    (26,'Takeya Flash Chill Iced Tea Maker',2,33.99,'https://target.scene7.com/is/image/Target/GUEST_2d318890-9821-4825-8a63-4f9a86127a8f?wid=325&hei=325&qlt=80&fmt=webp'),
    (27,'NutriBullet Blender Combo',2,139.99,'https://target.scene7.com/is/image/Target/GUEST_7b77659b-180f-4f15-a781-c8f6a8c66e23?wid=325&hei=325&qlt=80&fmt=webp'),
    (28,'Set of 4 Coasters Natural Acacia with Gold Metal - Threshold',2,10.00,'https://target.scene7.com/is/image/Target/GUEST_c482134d-8d30-4535-a372-86fb73c19e9c?wid=325&hei=325&qlt=80&fmt=webp'),
    (29,'Cravings by Chrissy Teigen 13.28oz Mini Cast-Iron Dutch Oven',2,9.99,'https://target.scene7.com/is/image/Target/GUEST_e983a1c4-f0ed-4eeb-976c-d09679eea782?wid=325&hei=325&qlt=80&fmt=webp'),
    (30,'Lodge 6qt Cast Iron Enamel Dutch Oven',2,69.90,'https://target.scene7.com/is/image/Target/GUEST_2928fff3-9da0-4a78-93ed-d837296733f8?wid=325&hei=325&qlt=80&fmt=webp'),
    (31,'Calphalon Premier Hard Anodized Nonstick Space Saving Fry Pan Combo',2,74.99,'https://target.scene7.com/is/image/Target/GUEST_28556332-49e4-48a3-a56f-844e35aad835?wid=325&hei=325&qlt=80&fmt=webp'),
    (32,'Calphalon Premier 10pc Hard Anodized Nonstick Space Saving Cookware Set',2,469.99,'https://target.scene7.com/is/image/Target/GUEST_46aafd05-0ad7-456b-90d9-1c66c6be7eb7?wid=325&hei=325&qlt=80&fmt=webp'),
    (33,'Stoneware Sugar Cellar Cream - Hearth & Hand™ with Magnolia',2,5.99,'https://target.scene7.com/is/image/Target/GUEST_1eaef37b-5328-4143-95a5-4d7df1d56a85?wid=325&hei=325&qlt=80&fmt=webp'),
    (34,'Set of 4 Natural Acacia Dip Bowls - Threshold',2,12.99,'https://target.scene7.com/is/image/Target/GUEST_fe6dbcf9-d98a-473e-a2d1-e51d10cd09c1?wid=325&hei=325&qlt=80&fmt=webp'),
    (35,'Cheese Slicer Marble/Wood',2,20.00,'https://target.scene7.com/is/image/Target/GUEST_aa401f62-2ac4-4959-a47f-20b3aaf94142?wid=325&hei=325&qlt=80&fmt=webp'),
    (36,'Set of 4 Cheese Knives Marble White',2,18.00,'https://target.scene7.com/is/image/Target/GUEST_aa863aed-19a4-4739-8ccf-48ddab85c033?wid=325&hei=325&qlt=80&fmt=webp'),
    (37,'Farberware 15pc Stainless Steel Knife Block Set',2,39.99,'https://target.scene7.com/is/image/Target/GUEST_13456a17-dd53-48ad-8d2c-c1707af26801?wid=325&hei=325&qlt=80&fmt=webp'),
    (38,'Pryce Silverware Set 20-pc. Stainless Steel',2,10.00,'https://target.scene7.com/is/image/Target/GUEST_e8c21fbe-66ca-49c5-a128-598cd1f4e896?wid=325&hei=325&qlt=80&fmt=webp'),
    (39,'Spectrum Euro Fruit Tree',2,19.99,'https://target.scene7.com/is/image/Target/GUEST_5b0ad4d8-98a6-4640-acee-faf0d99150f4?wid=325&hei=325&qlt=80&fmt=webp'),
    (40,'Telford Tumbler 12pc Glass Tumblers',2,20.00,'https://target.scene7.com/is/image/Target/GUEST_503df25a-3698-4184-9546-4162d89aa13e?wid=325&hei=325&qlt=80&fmt=webp'),
    (41,'Samsung QN43LS03T 43\" The Frame QLED 4K UHD Smart TV\"',3,997.99,'https://target.scene7.com/is/image/Target/GUEST_6f74afd5-531d-47cb-9c4e-6db405a54fd2?wid=700&hei=700&qlt=80&fmt=webp'),
    (42,'LG 24\" Class 720p 60Hz LED HDTV - 24LF454B\"',3,99.99,'https://target.scene7.com/is/image/Target/GUEST_c3568e75-6dc5-4111-be9b-3abd8cdac087?wid=700&hei=700&qlt=80&fmt=webp'),
    (43,'VIZIO D-Series 40\" Class (39.50\"\" Diag.) 1080p Full-Array LED Smart HDTV - D40f-G9\"',3,199.99,'https://target.scene7.com/is/image/Target/GUEST_f6c78483-a0de-4218-a8bb-f93ef3612be6?wid=700&hei=700&qlt=80&fmt=webp'),
    (44,'Apple AirPods Pro',3,249.99,'https://target.scene7.com/is/image/Target/GUEST_eaacaa8a-df82-40ec-837d-30e949d670aa?wid=700&hei=700&qlt=80&fmt=webp'),
    (45,'Bose QuietComfort 35 Wireless Headphones II',3,279.99,'https://target.scene7.com/is/image/Target/GUEST_7f596963-79ef-498f-904a-391eabbf23ee?wid=700&hei=700&qlt=80&fmt=webp'),
    (46,'Bose SoundSport Free True Wireless Earbuds',3,199.99,'https://target.scene7.com/is/image/Target/GUEST_f55ffe42-a855-43e3-b051-c996957711e4?wid=700&hei=700&qlt=80&fmt=webp'),
    (47,'New Powerbeats Wireless Earphones',3,129.99,'https://target.scene7.com/is/image/Target/GUEST_8add3a09-cc48-4c38-99b4-e13031b23011?wid=700&hei=700&qlt=80&fmt=webp'),
    (48,'PlayStation 4 1TB Console',3,299.99,'https://target.scene7.com/is/image/Target/GUEST_46217070-069f-4de3-9ac3-abc3ea6cdbc5?wid=700&hei=700&qlt=80&fmt=webp'),
    (49,'NBA 2K21: Mamba Forever Edition - PlayStation 4',3,99.99,'https://target.scene7.com/is/image/Target/GUEST_3c4fb705-d62f-440a-ba99-b89f6cfe7ba7?wid=700&hei=700&qlt=80&fmt=webp'),
    (50,'Call of Duty: Modern Warfare - PlayStation 4',3,59.99,'https://target.scene7.com/is/image/Target/GUEST_3da5172e-487a-49fe-a04f-ee5b9af58610?wid=700&hei=700&qlt=80&fmt=webp'),
    (51,'Cyberpunk 2077 - PlayStation 4',3,59.99,'https://target.scene7.com/is/image/Target/GUEST_0f5f5290-af41-410b-ad71-ec84d227ab44?wid=700&hei=700&qlt=80&fmt=webp'),
    (52,'Marvel\'s Avengers - PlayStation 4',3,59.99,'https://target.scene7.com/is/image/Target/GUEST_2aa8bac5-2aac-4649-bacf-47cfe2d4320c?wid=700&hei=700&qlt=80&fmt=webp'),
    (53,'LG 27GN750-B 27 UltraGear 16:9 240Hz Full HD IPS Gaming Monitor with NVIDIA G-Sync Compatible & Adaptive-Sync, HDR 10',3,396.99,'https://target.scene7.com/is/image/Target/GUEST_b9ddfdf6-0bfc-4bca-9a18-2a5f9b556d66?wid=700&hei=700&qlt=80&fmt=webp'),
    (54,'HP 27\" LED Computer Monitor (X3W26AA_ABA)\"',3,199.99,'https://target.scene7.com/is/image/Target/GUEST_5cee568d-7e06-406a-adf2-00d3c7d5f9a5?wid=700&hei=700&qlt=80&fmt=webp'),
    (55,'HP 24\" LED Computer Monitor (1LU21AA_ABA)\"',3,129.99,'https://target.scene7.com/is/image/Target/GUEST_58155920-039d-4906-a0d2-0f66d01e862d?wid=700&hei=700&qlt=80&fmt=webp'),
    (56,'Thermaltake Riing Plus 14 RGB Software Enabled 140mm Case Fan',3,149.99,'https://target.scene7.com/is/image/Target/GUEST_c9c05ada-2644-439c-8196-ea2617f45f13?wid=700&hei=700&qlt=80&fmt=webp'),
    (57,'Thermaltake Matrix Magnetic Fan Filter',3,12.99,'https://target.scene7.com/is/image/Target/GUEST_54a2e6e5-cb39-4258-a033-e250c234bae0?wid=700&hei=700&qlt=80&fmt=webp'),
    (58,'TCL ALTO 5+ 2.1 Channel Sound Bar',3,119.99,'https://target.scene7.com/is/image/Target/GUEST_d643eecd-2ac2-47d1-83ae-c74e45ce2ea9?wid=700&hei=700&qlt=80&fmt=webp'),
    (59,'Amazon Fire TV Stick with 4K Ultra HD Streaming Media Player and Alexa Voice Remote (2nd Generation)',3,49.99,'https://target.scene7.com/is/image/Target/GUEST_200ccc10-6ac5-43e6-a1fe-da0066cff7e7?wid=700&hei=700&qlt=80&fmt=webp'),
    (60,'Roku Streaming Stick+ Black (3810R)',3,49.99,'https://target.scene7.com/is/image/Target/GUEST_aaad6863-6c1e-464d-ba05-ce92ca898edf?wid=700&hei=700&qlt=80&fmt=webp'),
    (61,'Small Foot Wooden Toys Smack the Bird Knock Playset with Hammer',4,24.99,'https://target.scene7.com/is/image/Target/GUEST_2c40751e-2f3f-40f2-91fc-9fa4e825d1c4?wid=1122&hei=1122&fmt=webp'),
    (62,'Transformers Studio Series 68 Deluxe Movie 3 Leadfoot (Target Exclusive)',4,19.99,'https://target.scene7.com/is/image/Target/GUEST_c4105230-a211-4b5a-bcc1-80d8fe2a58fb?wid=1122&hei=1122&fmt=webp'),
    (63,'Marvel Legends Deadpool\'s Head Premium Interactive Head',4,99.99,'https://target.scene7.com/is/image/Target/GUEST_bfa44db5-b13a-444d-9494-4f3e21b46432?wid=1122&hei=1122&fmt=webp'),
    (64,'WWE Wrekkin Slambulance',4,39.99,'https://target.scene7.com/is/image/Target/GUEST_6232c5db-eb4a-4c1a-b186-e9475889108f?wid=1122&hei=1122&fmt=webp'),
    (65,'It (2017) Ultimate Well House Pennywise 7\" Action Figure\"',4,27.99,'https://target.scene7.com/is/image/Target/GUEST_577703bd-63dc-4277-840e-28effad0906d?wid=1122&hei=1122&fmt=webp'),
    (66,'Cabbage Patch Kids 9\" Deluxe Splash N\' Float - Brown Eye Girl Unicorn\"',4,17.99,'https://target.scene7.com/is/image/Target/GUEST_3eede40c-4613-4169-a74f-4a72c4c788b2?wid=1122&hei=1122&fmt=webp'),
    (67,'Cry Babies Kristal Gets Sick & Feels Better',4,49.99,'https://target.scene7.com/is/image/Target/GUEST_60a1bd37-e574-4e90-aee0-39c6b8ace5a6?wid=1122&hei=1122&fmt=webp'),
    (68,'Squishy Human Body Anatomy Kit',4,17.99,'https://target.scene7.com/is/image/Target/GUEST_456eb87c-fc75-4581-b425-7794c217f5ca?wid=1122&hei=1122&fmt=webp'),
    (69,'Thames & Kosmos Gross Gummy Candy Lab',4,14.99,'https://target.scene7.com/is/image/Target/GUEST_03c1627c-9b80-4542-abe3-dddb410ab862?wid=1122&hei=1122&fmt=webp'),
    (70,'Creativity for Kids Grow N\' Glow Terrarium',4,12.99,'https://target.scene7.com/is/image/Target/GUEST_b45c3e84-c74a-423f-b380-d4c9a07ce46d?wid=1122&hei=1122&fmt=webp'),
    (71,'B. toys Toy Drum Set 7 Instruments - Parum Pum Pum',4,21.99,'https://target.scene7.com/is/image/Target/GUEST_b0bdcbd8-00c6-40ae-8c54-a58aff2c90f7?wid=1122&hei=1122&fmt=webp'),
    (72,'VTech Mix And Match-a-Saurus',4,29.99,'https://target.scene7.com/is/image/Target/GUEST_656cdc94-60eb-4d8f-8664-08849a11ab3e?wid=1122&hei=1122&fmt=webp'),
    (73,'Star Wars Walkie Talkies',4,16.99,'https://target.scene7.com/is/image/Target/GUEST_e1b8e907-9128-4b8a-97aa-3b29a0c64276?wid=1122&hei=1122&fmt=webp'),
    (74,'Mira Royal Detective on the Case Detective Set',4,19.99,'https://target.scene7.com/is/image/Target/GUEST_e9941969-be33-4bfc-a702-42981dab796c?wid=1122&hei=1122&fmt=webp'),
    (75,'Melissa & Doug Deluxe Solid-Wood Magic Set With 10 Classic Tricks',4,33.99,'https://target.scene7.com/is/image/Target/GUEST_9ab6ba1c-1f5d-4217-927f-cf9eaca84c3a?wid=1122&hei=1122&fmt=webp'),
    (76,'L.O.L. Surprise! Winter Disco Cottage Playhouse',4,159.99,'https://target.scene7.com/is/image/Target/GUEST_ff7e3011-d4a9-48d6-9df5-5c39789a89b7?wid=1122&hei=1122&fmt=webp'),
    (77,'KidKraft Ocean Front Playhouse',4,299.99,'https://target.scene7.com/is/image/Target/GUEST_cd5a6a70-ff38-4be6-bcd9-25248fb176b2?wid=1122&hei=1122&fmt=webp'),
    (78,'Melissa & Doug Food Truck Indoor Corrugate Playhouse (Over 4\' Long)',4,42.99,'https://target.scene7.com/is/image/Target/GUEST_54487278-6519-4830-ae43-1f699b643df9?wid=1122&hei=1122&fmt=webp'),
    (79,'Mega Bloks CAT Large Dump Truck Construction Set',4,38.99,'https://target.scene7.com/is/image/Target/GUEST_80a20a4a-6307-4a03-9040-4f4206a2a5d9?wid=1122&hei=1122&fmt=webp'),
    (80,'Mega Bloks GJD22 Junior Builder Mini Bulk Tub 180 Piece Large Block Building Set',4,54.99,'https://target.scene7.com/is/image/Target/GUEST_f5f16af9-5b44-4b2b-88e1-5042431e9ab9?wid=1122&hei=1122&fmt=webp'),
    (81,'Lemon & Mint Glass Cleaner - 28 fl oz - Everspring™',5,2.99,'https://target.scene7.com/is/image/Target/GUEST_e33cec82-643b-43fc-b931-f5a48bd9020c?fmt=webp&wid=1400&qlt=80'),
    (82,'Windex Ammonia Free Glass Cleaners - 26oz',5,3.29,'https://target.scene7.com/is/image/Target/GUEST_814d7117-1116-4ee0-94e9-a141c39a693e?fmt=webp&wid=1400&qlt=80'),
    (83,'Mrs. Meyer\'s Lavender Glass Cleaner - 24 fl oz',5,5.49,'https://target.scene7.com/is/image/Target/GUEST_e8dfc63a-0ed3-40ce-b8b6-c9b0518d540b?fmt=webp&wid=1400&qlt=80'),
    (84,'Seventh Generation Sparkling Sea Glass Cleaner - 23oz',5,3.99,'https://target.scene7.com/is/image/Target/GUEST_b6391e74-dbe5-48cb-8139-b088b5e64acc?fmt=webp&wid=1400&qlt=80'),
    (85,'Method Citron Antibacterial All Purpose Spray - 28 fl oz',5,3.49,'https://target.scene7.com/is/image/Target/GUEST_bf27a33a-5310-4ad7-8a46-69f7599cf51f?fmt=webp&wid=1400&qlt=80'),
    (86,'Clorox Disinfecting Bathroom Cleaner Spray Bottle 30 oz',5,3.29,'https://target.scene7.com/is/image/Target/GUEST_458c15a0-0436-40a8-a2be-2f37a572e776?fmt=webp&wid=1400&qlt=80'),
    (87,'CloroxToilet Bowl Cleaner Clinging Bleach Gel - Cool Wave',5,3.29,'https://target.scene7.com/is/image/Target/GUEST_4a4ebaf7-cf5a-4785-bdcc-835efce792ec?fmt=webp&wid=1400&qlt=80'),
    (88,'Seventh Generation Emerald Cypress & Fir Toilet Bowl Cleaner - 32oz',5,2.99,'https://target.scene7.com/is/image/Target/GUEST_b311670e-cbd3-47ad-a6e3-ae9e84b688d1?fmt=webp&wid=1400&qlt=80'),
    (89,'Swiffer Sweeper Dry + Wet All Purpose Floor Mopping and Cleaning Starter Kit with Heavy Duty Cloths - Includes 1 Mop - 10 Refills',5,11.99,'https://target.scene7.com/is/image/Target/GUEST_a3d3a9dc-4628-4c30-afcc-ba0953c55c65?fmt=webp&wid=1400&qlt=80'),
    (90,'Swiffer WetJet Floor Mop Starter Kit 1 Power Mop 5 Mopping Pads 1 Floor Cleaner Liquid Solution',5,22.99,'https://target.scene7.com/is/image/Target/GUEST_d50b49e7-24a5-4ce0-be6c-d8dc7763b9db?fmt=webp&wid=1400&qlt=80'),
    (91,'Arm & Hammer Carpet Odor Eliminator - Pet Fresh - 42.6oz',5,1.99,'https://target.scene7.com/is/image/Target/GUEST_618783df-13a0-4d01-b8ab-aa64e1ed6ed0?fmt=webp&wid=1400&qlt=80'),
    (92,'O-Cedar EasyWring Spin Mop and Bucket System',5,29.99,'https://target.scene7.com/is/image/Target/GUEST_0c0aafc1-fd20-460b-9dc7-b83fa7ad2c89?fmt=webp&wid=1400&qlt=80'),
    (93,'Libman Large Precision Angle Broom with Dustpan',5,12.49,'https://target.scene7.com/is/image/Target/GUEST_9dfbeb6d-d407-4996-a518-884a32affe62?fmt=webp&wid=1400&qlt=80'),
    (94,'Gain flings! Laundry Detergent Pacs Original + Original In-Wash Scent Booster - Bundle',5,14.99,'https://target.scene7.com/is/image/Target/GUEST_92b3bd61-f3d2-400a-83fb-cba07290d826?fmt=webp&wid=1400&qlt=80'),
    (95,'Tide Original Liquid Laundry Detergent - 92 fl oz',5,11.99,'https://target.scene7.com/is/image/Target/GUEST_ad7e1b19-cde1-4056-90cb-496d919a7537?fmt=webp&wid=1400&qlt=80'),
    (96,'All Ultra Free Clear HE Liquid Laundry Detergent - 141oz',5,9.59,'https://target.scene7.com/is/image/Target/GUEST_3b1c2bcf-7dd1-41e4-ab56-22a0040b04fc?fmt=webp&wid=1400&qlt=80'),
    (97,'Bounce Outdoor Fresh Dryer Sheets - 250ct',5,9.99,'https://target.scene7.com/is/image/Target/GUEST_aa4f9f91-8561-42b4-9184-9b04511963f7?fmt=webp&wid=1400&qlt=80'),
    (98,'Gain Original Dryer Sheets - 105ct',5,3.99,'https://target.scene7.com/is/image/Target/GUEST_3be4d86c-4077-4c5d-864b-4a5cdb6638c5?fmt=webp&wid=1400&qlt=80'),
    (99,'Dyson Slim Ball Animal Upright Vacuum',5,349.99,'https://target.scene7.com/is/image/Target/GUEST_1d581f99-14a5-4696-a8c2-3a9778efb97e?fmt=webp&wid=1400&qlt=80'),
    (100,'iRobot Roomba 675 Wi-Fi Connected Robot Vacuum',5,299.99,'https://target.scene7.com/is/image/Target/GUEST_b1bef774-c9eb-4bd0-aab4-3c86a90a14f5?fmt=webp&wid=1400&qlt=80');