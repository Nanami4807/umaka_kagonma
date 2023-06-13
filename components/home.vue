<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
            <img class="w-100" src="../image/sakurajima.jpg">
            <div class="background">
                
                <div class="text-center">
                    <br>
                    <h1 class="mt-5">　探す　</h1>
                    <div class="rgb-gray text-center">
                        

                        <div class="row">
                            <div class="col-md-3">
                            </div>

                            <div class="col-md-6">
                                <div class="position-relative"> 
                                    <div class="img_wrap">
                                        <img class="w-75" src="../image/tiku.jpg">
                                    </div>
                                        <div class="position-absolute text-white" style="top:30%; left:42%;">
                                            
                                            <button type="button" class="btn btn-primary mt-5 ">view more</button>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                            </div>

                            <br>

                            
                            <div class="col-md-6 mt-5">
                                <div class="position-relative">
                                    <img class="w-75" src="../image/Category.jpg">
                                    <div class="position-absolute text-white" style="top:30%; left:35%;">
                                        
                                        <button type="button" class="btn btn-primary mt-5" @click="$router.push('/Category')">view more</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mt-5">
                                <div class="position-relative">
                                    <img class="w-75" src="../image/osusume.jpg">
                                    <div class="position-absolute text-white" style="top:30%; left:35%;">
                                        
                                        <button type="button" class="btn btn-primary mt-5 ">view more</button>
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
        name: 'Home'
    }
    
</script>