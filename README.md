# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mailaddless|integer|null: false|
|password|integer|null: false|

### Association
has_many :posts
has_many :groups_users
has_many :groups, through: :groups_users

## groups_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :group


## postテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
has_many :users, through :groups_user
has_many :groups_users
has_many :posts