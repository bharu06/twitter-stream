class Tweet < ApplicationRecord

  def self.create_or_update_tweet(tweet_id, tweet)
    if Tweet.exists?(tweet_id: tweet_id)
      tweet_obj = Tweet.find_by(tweet_id: tweet_id)
    else
      tweet_obj = Tweet.new
    end
    tweet_obj.tweet_id = tweet_id
    tweet_obj.tweet = tweet
    tweet_obj.save
  end

end
