package com.iFood.teste.repository

import com.iFood.teste.entitites.Image
import org.springframework.data.repository.CrudRepository

interface ImageRepository: CrudRepository<Image, Int>