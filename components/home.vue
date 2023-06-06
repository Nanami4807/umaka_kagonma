<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
            <img class="w-100" src="../image/sakurajima.jpg">
            <div class="background">
                <div class="container">
                <div class="text-center">
                    <br>
                    <h1> <span class="mt-5">　探す　</span></h1>
                    <div class="rgb-gray text-center mt-5">
                        
                        <div class="position-relative">
                            <img class="home_img" src="../image/tiku.png">
                                <div class="position-absolute text-white" style="top:30%; left:42%;">
                                    <p style="font-size:1.5em;">地区から探す</p>
                                    <button type="button" class="btn btn-primary mt-5 ">view more</button>
                                </div>
                        </div>
                        <br>

                        <div class="row">
                            <div class="col-6">
                            <div class="position-relative">
                                <img class="home_img" src="../image/Category.png">
                                <div class="position-absolute text-white" style="top:30%; left:35%;">
                                    <p style="font-size:1.5em;">カテゴリから探す</p>
                                    <button type="button" class="btn btn-primary mt-5 ">view more</button>
                            </div>
                            </div>
                        </div>

                        <div class="col-6">
                        <div class="position-relative">
                            <img class="home_img" src="../image/osusume.png">
                            <div class="position-absolute text-white" style="top:30%; left:35%;">
                                <p style="font-size:1.5em;">オススメ</p>
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
    </div>
</template>

<script>
    export default{
        name: 'Home'
    }
    
</script>