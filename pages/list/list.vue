<template>
<div>
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

  <div class="background">
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
      </div>
      <div class="row upper">
        <div class="col-md-2 col-sm-1"></div>
        <div class="col-md-8 col-sm-10 text-center text-whitesmoke">
          <h1>お店一覧</h1>
          <div class="my-2">
            <p class="mb-0">検索したいキーワードを入力してください</p>
            <div>
              <input id="search_text" type="search" name="search" placeholder="キーワードを入力" v-model="searchText" class="flex-1"><!--
              --><button id="search_btn" type="button" name="submit" @click="search" class="form_submit rounded-0 w-auto"><i class="bi bi-search"></i>検索</button>
            </div>
          </div>
          <p>{{ !!selectedCategory ? 'カテゴリ:' + selectedCategory.name  :'' }}</p>
          <p>{{ !!selectedtiku ? '地区:' + selectedtiku.name  :'' }}</p>
          <div class="border-gold py-3 mb-5">
            <div class="mb-3">
              <p class="mb-1">カテゴリ一覧</p>
              <nuxt-link to="/category/noodles/pages/list/1"><button class="category btn btn-outline-gold w-auto">麺類</button></nuxt-link>
              <nuxt-link to="/category/don/pages/list/1"><button class="category btn btn-outline-gold w-auto">丼もの</button></nuxt-link>
              <nuxt-link to="/category/sweets/pages/list/1"><button class="category btn btn-outline-gold w-auto">スイーツ</button></nuxt-link>
              <nuxt-link to="/category/other/pages/list/1"><button class="category btn btn-outline-gold w-auto">その他</button></nuxt-link>
            </div>
            <div class="mb-2">
              <p class="mb-1">地区一覧</p>
              <nuxt-link to="/tiku/tyu-ou/pages/list/1"><button class="category btn btn-outline-gold w-auto">中央地区</button></nuxt-link>
              <nuxt-link to="/tiku/taniyama/pages/list/1"><button class="category btn btn-outline-gold w-auto">谷山地区</button></nuxt-link>
              <nuxt-link to="/tiku/matumoto/pages/list/1"><button class="category btn btn-outline-gold w-auto">松元地区</button></nuxt-link>
            </div>
          </div>
          <ul class="p-0">
            <li class="pb-4" v-for="content in contents" :key="content.id">
              <nuxt-link :to="`/${content.id}`" class="text-whitesmoke text-decoration-none">{{ content.title }}<br>
              <img class="radius-img w-75 hov" :src="content.eyecatch.url"></nuxt-link><br>
              <button type="button" class="btn btn-gold  mb-4 mt-2" @click="$router.push(`/${content.id}`)"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
            </li>
          </ul>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <Pagination
              :pager="pager"
              :current="Number(page)"
              :category="selectedCategory"
              :tiku="selectedtiku"
              />
            </div>
            <div class="col-md-2"></div>
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

</div>
</template>

<script>

import Header from '../../components/header.vue';
import Footer from '../../components/footer.vue';
import axios from 'axios';

export default {
  data() {
    return {
      isActive : "",
      searchText: '',
      searchResult: [],
    }
  },

  methods:{
    search(){
      let s_value = this.searchText
      //URIエンコード
      s_value = encodeURIComponent(s_value)
      //検索実行
      this.$router.push(`/search?id=${s_value}`);
    }
  },
  //urlの値を取得
  async asyncData({ params }) {

    //params.pがなければ1を代入する
    const page = params.p || '1'
    const categoryId = params.categoryId
    const tikuId = params.tikuId 
    //1ページあたりに表示する店の数
    const limit = 10    
    //カテゴリ指定があった場合
    if(categoryId != null){
      var { data } = await axios.get(
        //=== ←型変換することなく厳密に等しい                           ↓もし～なら             ↓こうする       ↓そうでなければこうする         
        `https://umaka.microcms.io/api/v1/blogs/?limit=${limit}${categoryId === undefined ? '' : `&filters=category[equals]${categoryId}`}&offset=${(page - 1) * limit}`,
        {
          headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' }
        }
      );
    //地区指定があった場合
    }else{
      var { data } = await axios.get(
        `https://umaka.microcms.io/api/v1/blogs/?limit=${limit}${tikuId === undefined ? '' : `&filters=tiku[equals]${tikuId}`}&offset=${(page - 1) * limit}`,
        {
          headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' }
        }
      );
    }
    const categories = await axios.get(
      `https://umaka.microcms.io/api/v1/category?limit=100`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' },
      }

    
    );

    const chiku = await axios.get(
      `https://umaka.microcms.io/api/v1/tiku?limit=100`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'bsKimZKgVvPzOdGgGUxIJTx3g7COGcmPI4yE' },
      }
    );

    //categoryIdがあるかどうか
    const selectedCategory =
      categoryId !== undefined
        ? categories.data.contents.find((content) => content.id === categoryId)
        : undefined;

    const selectedtiku =
      tikuId !== undefined
        ? chiku.data.contents.find((content) => content.id === tikuId)
        : undefined;


    return {
      ...data,
      selectedCategory,
      selectedtiku,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
    };

    
  },

  components: {
    Header,Footer
  }
}
</script>