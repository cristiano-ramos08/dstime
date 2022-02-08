package com.racajovem.dstime.entities;



import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "partida")
public class Partida {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
		
	private String timeRaca;
	private String timeAdversario;
	private LocalDate dataJogo;
	private String local;
	private Integer golsRaca;
	private Integer golsAdversario;
	
	public Partida() {
		
	}

	public Partida(String timeRaca, String timeAdversario, LocalDate dataJogo, String local, Integer golsRaca,
			Integer golsAdversario) {
		super();
		this.timeRaca = timeRaca;
		this.timeAdversario = timeAdversario;
		this.dataJogo = dataJogo;
		this.local = local;
		this.golsRaca = golsRaca;
		this.golsAdversario = golsAdversario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getTimeRaca() {
		return timeRaca;
	}

	public void setTimeRaca(String timeRaca) {
		this.timeRaca = timeRaca;
	}

	public String getTimeAdversario() {
		return timeAdversario;
	}

	public void setTimeAdversario(String timeAdversario) {
		this.timeAdversario = timeAdversario;
	}

	public LocalDate getDataJogo() {
		return dataJogo;
	}

	public void setDataJogo(LocalDate dataJogo) {
		this.dataJogo = dataJogo;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public Integer getGolsRaca() {
		return golsRaca;
	}

	public void setGolsRaca(Integer golsRaca) {
		this.golsRaca = golsRaca;
	}

	public Integer getGolsAdversario() {
		return golsAdversario;
	}

	public void setGolsAdversario(Integer golsAdversario) {
		this.golsAdversario = golsAdversario;
	}
		
}
