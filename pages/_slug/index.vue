<template>
  <main class="main">

    <style>
      figure img{
        width:75%;
        height:75%;
        border-radius: 10px;
      }
      figure{
        text-align:center;
      }
      h2{
        margin-bottom:1em;
      }
    </style>

    <div id="pc">
      <div class="bg-brown">
        <div class="container">
          <div class="row">
            <div class="col-2 position-relative">
                <NuxtLink class="no_color  position-absolute" to="/"><img class="w-75" src="../../image/flag.png"></NuxtLink>
            </div>

            <div class="col-10">
                <div class="row">
                    <div class="col-3 d-flex align-items-center border-right my-4">
                        <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke " @click="$router.push('/tiku')">地区</button>
                    </div>
                    <div class="col-3 d-flex align-items-center border-right my-4">
                        <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke " @click="$router.push('/Category')">カテゴリ</button>
                    </div>
                    <div class="col-3 d-flex align-items-center border-right my-4">
                        <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke " @click="$router.push('/osusume')">おすすめ</button>
                    </div>
                    <div class="col-3 d-flex align-items-center my-4 ">
                        <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke" @click="$router.push('/pages/list/1')">記事一覧</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <div id="iphone" class="d-no">
      <header class="header bg-brown">
              <div class="logo ">
                  <div class="my-5"></div>
              </div>
              <div class="nav">
  
                  <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
                  <input id="drawer_input" class="drawer_hidden" type="checkbox">
          
                  <!-- ハンバーガーアイコン -->
                  <label for="drawer_input" class="drawer_open"><span></span></label>
          
                  <!-- メニュー -->
                  <nav class="nav_content">
                  <ul class="nav_list">
                          <li class="nav_item"><NuxtLink to="/">TOP</NuxtLink></li>
                          <li class="nav_item"><NuxtLink to="/tiku">地区</NuxtLink></li>
                          <li class="nav_item"><NuxtLink to="/Category">カテゴリ</NuxtLink></li>
                      <li class="nav_item"><NuxtLink to="/osusume">オススメ</NuxtLink></li>
                  <li class="nav_item"><NuxtLink to="/pages/list/1">記事一覧</NuxtLink></li>
                  </ul>
                  </nav>
  
              </div>
      </header>
  </div>



    <div class="background text-whitesmoke">
      <img class="w-100" src="../../image/header.png">
      <div class="container py-5">
        <div class="row">
          <div class="col-3 col-md-2">
            <img class="w-75" src="../../image/corner_leftup.png">
          </div>
          <div class="col-6 col-md-8"></div>
          <div class="col-3 col-md-2">
              <img class="w-75" src="../../image/corner_rightup.png">
          </div>
          <div class="col-md-2 col-sm-1"></div>
          <div class="col-md-8 col-sm-10">
            <div class="text-center">
              <div class="text-start d-inline-block">
                <div class="p-3">
                  <div class="text-center">
                    <h1 class="title">{{ title }}</h1>
                  </div>
                  <div class="my-3">
                    <nuxt-link :to="'/category/' + category.id + '/pages/list/1'">
                      <button class="category btn btn-outline-gold w-auto">{{ category && category.name }}</button>
                    </nuxt-link>
                    <nuxt-link :to="'/tiku/' + tiku.id + '/pages/list/1'">
                      <button class="tiku btn btn-outline-gold w-auto">{{ tiku && tiku.name }}</button>
                    </nuxt-link>
                  </div>
                  <div v-html="content"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-1"></div>
          <div class="col-3 col-md-2">
            <img class="w-75" src="../../image/corner_leftdown.png">
          </div>
          <div class="col-6 col-md-8"></div>
          <div class="col-3 col-md-2">
              <img class="w-75" src="../../image/corner_rightdown.png">
          </div>
        </div>
      </div>
    </div>





  <footer class="bg-brown">
    <div class="container">
      <div class="row m-auto f-item-wrap">
        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-brown text-whitesmoke mb-0" @click="$router.push('/tiku')">地区</button>
        </div>
        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-brown text-whitesmoke mb-0" @click="$router.push('/Category')">カテゴリ</button>
        </div>
        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-brown text-whitesmoke mb-0" @click="$router.push('/osusume')">おすすめ</button>
        </div>
        <div class="col-md-3 d-flex align-items-center my">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-brown text-whitesmoke mb-0" @click="$router.push('/pages/list/1')">記事一覧</button>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-2">
        </div>
        <div class="col-md-4 col-8 text-center">
          <NuxtLink to="/">
            <img class="w-50" src="../../image/logo.png">
          </NuxtLink>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-2">
        </div>
      </div>
    </div>
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
    //console.log(data)
    return data
  },


}
</script>