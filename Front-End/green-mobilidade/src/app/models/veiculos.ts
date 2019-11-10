export interface Veiculos{
    id: string;
    ano: number;
    marca: string;
    cor: string;
    dataHoraUltimaCorrida: Date;
    diasUtilizacao: string;
    urlImagem: string;
    valorMinuto: number;
    dataUltimaUtilizacao: string;
    quilometragem: number;
    codigo: string;
    horaFim: Date;
    emailCondutor: string;
    ativa: boolean;
    valorTotal: number;
    dataFormatada: string;
}