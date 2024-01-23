<template>
    <div class="background">
        <style>
            .row .col-md-6{
                padding:0;
            }
        </style>
        <img class="w-100" src="../image/header.png">
        <div class="container text-center text-whitesmoke py-5">


            <div class="row">
                <div class="col-3 col-md-2 text-start">
                    <img class="w-75" src="../image/corner_leftup.png">
                </div>
                <div class="col-6 col-md-8"></div>
                <div class="col-3 col-md-2 text-end">
                    <img class="w-75" src="../image/corner_rightup.png">
                </div>
            </div>
            <div class="row mx-3 upper">

                <div class="col-12 mb-5"><h1>いっぱい食べたい人におすすめ！</h1></div>

                <div class="col-md-6 my-auto">
                    <h2>やきにくホルモン じゃばら</h2>
                    <p>安くてウマいが両立した良いお店</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/jabara/jabara-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505.32065208422136!2d130.54945259739387!3d31.568664175783564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e67bfae3ad795%3A0xcf7e027578dd7025!2z44KE44GN44Gr44GP44Ob44Or44Oi44OzIOOBmOOCg-OBsOOCiQ!5e0!3m2!1sja!2sjp!4v1699237668154!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/jabara/jabara-2.jpg">                 
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/8_th_t3thu')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>
                
                <div class="col-md-6 my-auto">
                    <h2>路のカフェ</h2>
                    <p>オムライス、ドリア、ステーキなどの洋食がおしゃれな空間で食べられます</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/miticafe/miticafe-1.png">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5012965812366!2d130.55126427629548!3d31.5927209435627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e007325825d%3A0xb8bf3058e99815df!2z6Lev44Gu44Kr44OV44Kn!5e0!3m2!1sja!2sjp!4v1698114223814!5m2!1sja!2sjp"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/miticafe/miticafe-2.jpg">                  
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/1zmlom0lvf7')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>

                <div class="col-md-6 my-auto">
                    <h2>肉と海鮮グリル パスタン</h2>
                    <p>名前の通り肉と海鮮がとてもおいしい店でボリュームも満点！！！</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 radius-img" src="../ryouri_image/pasutan/pasutan-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100 radius-img"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.6598258386025!2d130.5513883458412!3d31.58851735075064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e61758a2160f5%3A0x157a4a466afe3672!2z6IKJ44Go5rW36a6u44Kw44Oq44OrIOODkeOCueOCv-ODsyDlpKnmlofppKjlupc!5e0!3m2!1sja!2sjp!4v1693271734207!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 radius-img" src="../ryouri_image/pasutan/pasutan-2.jpg">                    
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn mb-5" @click="$router.push('/ug6gazwxj9y')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>
            </div>



            
            

            <div class="row mx-2">
                <div class="col-12 mb-5"><h1>ゆっくりしたい時におすすめ！</h1></div>
                <div class="col-md-6 my-auto">
                    <h2>Cafe 彼女の家</h2>
                    <p>ゆったりとした雰囲気と種類豊富なスイーツが魅力！</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/kanojonoie/kanojonoie-1.png">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.507151682567!2d130.55420707477367!3d31.592560443573355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e01a6ecc339%3A0x14953417576c7897!2z44Kr44OV44Kn5b285aWz44Gu5a62IOWkqeaWh-mkqOW6l--8iOaXpyDntI3lsYvlupfvvIk!5e0!3m2!1sja!2sjp!4v1695696555586!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/kanojonoie/kanojonoie-2.png">                    
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>


                <div class="col-md-6 my-auto">
                    <h2>マザルバカフェ</h2>
                    <p>おしゃれな雰囲気とこだわりのハンバーガーが人気！</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/mazaruba/mazaruba-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6797.339879913044!2d130.4590953829601!3d31.588097799999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e68878b40c9ef%3A0x782e635e2ef1ba96!2z44Oe44K244Or44OQ44Kr44OV44Kn!5e0!3m2!1sja!2sjp!4v1697425769213!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/mazaruba/mazaruba-2.jpg">                    
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/n62i7y8s-v')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>
                <div class="col-md-6 my-auto">
                    <h2>天文館フェスティバロ</h2>
                    <p>サツマイモを使ったスイーツがおすすめ</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/festibaro/festibaro-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020.8027734454658!2d130.55358677690324!3d31.590793293042722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e01d537ac4b%3A0x60cec3dc9641f32e!2z5aSp5paH6aSo44OV44Kn44K544OG44Kj44OQ44Ot!5e0!3m2!1sja!2sjp!4v1698715502070!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/festibaro/festibaro-2.jpg">                   
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/vmupmcm9g')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>
                 <div class="col-md-6 my-auto">
                    <h2>天文館むじゃき本店</h2>
                    <p>有名かき氷「しろくま」やっぱりおいしい</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/shirokuma/shirokuma-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.6570874279114!2d130.55502170682288!3d31.589238000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e60aa58af7d5b%3A0xe1ff875969c01c72!2z5aSp5paH6aSo44KA44GY44KD44GNIOacrOW6lw!5e0!3m2!1sja!2sjp!4v1698716035793!5m2!1sja!2sjp"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/shirokuma/shirokuma-2.jpg">                 
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/judku4zwf')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>

                <div class="col-md-6 my-auto">
                    <h2>Andenken（アンデンケン）吉野店</h2>
                    <p>スイーツとバウムクーヘン、ブッセ、焼き菓子が販売されており、作る様子が見られます。お土産でも、自家用としてもおすすめです。</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/andenken/andenken-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.4408294052814!2d130.567135076297!3d31.64915714076671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5eb972695555%3A0xe8606d92f07cd9ff!2zQW5kZW5rZW7vvIjjgqLjg7Pjg4fjg7PjgrHjg7PvvInlkInph47lupc!5e0!3m2!1sja!2sjp!4v1698114508416!5m2!1sja!2sjp"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/andenken/andenken-2.jpg">                  
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/y--28mjzj')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>

                <div class="col-md-6 my-auto">
                    <h2>アプリコット</h2>
                    <p>昔からあるケーキ屋さんですが、季節ごとに新作が次々登場するので飽きることがありません。</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/apurikotto/apurikotto-1.jpg">
                </div>

                <div class="col-md-6">
                    <iframe class="asp16-9 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.250560207953!2d130.54765705137046!3d31.573579129098615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e67360a48ffc3%3A0xca55360957f4430a!2z44Ki44OX44Oq44Kz44OD44OI!5e0!3m2!1sja!2sjp!4v1699234552152!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100 px-auto radius-img" src="../ryouri_image/apurikotto/apurikotto-2.jpg">                    
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn  mb-5" @click="$router.push('/wa4952ntssw4')"><i class="bi bi-caret-right-fill small"></i>&nbsp;もっと見る</button>
                </div>
            </div>

            <div class="row">

                <div class="col-3 col-md-2 text-start">
                    <img class="w-75" src="../image/corner_leftdown.png">
                </div>
                <div class="col-6 col-md-8"></div>
                <div class="col-3 col-md-2 text-end">
                    <img class="w-75" src="../image/corner_rightdown.png">
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
    export default{
        name: 'osusume'
    }
    
</script>