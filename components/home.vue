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
                                    <img class="w-75" src="../image/tiku.jpg">
                                        <div class="text-center">
                                            <button type="button" class="btn btn-primary mt-1" @click="$router.push('/tiku')">view more</button>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                            </div>

                            <br>

                            
                            <div data-aos="fade-up" class="col-md-6 mt-5">
                                <div  class="position-relative">
                                    <img class="w-75" src="../image/Category.jpg">
                                    <div class="text-center" >
                                        <button type="button" class="btn btn-primary mt-1" @click="$router.push('/Category')">view more</button>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-up" class="col-md-6 mt-5">
                                <div class="position-relative">
                                    <img class="w-75" src="../image/osusume.jpg">
                                    <div class="text-center">
                                        <button type="button" class="btn btn-primary mt-1" @click="$router.push('/osusume')">view more</button>
                                    </div>
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