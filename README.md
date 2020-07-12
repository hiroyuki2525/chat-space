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
|passward|integer|null: false, foreign_key: true|

### Association
has_many :post
has_many :groups_user
belongs_to :groups_user

## groups_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## postテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
has_many :users
has_many :groups
