import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutView from './components/AboutView';
// import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import MovieView from './components/MovieView';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';
import View404 from './components/View404';

function App() {
	// const [variable to access, function] = sets state;
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText) {
			// console.log(searchText, 'is the search text');
			fetch(
				`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=1a3778c76514f5d4cbce4f9db87d109a`
			)
				.then((response) => response.json())
				.then((data) => {
					// console.log(data);
					setSearchResults(data.results);
				});
		}
	}, [searchText]);

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutView />} />
				<Route
					path="/search"
					element={
						<SearchView keyword={searchText} searchResults={searchResults} />
					}
				/>
				<Route path="/movies/:id" element={<MovieView />} />
				<Route path="*" element={<View404 />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
