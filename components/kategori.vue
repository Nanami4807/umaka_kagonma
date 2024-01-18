<template>
    <div class="background">
        <img class="w-100" src="../image/header.png">
        <div class="text-center text-whitesmoke py-5">
            <div class="row">
                <div class="col-3 col-md-2">
                    <img class="w-75" src="../image/corner_leftup.png">
                </div>
                <div class="col-6 col-md-8"></div>
                <div class="col-3 col-md-2">
                    <img class="w-75" src="../image/corner_rightup.png">
                </div>

                <div class="col-12"><h1>カテゴリ</h1></div>

                <div class="col-md-6 mt-5">
                    <NuxtLink to ="/category/noodles/pages/list/1" class="text-decoration-none text-whitesmoke">
                        <img class="w-75 radius-img hov" src="../image/menrui.jpg">
                        <h2>麺類</h2>
                    </NuxtLink>
                </div>
                <div class="col-md-6 mt-5">
                    <NuxtLink to ="/category/don/pages/list/1" class="text-decoration-none text-whitesmoke">
                        <img class="w-75 radius-img hov" src="../image/donmono.jpg">
                    <h2>丼もの</h2>
                    </NuxtLink>
                </div>

                <div class="col-md-6 mt-5">
                    <NuxtLink to ="/category/sweets/pages/list/1" class="text-decoration-none text-whitesmoke">
                        <img class="w-75 radius-img hov" src="../image/sui-tu.jpg">
                        <h2>スイーツ</h2>
                    </NuxtLink>
                </div>
                <div class="col-md-6 mt-5">
                    <NuxtLink to ="/category/other/pages/list/1" class="text-decoration-none text-whitesmoke">
                        <img class="w-75 radius-img hov" src="../image/sonota.jpg">
                        <h2>その他</h2>
                    </NuxtLink>
                </div>

                <div class="col-3 col-md-2">
                    <img class="w-75" src="../image/corner_leftdown.png">
                </div>
                <div class="col-6 col-md-8"></div>
                <div class="col-3 col-md-2">
                    <img class="w-75" src="../image/corner_rightdown.png">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default{
        name: 'kategori'
    }
    
</script>