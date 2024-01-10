<template>
<div class="background">
    <img class="w-100" src="../image/header.png">
    <div class="mt-5 container animate__animated animate__fadeIn">
        <div class="row text-center">
            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_leftup.png">
            </div>
            <div class="col-6 col-md-8"></div>
            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_rightup.png">
            </div>
            <div class="col-3"></div>
            <div class="col-6">
                <img class="w-100" src="../image/tiku_top.png">
            </div>
            <div class="col-3"></div>
            
            <div class="col-md-6 mt-5">
                <img class="w-100 mb-5 px-5" src="../image/tiku_tizu.png" alt="地図">
            </div>

            <div class="col-md-6 my-auto">
                <div class="align-items-center">
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/tyu-ou/pages/list/1">
                        <img class="w-50 hov p_tiku_text" src="../image/tiku_tyuou.png">
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/taniyama/pages/list/1">
                        <img class="w-50 p_tiku_text hov" src="../image/tiku_taniyama.png">
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/matumoto/pages/list/1">
                        <img class="w-50 p_tiku_text hov" src="../image/tiku_matumoto.png">
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                </div>
            </div>

            <div class="col-2 col-md-2">
                <img class="w-75" src="../image/corner_leftdown.png">
            </div>
            <div class="col-8 col-md-8"></div>
            <div class="col-2 col-md-2">
                <img class="w-75" src="../image/corner_rightdown.png">
            </div>
        </div>
    </div>
    <div style="height:150px;">
    </div>
</div>
</template>

<script>
    export default{
        name: 'tiku'
    }
</script>