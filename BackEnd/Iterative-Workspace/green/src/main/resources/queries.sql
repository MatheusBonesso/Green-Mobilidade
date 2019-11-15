--
-- Quais os alugueis de determinado veículo?
--
--SELECT * FROM ALUGUEL WHERE id_veiculo = 123;

--
-- Quais os alugueis de determinado condutor?
--
--SELECT * FROM ALUGUEL WHERE id_condutor = 123;

--
-- Quais são os lançamentos financeiros de determinado condutor?
--
--SELECT * 
--FROM ALUGUEL 
--INNER JOIN FINANCEIRO ON ALUGUEL.FINANCEIRO_ID = FINANCEIRO_ID
--WHERE ALUGUEL.CONDUTOR_ID = 123;


-- Quais são os lançamentos financeiros com pagamento 
-- em aberto de determinado condutor?
---SELECT * 
--FROM ALUGUEL 
--INNER JOIN FINANCEIRO ON ALUGUEL.FINANCEIRO_ID = FINANCEIRO_ID
--WHERE ALUGEL.ID_CONDUTOR = 123 AND ALUGUEL.PAGO = TRUE;



