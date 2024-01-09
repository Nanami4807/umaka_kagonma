<template>
    <div class="background">
        <img class="w-100" src="../image/header.png">
        <div class="text-center">
            <h1>カテゴリ</h1>
            <div class="rgb-gray">
                <div class="row">
                    <div class="col-md-6 mt-5">
                        <NuxtLink to ="/category/noodles/pages/list/1">
                            <img class="w-75 radius-img hov" src="../image/menrui.jpg">
                        </NuxtLink>
                        <h1>麺類</h1>
                    </div>
                    <div class="col-md-6 mt-5">
                        <NuxtLink to ="/category/don/pages/list/1">
                            <img class="w-75 radius-img hov" src="../image/donmono.jpg">
                        </NuxtLink>
                        <h1>丼もの</h1>
                    </div>

                    <div class="col-md-6 mt-5">
                        <NuxtLink to ="/category/sweets/pages/list/1">
                            <img class="w-75 radius-img hov" src="../image/sui-tu.jpg">
                        </NuxtLink>
                        <h1>スイーツ</h1>
                    </div>
                    <div class="col-md-6 mt-5">
                        <NuxtLink to ="/category/other/pages/list/1">
                            <img class="w-75 radius-img hov" src="../image/sonota.jpg">
                        </NuxtLink>
                        <h1>その他</h1>
                    </div>
                </div>
            </div>
        </div>
        <div style="height:300px;">
        </div>
    </div>
    
</template>

<script>
    export default{
        name: 'kategori'
    }
    
</script>