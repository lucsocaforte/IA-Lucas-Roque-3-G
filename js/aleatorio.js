const nomes = [
    "Sofia", "Lucas", "Isabela", "Gabriel", "Mariana", "Eduardo", "Beatriz", 
    "Thiago", "Camila", "Roberto", "Ana", "Ricardo", "Fernanda", "Juliana", 
    "Pedro", "Patrícia", "Rafael", "Larissa", "Felipe", "Letícia"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
