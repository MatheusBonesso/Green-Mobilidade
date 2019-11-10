package br.com.iterative.green.controllers.form;

import java.time.LocalDateTime;

import br.com.iterative.green.models.Veiculos;
import br.com.iterative.green.repository.VeiculosRepository;

public class VeiculoAtualizarForm {
	private Long id;
	private Double valorTotal;
	private boolean emUso;
	private LocalDateTime dataHoraUltimaCorrida;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public boolean isEmUso() {
		return emUso;
	}

	public void setEmUso(boolean emUso) {
		this.emUso = emUso;
	}

	public LocalDateTime getDataHoraUltimaCorrida() {
		return dataHoraUltimaCorrida;
	}

	public void setDataHoraUltimaCorrida(LocalDateTime dataHoraUltimaCorrida) {
		this.dataHoraUltimaCorrida = dataHoraUltimaCorrida;
	}

	public Veiculos atualizar(Long idVeiculo, VeiculosRepository veiculosRepository) {
		Veiculos veiculo = veiculosRepository.getOne(idVeiculo);
		veiculo.setDataHoraUltimaCorrida(this.dataHoraUltimaCorrida);
		veiculo.setEmUso(this.emUso);
		veiculo.setValorTotal(this.valorTotal + veiculo.getValorTotal());
		System.out.println(this.dataHoraUltimaCorrida);
		return veiculo;
	}

}
