import Http from './httpService';

export async function getEpisodes(episode, name, ids) {
    const response = await Http.get(`/episode/${ids}`, {
        params: {
            episode: episode,
            name: name
        }
    });
    return response['data'];
}