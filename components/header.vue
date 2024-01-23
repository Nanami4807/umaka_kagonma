<template>
<div>
    <div id="pc">
        <div class="bg-brown">
            <div class="container">
                <div class="row">
                    <div class="col-2 position-relative">
                        <NuxtLink class="no_color  position-absolute" to="/"><img class="w-75" src="../image/flag.png"></NuxtLink>
                    </div>

                    <div class="col-10">
                        <div class="row">
                            <div class="col-3 d-flex align-items-center border-right my-4">
                                <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke" @click="$router.push('/tiku')">地区</button>
                            </div>
                            <div class="col-3 d-flex align-items-center border-right my-4">
                                <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke " @click="$router.push('/Category')">カテゴリ</button>
                            </div>
                            <div class="col-3 d-flex align-items-center border-right my-4">
                                <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke " @click="$router.push('/osusume')">おすすめ</button>
                            </div>
                            <div class="col-3 d-flex align-items-center my-4 ">
                                <button type="button" class="border-0 w-100 bg-brown h-100 h4  text-whitesmoke" @click="$router.push('/pages/list/1')">記事一覧</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="iphone" class="d-no">
        <header class="header bg-brown">
                <div class="logo ">
                    <div class="my-5"></div>
                </div>
                <div class="nav">
    
                    <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
                    <input id="drawer_input" class="drawer_hidden" type="checkbox">
            
                    <!-- ハンバーガーアイコン -->
                    <label for="drawer_input" class="drawer_open"><span></span></label>
            
                    <!-- メニュー -->
                    <nav class="nav_content">
                    <ul class="nav_list">
                            <li class="nav_item"><NuxtLink to="/">TOP</NuxtLink></li>
                            <li class="nav_item"><NuxtLink to="/tiku">地区</NuxtLink></li>
                            <li class="nav_item"><NuxtLink to="/Category">カテゴリ</NuxtLink></li>
                        <li class="nav_item"><NuxtLink to="/osusume">オススメ</NuxtLink></li>
                    <li class="nav_item"><NuxtLink to="/pages/list/1">記事一覧</NuxtLink></li>
                    </ul>
                    </nav>
    
                </div>
        </header>
    </div>
</div>
</template>
<script>
    export default{
        name: 'Header'
    }
</script>

