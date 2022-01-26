package com.racajovem.dstime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.racajovem.dstime.entities.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {

}