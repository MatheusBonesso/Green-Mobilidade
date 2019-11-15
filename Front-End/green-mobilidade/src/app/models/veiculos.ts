import { Financeiro } from './financeiro';

export interface Veiculos{
    id: string;
    ano: number;
    marca: string;
    cor: string;
    dataHoraUltimaCorrida: Date;
    diasUtilizacao: string;
    urlImagem: string;
    dataUltimaUtilizacao: string;
    quilometragem: number;
    codigo: string;
    horaFim: Date;
    emailCondutor: string;
    ativa: boolean;
    dataFormatada: string;
    financeiro: Financeiro;
}