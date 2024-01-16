<template>
<div class="background">
    <img class="w-100" src="../image/header.png">
    <div class="py-5 container animate__animated animate__fadeIn">
        <div class="row text-center">
            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_leftup.png">
            </div>
            <div class="col-6 col-md-8"></div>
            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_rightup.png">
            </div>
            <div class="col-12">
                <h1 class="text-whitesmoke">地区から探す</h1>
            </div>
            
            <div class="col-md-6 mt-5">
                <img class="w-100 mb-5 px-5" src="../image/tiku_tizu.png" usemap="#ImageMap" alt="地図"/>
                <map name="ImageMap">
                <area shape="poly" coords="757,142,730,202,630,222,598,252,526,290,523,381,580,423,642,506,550,617,420,657,389,734,311,698,217,701,16,910,15,1003,130,1145,350,1239,394,1313,467,1353,482,1441,489,1517,541,1543,587,1624,650,1669,740,1686,865,1783,929,1692,999,1661,996,1600,1035,1555,1051,1401,1115,1348,1100,1297,1224,1124,1135,845,1151,765,1217,670,1212,546,1154,512,1141,447,1208,208,1138,146,961,154,934,148" href="/tiku/matumoto/pages/list/1" alt="" />
                <area shape="poly" coords="1256,702,1181,825,1224,1011,1268,1108,1266,1147,1152,1283,1162,1359,1146,1404,1096,1421,1086,1566,1045,1616,1036,1704,896,1823,895,1968,917,2030,895,2089,912,2149,685,2373,732,2466,832,2552,969,2887,1036,2892,1068,2951,1158,2942,1219,2957,1256,3006,1429,2974,1439,3117,1473,3184,1446,3361,1487,3522,1536,3631,1599,3641,1630,3540,1698,3520,1784,3462,1895,3413,1995,3439,1968,3353,1943,3179,1894,2880,2161,2940,2190,2811,2000,2787,1897,2670,1931,2544,1967,2531,1892,2442,1916,2415,1965,2469,2028,2460,2065,2550,2144,2573,2179,2442,2231,2399,2185,2312,1989,2241,2020,2171,2167,2185,2312,1820,2285,1808,2252,1825,2253,1794,2144,1679,2095,1687,2059,1650,2007,1637,1989,1583,2000,1561,1907,1519,1837,1392,1836,1392,1765,1187,1627,1097,1560,1026,1578,952,1608,965,1575,894,1449,881,1365,815,1365,815" href="/tiku/taniyama/pages/list/1" alt="" />
                <area shape="poly" coords="1269,520,1501,476,1593,600,1661,652,1793,648,1901,696,1957,704,1917,536,2033,520,2245,492,2301,408,2301,320,2361,208,2489,228,2529,204,2465,8,2497,20,2601,196,2673,236,2725,316,2725,368,2773,328,2857,348,2809,400,2809,492,2825,508,2661,640,2657,688,2701,720,2761,744,2705,788,2677,808,2729,864,2757,828,2825,828,2845,868,2861,820,2929,820,2929,892,2765,892,2685,920,2665,976,2737,976,2733,1092,2597,1392,2565,1524,2469,1544,2405,1508,2373,1556,2405,1588,2381,1676,2317,1668,2281,1736,2177,1624,2121,1636,2109,1592,2061,1600,2053,1512,1969,1492,1881,1308,1813,1156,1681,1056,1709,984,1613,836,1433,796,1357,668,1301,640,1285,592" href="/tiku/tyu-ou/pages/list/1" alt="" />
                </map>
            </div>

            <script src="https://unpkg.com/image-map-resizer@1.0.10/js/imageMapResizer.min.js"></script>
            <script>imageMapResize();</script>

            <div class="col-md-6 my-auto">
                <div class="align-items-center">
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/tyu-ou/pages/list/1" class="text-decoration-none">
                        <h2 class="w-100 hov p_tiku_text text-whitesmoke">中央地区</h2>
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/taniyama/pages/list/1" class="text-decoration-none">
                        <h2 class="w-100 hov p_tiku_text text-whitesmoke">谷山地区</h2>
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                    <NuxtLink to="/tiku/matumoto/pages/list/1" class="text-decoration-none">
                        <h2 class="w-100 hov p_tiku_text text-whitesmoke">松元地区</h2>
                    </NuxtLink>
                    <img class="w-75" src="../image/line.png">
                </div>
            </div>

            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_leftdown.png">
            </div>
            <div class="col-6 col-md-8"></div>
            <div class="col-3 col-md-2">
                <img class="w-75" src="../image/corner_rightdown.png">
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: 'tiku'
    }
</script>