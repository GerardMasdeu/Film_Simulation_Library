using my.filmSimulationLibrary as my from '../db/schema'; 
service catService {
    @readonly entity baseFilm as projection on my.baseFilm; // Readonly to provide a fixed list of films for now
    entity recipe as projection on my.recipe;
}
