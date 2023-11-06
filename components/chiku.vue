<template>
<div class="background">
    <div class="container animate__animated animate__fadeIn">
        <div class="row text-center">
            <span><h1>地区</h1></span>
            <div class="col-md-6">
                <img class="w-75" src="../image/tiku_tizu.png" alt="地図">
            </div>

            <div class="col-md-6">
                <div class="align-items-center">
                    <p><button type="button" class="btn bg-blue mt-3 text-warning w-75" @click="$router.push('/tiku/tyu-ou/pages/list/1')">中央地区</button></p>
                    <p><button type="button" class="btn mt-3 bg-blue text-warning w-75" @click="$router.push('/tiku/taniyama/pages/list/1')">谷山地区</button></p>
                    <p><button type="button" class="btn bg-blue text-warning mt-3 w-75" @click="$router.push('/tiku/matumoto/pages/list/1')">松元地区</button></p>
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
        name: 'tiku'
    }
</script>