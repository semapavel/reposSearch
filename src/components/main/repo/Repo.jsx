import React from 'react';
import './repo.css'

const Repo = (props) => {
	const repo = props.repo

	return (
		<div className='repo'>
			<div className="repo-header">
				<div className="repo-header-name"><a href={repo.html_url}>{repo.name}</a></div>
				<div className="repo-header-star">{repo.stargazers_count}</div>
			</div>
			<div className="repo-last-commit">{repo.updated_at}</div>
			<a href={repo.html_url} className="repo-link">Ссылка на репозиторий: {repo.html_url}</a>			
		</div>
	);
};

export default Repo;