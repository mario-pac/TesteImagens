package com.iFood.teste.webservice

import com.iFood.teste.entitites.Image
import com.iFood.teste.repository.ImageRepository
import com.iFood.teste.third_party.jsonplaceholder.config.RetrofitClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.io.IOException
import kotlin.jvm.optionals.getOrNull


@RestController
@RequestMapping("/images")
@CrossOrigin(origins = ["http://localhost:5173"])
class ImageController(@Autowired private val imageRepository: ImageRepository){

    @PostMapping("/insertAllImages")
    fun insertAllImages(): ResponseEntity<Image> {
        val hasImages = imageRepository.findAll().toList()
        val retrofitGetter = RetrofitClient.jsonplaceholderClient.getImages()
        try {
            val response = retrofitGetter.execute()

            return if (response.isSuccessful) {
                val images = response.body()?.toMutableList()
                val subtracted = images?.subtract(hasImages.toSet())

                if (subtracted?.size!! <= 0) {
                    ResponseEntity(HttpStatus.NOT_ACCEPTABLE)
                } else {
                    imageRepository.saveAll(subtracted)
                    ResponseEntity(HttpStatus.OK)
                }
            } else {
                ResponseEntity( HttpStatus.NOT_MODIFIED)
            }

        } catch (e: IOException) {
            // Handle IOException
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //getImageById
    @GetMapping("/byId/{id}")
    fun getImageById(@PathVariable("id") imageId: Int): ResponseEntity<Image> {

        val image = imageRepository.findById(imageId).getOrNull()
        return if(image != null) {
            ResponseEntity(image, HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    //removeAllImages
    @DeleteMapping("/deleteAllImages")
    fun removeAllImages(): ResponseEntity<Image>{
        val hasImages = imageRepository.findAll().toList()
        return if(hasImages.isNotEmpty()) {
            imageRepository.deleteAll()
            ResponseEntity(HttpStatus.OK)
        }else {
            ResponseEntity(HttpStatus.NOT_MODIFIED)
        }
    }



    //getImageByIdAlbum
    @GetMapping("/byIdAlbum/{idAlbum}")
    fun getImageByIdAlbum(@PathVariable("idAlbum") albumId: Int): ResponseEntity<List<Image>> {
        val images = imageRepository.findAll().toList()
        val filtered = images.filter { image -> image.albumId == albumId }
        return if(filtered.isNotEmpty()){
             ResponseEntity(filtered, HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    //getAlbums
    @GetMapping("/getAlbums")
    fun getAlbums(): ResponseEntity<List<Image>> {

        val images = imageRepository.findAll().toList()
        val albums: List<Image> = images.distinctBy { it.albumId }
        return ResponseEntity(albums,  HttpStatus.OK)
    }
}

