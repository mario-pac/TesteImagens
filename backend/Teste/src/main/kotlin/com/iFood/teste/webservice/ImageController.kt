package com.iFood.teste.webservice

import com.iFood.teste.entitites.Image
import com.iFood.teste.repository.ImageRepository
import com.iFood.teste.third_party.jsonplaceholder.config.RetrofitClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.jvm.optionals.getOrNull


@RestController
@RequestMapping("/images")
class ImageController(@Autowired private val imageRepository: ImageRepository){
    val patternHeader = HttpHeaders()





    @PostMapping("/insertAllImages")
    fun insertAllImages(): ResponseEntity<Image> {
        patternHeader.set("Access-Control-Allow-Origin", "http://localhost:5173")

        val hasImages = imageRepository.findAll().toList()
        val retrofitGetter = RetrofitClient.jsonplaceholderClient.getImages()
        var responseEntity: ResponseEntity<Image> = ResponseEntity(HttpStatus.NOT_MODIFIED)
        retrofitGetter.enqueue(object : Callback<List<Image>> {
            override fun onResponse(call: Call<List<Image>>, response: Response<List<Image>>){
                if(response.body()?.toList()?.isNotEmpty() == true){
                    val images = response.body()?.toMutableList()
                    val subtracted = images?.subtract(hasImages.toSet())
                    responseEntity = if(subtracted?.size!! <= 0){
                        patternHeader.set("Erro!", "O banco de dados já contém esses dados!")
                        ResponseEntity(patternHeader, HttpStatus.NOT_ACCEPTABLE)
                    } else{
                        val insertedImages = imageRepository.saveAll(subtracted)
                        ResponseEntity(patternHeader, HttpStatus.OK)
                    }
                }
            }

            override fun onFailure(call: Call<List<Image>>, t: Throwable) {
                patternHeader.set("Erro!", "Não foi possível adicionar os dados ao banco de dados!")
                responseEntity = ResponseEntity<Image>( patternHeader, HttpStatus.NOT_MODIFIED)
            }
        })
        return responseEntity
    }

    //getImageById
    @GetMapping("/byId/{id}")
    fun getImageById(@PathVariable("id") imageId: Int): ResponseEntity<Image> {
        patternHeader.set("Access-Control-Allow-Origin", "http://localhost:5173")

        val image = imageRepository.findById(imageId).getOrNull()
        return if(image != null) {
            ResponseEntity(image, patternHeader, HttpStatus.OK)
        } else {
            patternHeader.set("Erro!", "Registro não encontrado!")
            ResponseEntity(patternHeader, HttpStatus.NOT_FOUND)
        }
    }

    //removeAllImages
    @DeleteMapping("/deleteAllImages")
    fun removeAllImages(): ResponseEntity<Image>{

        imageRepository.deleteAll()
        return ResponseEntity(HttpStatus.OK)
    }



    //getImageByIdAlbum
    @GetMapping("/byIdAlbum/{idAlbum}")
    fun getImageByIdAlbum(@PathVariable("idAlbum") albumId: Int): ResponseEntity<List<Image>> {
        patternHeader.set("Access-Control-Allow-Origin", "http://localhost:5173")
        val images = imageRepository.findAll().toList()
        val filtered = images.filter { image -> image.albumId == albumId }
        return if(filtered.isNotEmpty()){
             ResponseEntity(filtered, patternHeader, HttpStatus.OK)
        } else {
            patternHeader.set("Erro!", "Registro não encontrado!")
            ResponseEntity(patternHeader, HttpStatus.NOT_FOUND)
        }
    }

    //getAlbums
    @GetMapping("/getAlbums")
    fun getAlbums(): ResponseEntity<List<Image>> {
        patternHeader.set("Access-Control-Allow-Origin", "http://localhost:5173")

        val images = imageRepository.findAll().toList()
        val albums: List<Image> = images.distinctBy { it.albumId }
        return ResponseEntity(albums, patternHeader,  HttpStatus.OK)
    }
}

