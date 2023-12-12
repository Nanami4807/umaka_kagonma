<template>
  <footer class="bg-brown">
    <div class="container">
      <div class="row pt-5">

        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-brown text-white mb-0" @click="$router.push('/tiku')">地区</button>
        </div>
        <!-- <div class="w-res col-0"></div> -->
        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100  h-100 h-100 h4 rounded-0 bg-brown text-white mb-0" @click="$router.push('/Category')">カテゴリ</button>
        </div>
        <div class="col-md-3 d-flex align-items-center border-right my">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-brown text-white mb-0" @click="$router.push('/osusume')">おすすめ</button>
        </div>
        <div class="col-md-3 d-flex align-items-center my">
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-brown text-white mb-0" @click="$router.push('/pages/list/1')">記事一覧</button>
        </div>

        <div class="col-md-2">
        </div>

        <div class="col-2">
        </div>

        <div class="col-md-4 col-8 text-center">
          <img class="w-50" src="../image/logo.png">
        </div>

        <div class="col-md-2">
        </div>

        <div class="col-2">
        </div>
        

      </div>
    </div>
    <hr />
  </footer>
</template>
<script>
    export default{
        name: 'Footer'
    }
</script>
