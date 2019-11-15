package br.com.iterative.green.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iterative.green.models.Financeiro;

public interface FinanceiroRepository extends JpaRepository<Financeiro, Long>{

}
