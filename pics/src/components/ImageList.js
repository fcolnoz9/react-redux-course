import ImageShow from './ImageShow';

function ImageList({images}) {
	const renderedImages = images.map((image, index) => {
		return (
				<div className="column is-one-quarter" key={image.id}>
					<ImageShow image={image} />
				</div>
		);
	});
	return (
		<div className="columns is-multiline">
			{renderedImages}
		</div>
	);
}

export default ImageList;
