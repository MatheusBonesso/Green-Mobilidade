package br.com.iterative.green.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iterative.green.models.Aluguel;

public interface AluguelRepository extends JpaRepository<Aluguel, Long>{

}
