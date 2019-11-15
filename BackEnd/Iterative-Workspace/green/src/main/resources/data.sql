--
-- Massa de dados de teste financeiro (Obrigatorio valores iniciais)
--
INSERT INTO financeiro(valor_minuto, valor_total, total_minutos) VALUES (0.48,0, 0);
INSERT INTO financeiro(valor_minuto, valor_total, total_minutos) VALUES (0.72,0, 0);
INSERT INTO financeiro(valor_minuto, valor_total, total_minutos) VALUES (0.63, 0, 0);
INSERT INTO financeiro(valor_minuto, valor_total, total_minutos) VALUES (1, 0, 0); 

--
-- Massa de dados de teste condutor
--
INSERT INTO CONDUTOR (email) VALUES ('email@example.com');

--
-- Massa de dados de teste veiculos (Obrigatorio valores iniciais)
--
INSERT INTO VEICULOS
(
   ano,
   codigo_etiqueta,
   marca,
   cor,
   modelo,
   data_hora_ultima_corrida,
   velocidade_maxima,
   quilometragem,
   dias_utilizacao,
   em_uso,
   url_imagem,
   financeiro_id
)
VALUES
(
   2017,
   '100100',
   'yamaha',
   'Branco',
   'Patinete',
   '2019-05-05 20:00:00',
   10.0,
   20.0,
   0,
   false,
   'https://images-submarino.b2w.io/produtos/01/00/oferta/51146/6/51146699_1GG.jpg',
   1
   
);
INSERT INTO VEICULOS
(
   ano,
   codigo_etiqueta,
   marca,
   cor,
   modelo,
   data_hora_ultima_corrida,
   velocidade_maxima,
   quilometragem,
   dias_utilizacao,
   em_uso,
   url_imagem,
   financeiro_id
)
VALUES
(
   2018,
   '100101',
   'yamaha',
   'Azul',
   'Patinete',
   '2019-05-05 20:00:00',
   10.0,
   20.0,
   1,
   false,
   'https://decathlonpro.vteximg.com.br/arquivos/ids/2395826-500-500/patinete-mid7-oxelo1.jpg?v=637026306142470000',
   2
);
INSERT INTO VEICULOS
(
   ano,
   codigo_etiqueta,
   marca,
   cor,
   modelo,
   data_hora_ultima_corrida,
   velocidade_maxima,
   quilometragem,
   dias_utilizacao,
   em_uso,
   url_imagem,
   financeiro_id
)
VALUES
(
   2016,
   '200100',
   'yamaha',
   'Verde',
   'Bicicleta',
   '2019-05-05 20:00:00',
   10.0,
   20.0,
   0,
   false,
   'https://static3.tcdn.com.br/img/img_prod/394779/bicicleta_gts_aro_29_freio_a_disco_cambio_shimano_21_marchas_amortecedor_e_roda_de_magnesio_gts_m1_a_1133_1_20190507114222.jpg',
   3
);
INSERT INTO VEICULOS
(
   ano,
   codigo_etiqueta,
   marca,
   cor,
   modelo,
   data_hora_ultima_corrida,
   velocidade_maxima,
   quilometragem,
   dias_utilizacao,
   em_uso,
   url_imagem,
   financeiro_id
)
VALUES
(
   2018,
   '200101',
   'yamaha',
   'Azul',
   'Bicicleta',
   '2019-05-05 20:00:00',
   10.0,
   20.0,
   1,
   false,
   'https://static3.tcdn.com.br/img/img_prod/464234/bicicleta_aro_29_quadro_21_freio_disco_mecanico_21_marchas_suspensao_dropp_branco_verde_lyam_decor_12576_1_20190627180622.jpg',
   4
);

--
-- Massa de dados de teste 
--
INSERT INTO ALUGUEL (ativo, hora_inicio, pago, condutor_id, financeiro_id, veiculo_id) 
VALUES (true, '2019-11-10T15:11:56.241', true, 1, 2, 2);


