<template>
    <div>

            <div class="background_home">
                <img class="w-100 home" src="../image/home.png">
                <img class="w-100 home_small d-no" src="../image/home_small.png">
                
                <div class="text-center m-auto pb-5">
                    
                    <img id="pc_s" class="w-100" src="../image/top_text.png">
                    <img id="iphone_s" class="w-100 d-no home_toptext_res" src="../image/top_text_triming.png">
                    <div class="text-center">
                        

                        <div class="row text-whitesmoke">
                            <div class="col-sm-2">
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 align-self-center mt-5">
                                <h2 class="mb-3">地区から探す</h2>
                                <p>地域ごとの特色あるグルメ<br>地元の味をぜひお探しください</p>
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_img_m">
                                <NuxtLink to="/tiku">
                                    <img class="w-75  hov radius-img" src="../image/tiku.jpg">
                                </NuxtLink>
                            </div>
                            <div class="col-sm-2">
                            </div>

                            <div class="col-sm-2">
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 align-self-center mt-5">
                                <h2 class="mb-3">カテゴリから探す</h2>
                                <p>丼 スイーツ etc...<br>お好みのジャンルはこちらから</p>
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_img_m">
                                <NuxtLink class="w-100" to="/Category">
                                    <img class="w-75  hov radius-img" src="../image/Category.jpg">
                                </NuxtLink>
                            </div>
                            <div class="col-sm-2">
                            </div>

                            <div class="col-sm-2">
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 align-self-center mt-5">
                                <h2 class="mb-3">おすすめ</h2>
                                <p>地元のおすすめの飲食店を<br>厳選してご紹介</p>
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_img_m">
                                <NuxtLink to="/osusume">
                                    <img class="w-75  hov radius-img" src="../image/osusume.jpg">
                                </NuxtLink>
                            </div>
                            <div class="col-sm-2">
                            </div>

                            
                            


                        </div>
                    </div>
                </div>
            
            </div>
    </div>
</template>

<script>
    export default{
        mounted(){
            AOS.init();
        },
        beforeDestroy(){
            AOS.init();
        },
        name: 'Home'
    }
    
</script>