export type Raca = {    
    id: number;
    nome: string; 
    gol: number;
    assistencia: number;   
    posicao: string; 
    image: string;
}

export type TimePage = {
    content: Raca[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
