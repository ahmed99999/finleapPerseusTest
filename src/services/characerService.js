import Http from './httpService';

export async function getCharacters(pageNumber, name, species) {
    const response = await Http.get("/character/", {
        params: {
            page: pageNumber,
            name: name,
            species: species
        }
    });
    return response['data'];
}

export async function getCharacter(id) {
    const response = await Http.get(`/character/${id}`);
    return response['data'];
}