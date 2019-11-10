package br.com.iterative.green.controllers.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.iterative.green.models.DiasDeUtilizacao;
import br.com.iterative.green.models.Veiculos;

public class VeiculosDTO {

	private Long id;
	private int ano;
	private String marca;
	private String cor;
	private LocalDateTime dataHoraUltimaCorrida;
	private DiasDeUtilizacao diasUtilizacao;
	private String urlImagem;
	private Double valorMinuto;
	private boolean emUso;
	private Double valorTotal;
	private Double quilometragem;
	private Long codigo;
	private Double velocidadeMaxima;

	public VeiculosDTO(Veiculos veiculo) {
		this.id = veiculo.getId();
		this.ano = veiculo.getAno();
		this.cor = veiculo.getCor();
		this.marca = veiculo.getMarca();
		this.dataHoraUltimaCorrida = veiculo.getDataHoraUltimaCorrida();
		this.diasUtilizacao = veiculo.getDiasUtilizacao();
		this.urlImagem = veiculo.getUrlImagem();
		this.valorMinuto = veiculo.getValorMinuto();
		this.emUso = veiculo.isEmUso();
		this.valorTotal = veiculo.getValorTotal();
		this.codigo = veiculo.getCodigo();
		this.quilometragem = veiculo.getQuilometragem();
		this.velocidadeMaxima = veiculo.getVelocidadeMaxima();
	}

	public Long getId() {
		return id;
	}

	public int getAno() {
		return ano;
	}

	public String getMarca() {
		return marca;
	}

	public String getCor() {
		return cor;
	}

	public LocalDateTime getDataHoraUltimaCorrida() {
		return dataHoraUltimaCorrida;
	}
	

	public DiasDeUtilizacao getDiasUtilizacao() {
		return diasUtilizacao;
	}

	public String getUrlImagem() {
		return urlImagem;
	}

	public Double getValorMinuto() {
		return valorMinuto;
	}

	public boolean isEmUso() {
		return emUso;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public Double getQuilometragem() {
		return quilometragem;
	}

	public Long getCodigo() {
		return codigo;
	}
	
	public Double getVelocidadeMaxima(){
		return velocidadeMaxima;
	}
	public static List<VeiculosDTO> converter(List<Veiculos> veiculos) {
		return veiculos.stream().map(VeiculosDTO::new).collect(Collectors.toList());

	}

}
