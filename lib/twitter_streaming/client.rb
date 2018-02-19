module TwitterStreaming
  class Client

    def initialize()
      client = Twitter::Streaming::Client.new do |config|
        config.consumer_key        = "gJgJYm1TLmObwdVntncqAoI3g"
        config.consumer_secret     = "XRB2grXaLiYr4WeLZb3aHM7iNTbgJ3E8OirqAay9gK7oC00knT"
        config.access_token        = "3011525412-KOOMfDGLzXDOTFDz93HNWa2Ugc2wevW9woL1otW"
        config.access_token_secret = "ni1RtJtKGnxSSdVtnIBAHiGLtIgN5fBi7WPjUTo0e1EV6"
      end
			@client = client
		end


    def streaming_tweets()
      thread = Thread.new {
        topics = ["startup", "India", "Investing", "technology" ]
        @client.filter(track: topics.join(",")) do |object|
          if object.is_a?(Twitter::Tweet)
            id = object.id.to_s
            Tweet.create_or_update_tweet(id, object.text)
          end
        end
      }
    end

  end
end
