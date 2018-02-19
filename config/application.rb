require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Twitter
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.middleware.insert_before Rack::Sendfile, Rack::Cors do
      allow do
        origins '*'

        resource '*',
        :headers => :any,
        :methods => [:get, :post, :delete, :put, :patch, :options, :head],
        :max_age => 0
      end
    end

    config.autoload_paths += ["#{config.root}/app/services", "#{config.root}/app/workers", "#{config.root}/lib"]
    config.eager_load_paths += ["#{config.root}/app/services", "#{config.root}/app/workers", "#{config.root}/lib"]


    config.after_initialize do
      twitter_obj = TwitterStreaming::Client.new()
      twitter_obj.streaming_tweets()
    end

  end
end
