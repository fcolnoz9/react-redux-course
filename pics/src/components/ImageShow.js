function ImageShow({image}) {

	const imageTags =  image.tags.map((tag, index)=>{
		return(<span className="tag" key={tag.title-image.id}>{tag.title}</span>);
	});

	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-3by2">
					<img src={image.urls.small} alt={image.alt_description}/>
				</figure>
			</div>

			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image">
							<img className="image is-48x48" src={image.urls.thumb} alt={image.alt_description}/>
						</figure>
					</div>
					<div className="media-content">
						<p className="title is-4">{image.alt_description || 'No has Description'}</p>
						<p className="subtitle is-6">{`@${image.user.twitter_username || 'NoTwitterUser'} `} </p>
					</div>
				</div>

				<div className="content">
					{image.alt_description}
					<br/><br/>
					<div className="tags are-small">
						{imageTags}
					</div>
				</div>

			</div>

		</div>
	);
}

export default ImageShow;
