import React from 'react';

export default ({tweet}) => {
	return (
		<li className='tweet'>
			<img className='profile-picture' src={tweet.user.profile_image_url} alt={`${tweet.user.name}'s twitter profile picture`}/>
			<span className='user-name'>{tweet.user.name}</span>
			<a className='handle' href={`https://twitter.com/${tweet.user.screen_name}`} target='_blank'>@{tweet.user.screen_name}</a>
			<span className='date'>{tweet.created_at.split('+')[0]}</span>
			<span className='text'>{tweet.text}</span>
		</li>
	);
}
// TODO Parse date better with date parser//
