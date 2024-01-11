<template>
    <div>

            <div class="background_home">
                <img class="w-100" src="../image/home.png">
            
                
                <div class="text-center m-auto">
                    
                    <img id="pc_s" class="w-100" src="../image/top_text.png">
                    <img id="iphone_s" class="w-100 d-no home_toptext_res" src="../image/top_text_triming.png">
                    <div class="text-center">
                        

                        <div class="row text-white">
                            <div class="col-sm-2">
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_text_m">
                                <img class="w-100 home_text_res" src="../image/tiku_text.png">
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
                            <div data-aos="fade-up" class="col-sm-4 d-flex  home_text_m">
                                <img class="w-100 home_text_res" src="../image/category_text.png">
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
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_text_m">
                                <img class="w-100 home_text_res" src="../image/osusume_text.png">
                            </div>
                            <div data-aos="fade-up" class="col-sm-4 d-flex home_img_m">
                                <NuxtLink to="/osusume">
                                    <img class="w-75  hov radius-img" src="../image/osusume.jpg">
                                </NuxtLink>
                            </div>
                            <div class="col-sm-2">
                            </div>

                            
                            

                            <div style="height:100px;">
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