<template>
  <footer class="bg-indigo">
    <div class="container">
      <div class="row">

        <div class="col-md-4">
          <button class="border-0 w-100 h-100 bg-indigo rounded-0" @click="$router.push('/')"><img class="w-75 d-block mx-auto" src="../image/logo_triming.png"></button>
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
            <button type="button" class="border-0 w-100 h-100 h-100 h4 rounded-0 bg-indigo text-white mb-0" @click="$router.push('/list')">記事一覧</button>
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
