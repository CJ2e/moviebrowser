import { Link } from 'react-router-dom';
import Hero from './Hero';

// TMDB API Key = 1a3778c76514f5d4cbce4f9db87d109a
const NoReultsCard = () => {
	return (
		<div className="col">
			<div className="row">
				<h2>No results found</h2>
			</div>
		</div>
	);
};

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	const posterPlaceHolder = `https://via.placeholder.com/500x750?text=${movie.original_title}`;
	const detailUrl = `/movies/${movie.id}`;
	return (
		<div className="col-lg-3 col-md-3 col-4 my-4">
			<div className="card h-100">
				<img
					src={posterUrl}
					className="card-img-top"
					alt={movie.original_title}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = posterPlaceHolder;
					}}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{movie.original_title}</h5>
					<Link to={detailUrl} className="btn btn-primary mt-auto">
						Show Details
					</Link>
				</div>
			</div>
		</div>
	);
};

const SearchView = ({ keyword, searchResults, isSearchClicked }) => {
	const title = `You are searching for ${keyword}`;

	const resultsHtml = searchResults.map((obj, i) => {
		return <MovieCard movie={obj} key={i} />;
	});
	const noResultsHtml = <NoReultsCard />;
	return (
		<>
			<Hero text={title} />
			{resultsHtml.length > 0 ? (
				<div className="container">
					<div className="row">{resultsHtml}</div>
				</div>
			) : (
				<div className="container">
					<div className="row py-5">{noResultsHtml}</div>
				</div>
			)}
		</>
	);
};
export default SearchView;
