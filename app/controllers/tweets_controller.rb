class TweetsController < ApplicationController

	def index
		render json: @@client.search(params[:url]).take(10)
	end

	private

	@@client = Twitter::REST::Client.new do |config|
		config.consumer_key = ENV["TWITTER_CONSUMER_KEY"]
		config.consumer_secret = ENV["TWITTER_CONSUMER_SECRET"]
	end

end
