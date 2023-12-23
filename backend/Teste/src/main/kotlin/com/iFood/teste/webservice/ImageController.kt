package com.iFood.teste.webservice

import com.iFood.teste.entitites.Image
import com.iFood.teste.repository.ImageRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/")
class ImageController(@Autowired private val imageRepository: ImageRepository){
    //getAllImages
    @GetMapping("")
    fun getAllImages(): List<Image> =
        imageRepository.findAll().toList()

    //insertImage
    @PostMapping("")
    fun insertImage(@RequestBody image: Image): ResponseEntity<Image> {
        val insertedImage = imageRepository.save(image)
        return ResponseEntity(insertedImage, HttpStatus.CREATED)
    }

    //getImageById
    @GetMapping("/{id}")
    fun getImageById(@PathVariable("id") imageId: Int): ResponseEntity<Image> {
        val image = imageRepository.findById(imageId).orElse(null)
        return if (image !== null) {
            ResponseEntity(image, HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }
}