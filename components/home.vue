<template>
    <div>


            <img class="w-100" src="../image/sakurajima.jpg">
            <div class="background">
                
                <div class="text-center">
                    <br>
                    <h1>　探す　</h1>
                    <div class="rgb-gray text-center">
                        

                        <div class="row">
                            <div class="col-md-3">
                            </div>

                            <div data-aos="fade-up" class="col-md-6">
                                <div class="position-relative"> 
                                    <NuxtLink to="/tiku">
                                        <img class="w-75 mt-5 hov radius-img" src="../image/tiku.jpg">
                                    </NuxtLink>
                                </div>
                            </div>

                            <div class="col-md-3">
                            </div>

                            <br>

                            
                            <div data-aos="fade-up" class="col-md-6 mt-5">
                                <div  class="position-relative">
                                    <NuxtLink to="/Category">
                                        <img class="w-75 hov radius-img" src="../image/Category.jpg">
                                    </NuxtLink>
                                </div>
                            </div>

                            <div data-aos="fade-up" class="col-md-6 mt-5">
                                <div class="position-relative">
                                    <NuxtLink to="/osusume">
                                        <img class="w-75 hov radius-img" src="../image/osusume.jpg">
                                    </NuxtLink>
                                    
                                </div>
                            </div>

                            <div style="height:300px;">
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