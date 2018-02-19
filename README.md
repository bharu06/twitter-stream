# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version : 
  ruby 2.2.3p173

* System dependencies : 
  npm, ruby, rails, postgres db,

## How to run the service

1) Clone the current repo
2) Run "npm install"
3) Run "bundle install"
4) Change the config/database.yml file with your db credentials.
5) Run "rake db:migrate". This creates the required tables in database. If its failing to create a table you can create table manually using 
```bash
CREATE TABLE public.tweets
(
    id integer NOT NULL DEFAULT nextval('tweets_id_seq'::regclass),
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    tweet character varying(400) COLLATE pg_catalog."default" NOT NULL,
    tweet_id character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tweets_pkey PRIMARY KEY (id)
)
```
6) In Terminal 1 Run "rails s". It starts the backend server.
7) In Terminal 2 Run "npm run start". It starts a webpack lite server which hosts the frontend required files
8) Open localhost:8080 and check the list of all tweets with the filters specified.