<template>
    <div class="bg-brown">
        <div class="container">
            <div class="row">
                <div class="col-2">
                <p class="text-whtie">旗</p>
                </div>

                <div class="col-10">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center border-right my-4">
                            <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-white " @click="$router.push('/tiku')">地区</button>
                        </div>
                        <div class="col-3 d-flex align-items-center border-right my-4">
                            <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-white " @click="$router.push('/tiku')">カテゴリ</button>
                        </div>
                        <div class="col-3 d-flex align-items-center border-right my-4">
                            <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-white " @click="$router.push('/Category')">おすすめ</button>
                        </div>
                        <div class="col-3 d-flex align-items-center my-4 ">
                            <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-white" @click="$router.push('/osusume')">記事一覧</button>
                        </div>
                    </div>
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

