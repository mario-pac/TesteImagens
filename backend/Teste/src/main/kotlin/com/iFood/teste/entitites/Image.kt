package com.iFood.teste.entitites

import jakarta.persistence.*

@Entity
@Table(name = "images")
data class Image (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val albumId: Int,
    val title: String,
    val url: String,
    val thumbnailUrl: String
)