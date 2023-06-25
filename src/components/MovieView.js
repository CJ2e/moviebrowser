import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';

const MovieView = () => {
	const { id } = useParams();
	// console.log(id);
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// console.log('make an api request to id', id);
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=1a3778c76514f5d4cbce4f9db87d109a&language=en-US`
		)
			.then((response) => response.json())
			.then((data) => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	function renderMovieDetails() {
		if (isLoading) {
			return <Hero text="Loading..." />;
		}
		if (movieDetails) {
			//TODO: Deal with a possible missing image
			const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
			const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
			return (
				<>
					<Hero text={movieDetails.original_title} backdrop={backdropUrl} />
					<div className="container my-5">
						<div className="row">
							<div className="col-md-3">
								<img
									src={posterPath}
									alt={movieDetails.original_title}
									className="img-fluid shadow rounded"
								/>
							</div>
							<div className="col-md-9">
								<h2>{movieDetails.original_title}</h2>
								<p className="lead">{movieDetails.overview}</p>
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	return renderMovieDetails();
};
export default MovieView;
