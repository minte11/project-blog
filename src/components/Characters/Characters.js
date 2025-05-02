'use client';
import { useEffect, useState } from 'react';

const fetchCharacters = async (page) => {
	const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
	const data = await res.json();
	return data.results;
};

const Characters = ({ initialCharacters = [], initialPage = 1 }) => {
	const [characters, setCharacters] = useState(initialCharacters);
	const [page, setPage] = useState(initialPage);

	useEffect(() => {
		if (page > initialPage) {
			fetchCharacters(page).then((newCharacters) => {
				setCharacters(prev => [...prev, ...newCharacters]);
			});
		}
	}, [page, initialPage]);

	console.log({ characters });

	return (
		<div>
			{characters?.map((character) => {
				const { id, name, image } = character;
				return (
					<div key={id}>
						<img src={image} />
						{name}
					</div>
				);
			})}
		</div>
	);
};

export default Characters;
