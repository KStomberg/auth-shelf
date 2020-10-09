-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item"
(
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item"
    ("description", "image_url", "user_id")
VALUES
    ('Toast', 'https://images.eatthismuch.com/site_media/img/254567_ldementhon_b5307778-b72b-4510-a611-c62a8099f23b.png', 1),
    ('Toast', 'https://images.eatthismuch.com/site_media/img/254567_ldementhon_b5307778-b72b-4510-a611-c62a8099f23b.png', 1),
    ('Toast', 'https://images.eatthismuch.com/site_media/img/254567_ldementhon_b5307778-b72b-4510-a611-c62a8099f23b.png', 1);