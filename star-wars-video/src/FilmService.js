class FilmService {

   static getFilmData = () => {
        let url = 'https://swapi.co/api/films/'
        return fetch(url)
            .then((result) => {
                if (result.ok) {
                    return result.json();
                }
            })
    };

   static receiveFilmInfo = async () => {
        let response = await this.getFilmData();
        let i = 0;
        return response.results.map((element) => {
            return {
                key: i++,
                titleFilm: element.title,
                date: element.release_date,
                openingCrawl: element.opening_crawl
            }
        });
    }
}

export default FilmService;