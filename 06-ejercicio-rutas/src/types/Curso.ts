export interface Curso {
    id : number,
    nombre : string,
    nivel : string
}

export const cursosIniciales:Curso[] = [
    {id : 1, nombre : 'dwec', nivel : 'avanzado'},
    {id : 2, nombre : 'dwes', nivel : 'avanzado'},
    {id: 3, nombre : 'optativa', nivel : 'basico'}
]