<template>
    <div class="background">
        <div class="container text-center animate__animated animate__fadeIn">
            <h1>テストテキスト</h1>
            <div class="bg-muted">


                <table class="mx-5">
                    <tr>
                        <td>
                            <img class="asp16-9 w-100" src="../image/noimage.png">
                        </td>
                        <td>
                            <h2>テストテキスト</h2>
                            <p>テストテキスト</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <iframe class="asp16-9 w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.09196471694!2d130.4592858422113!3d31.57652586864088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e6890e5567859%3A0x38b8db0c3af28bbc!2z44CSODk5LTI3MDQg6bm_5YWQ5bO255yM6bm_5YWQ5bO25biC5pil5bGx55S677yR77yR77yS77yW4oiS77yS!5e0!3m2!1sja!2sjp!4v1687827652089!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </td>
                        <td>
                            <img class="asp16-9 w-100" src="../image/noimage.png">
                        </td>
                    </tr>
                </table>
                <button type="button" class="btn btn-primary" @click="$router.push('/')">もっと見る</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'osusume'
    }
    
</script>