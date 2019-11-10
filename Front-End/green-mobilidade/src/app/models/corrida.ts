import { Veiculos } from './veiculos';

export interface Corrida{
    id: string,
    emailConduto: string,
    horaInicio:Date,
    horaFim: Date,
    ativa: boolean,
    veiculo: Veiculos,
    horaFimFormatada: string;
    horaInicioFormatada: string;
}