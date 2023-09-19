<template>
    <div class="background">
        <div class="container text-center">
            <h1>いっぱい食べたい人におすすめ！</h1>
            <div class="bg-muted">
                
            </div>

            <div class="row">
                <div class="col-md-6 my-auto">
                    <h2>肉と海鮮グリル パスタン</h2>
                    <p>名前の通り肉と海鮮がとてもおいしい店でボリュームも満点！！！</p>
                </div>
                <div class="col-md-6">
                    <img class="asp16-9 w-100" src="../ryouri_image/pasutan-1.jpg">
                </div>

                <div class="col-md-6">
                    <img class="asp16-9 w-100" src="../ryouri_image/pasutan-2.jpg">
                </div>
                <div class="col-md-6">
                    <iframe class="asp16-9 w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.6598258386025!2d130.5513883458412!3d31.58851735075064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e61758a2160f5%3A0x157a4a466afe3672!2z6IKJ44Go5rW36a6u44Kw44Oq44OrIOODkeOCueOCv-ODsyDlpKnmlofppKjlupc!5e0!3m2!1sja!2sjp!4v1693271734207!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="col-12 text-center">
                    <button type="button" class="btn btn-primary" @click="$router.push('/')">もっと見る</button>
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