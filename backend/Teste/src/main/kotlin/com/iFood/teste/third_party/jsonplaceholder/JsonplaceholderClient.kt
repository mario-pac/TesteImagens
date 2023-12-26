package com.iFood.teste.third_party.jsonplaceholder

import com.iFood.teste.entitites.Image
import retrofit2.Call
import retrofit2.http.GET

interface JsonplaceholderClient {
    @GET("photos")
    fun getImages(): Call <List<Image>>
}