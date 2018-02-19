class CreateTweet < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.timestamps
      t.string  "tweet",             limit: 400, null: false
      t.string "tweet_id",             limit: 30, null: false
    end
  end
end
