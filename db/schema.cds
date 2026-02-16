nameSpace my.filmSimulationLibrary;

entity baseFilm{
    key ID : UUID;
    name : String(255);
    filmStock : String(255);
}

entity recipe{
    key ID : UUID;
    name : String(255);
    filmStock : Association to baseFilm;
    ISO : String(6);
    DynamicRange : String(4);
    whiteBalance : String(20);
    wghiteBalanceShift : String(20);
    colour : String(2);
    highlights : String(2);
    shadows : String(2);
    sharpness : String(2);
    noiseReduction : String(2);
}