import React from 'react'
import MovieItem from './MovieItem'

function Results({ results, openPopup, history }) {
	console.log(results)
	return (
		<section className="results justify-content-center" >
			{results.map(movie => (
				<MovieItem key={movie.imdbID} movie={movie} openPopup={openPopup} history={history} addclass='m-2' />
			))}
		</section>
	)
}

export default Results