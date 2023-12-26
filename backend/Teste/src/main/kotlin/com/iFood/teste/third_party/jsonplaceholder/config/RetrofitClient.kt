package com.iFood.teste.third_party.jsonplaceholder.config

import com.iFood.teste.third_party.jsonplaceholder.JsonplaceholderClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {

    private val retrofit = Retrofit.Builder()
        .baseUrl("https://jsonplaceholder.typicode.com/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    val jsonplaceholderClient = retrofit.create(JsonplaceholderClient::class.java)
}