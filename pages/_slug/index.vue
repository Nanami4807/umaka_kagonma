<template>
  <main class="main">

    <style>
      figure img{
        width:75%;
        height:75%;
      }
    </style>

    <div class="bg-indigo">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <button class="border-0 w-100 h-100 bg-blue rounded-0" @click="$router.push('/')"><picture><source srcset="../../image/logo_triming.png" media="(min-width: 500px)" type="image/png"><img class="w-75 change-img" src="../../image/logo.png"></picture></button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100  h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/tiku')">地区</button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100  h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/Category')">カテゴリ</button>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <button type="button" class="border-0 w-100 h-100 h-100 h4 bg-blue rounded-0 text-warning" @click="$router.push('/osusume')">おすすめ</button>
                </div>
            </div>
        </div>
    </div>



    <div class="background">
      <div class="container">
        <div class="p-3">
          <h1 class="title">{{ title }}</h1>
          <p class="category">{{ category && category.name }}</p>
          <div v-html="content"></div>
        </div>
      </div>
    </div>





    <footer class="bg-indigo">
    
      <div class="row">

        <div class="col-md-4">
          <button class="border-0 w-100 h-100 bg-indigo rounded-0" @click="$router.push('/')"><img class="w-75 d-block mx-auto" src="../../image/logo_triming.png"></button>
        </div>

        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/tiku')">地区</button>
        </div>
        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/Category')">カテゴリ</button>
        </div>
        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/osusume')">おすすめ</button>
        </div>

        <div class="col-md-2 d-flex align-items-center">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/pages/list/1')">記事一覧</button>
        </div>

      </div>
    
    <hr />
  </footer>


  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) 
  {
    console.log(params.p)
    //console.log(`https://umaka.microcms.io/api/v1/blog/${params.slug}`)
    const { data } = await axios.get(
      `https://umaka.microcms.io/api/v1/blogs/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' }
      }
    )
    console.log(data)
    return data
  },


}
</script>