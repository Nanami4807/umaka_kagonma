<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <div class="container">
            <img class="w-100" src="../image/sakurajima.jpg">
            <div class="background">
                <div class="text-center">
                    <button type="button" class="btn btn-primary mt-5 ">探す</button>
                    <div class="rgb-gray">
                        <div class="position-relative">
                            <img class="w-50" src="../image/tiku.png">
                                <div class="position-absolute top-25 start-50 text-white">    
                                <p>地区から探す</p>
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