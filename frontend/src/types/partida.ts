export type Partida = {    
    id: number,
    timeRaca: string,
    timeAdversario: string,
    dataJogo: string,
    local: string,
    golsRaca: number,
    golsAdversario: number;
}

export type PartidaPage = {
    content: Partida[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}