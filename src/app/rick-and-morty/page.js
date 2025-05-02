import Characters from '@/components/Characters';

const fetchCharacters = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/character?page=1');
	const data = await res.json();
	return data.results;
};

const RickAndMorty = async () => {
	const characters = await fetchCharacters();
	return <Characters initialCharacters={characters} />;
};

export default RickAndMorty;
