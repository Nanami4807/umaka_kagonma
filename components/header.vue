<template>
    <div class="bg-indigo">
        <div class="container ">
            <div class="row">
                <div class="col-3">
                    <button class="border-0 w-100 h-100 bg-blue rounded-0" @click="$router.push('/')"><picture><source srcset="../image/logo_triming.png" media="(min-width: 500px)" type="image/png"><img class="w-75 change-img" src="../image/logo.png"></picture></button>
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
</template>
<script>
    export default{
        name: 'Header'
    }
</script>

