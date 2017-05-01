import React from 'react';
import $ from 'jquery';
import Tweet from './Tweet';

export default class TweetList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {url: null, tweets: []};
	}

	componentDidMount(){
		chrome.tabs.getSelected(null, (tab) => {
			const domain = tab.url.replace(/^https?:\/\//, '').split('/')[0];

			this.setState({
				url: domain
			});

			$.ajax({
				url: 'https://twitter-ext.herokuapp.com/tweets',
				contentType: 'application/json',
				data: {url: domain}
			}).done(data => {
				this.setState({tweets: data});
			});
		});
	}
	render() {

		return (
			<div>
				<h1>Tweets from or about {this.state.url}</h1>
				<ul>
					{this.state.tweets.map((tweet) => {
						return <Tweet tweet={tweet}/>;
					})}
				</ul>
			</div>
		)
	}
}
