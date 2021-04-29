<template>
  <div class="big">
    <div id="pic" class="time_zone">
      <div class="container_9">
        <ul class="time-horizontal">
          <h3 style="position: absolute; top: 10px; left: 20px">时间线</h3>
          <li>
            <a
                href="javascript:void(0);"
                class="click12"
                @click="toggle('第五次反围剿失败','继前四次反围剿胜利后，使得人们过于乐观化，王明“左”倾教条主义在红军中占据了统治地位，用阵地战代替了游击战和运动战，使红军完全处于被动地位，最后于1934年10月仓促命令中央领导机关和红军主力退出根据地。')"
                @mouseover="show.show1 = true"
                @mouseleave="show.show1 = false"
            ></a
            >1934-10-10
            <div class="pic12">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E7%AC%AC%E4%BA%94%E6%AC%A1%E5%8F%8D%E5%9B%B4%E5%89%BF%E5%A4%B1%E8%B4%A5.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show1"

              />
              <h4>第五次反围剿失败</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click11" @mouseover="show.show2 = true"
               @mouseleave="show.show2 = false"
               @click="toggle('湘江战役','1934年11月中旬，中央红军突破国民党军第三道封锁线后，由湖南省南部向广西省（今广西壮族自治区）北部前进。蒋介石为将中央红军歼灭于湘江以东地区，任命何键为“追剿”军总司令，指挥16个师共77个团分五路专事“追剿”；并令桂军5个师在全州、兴安、灌阳等地阻击红军；令粤军4个师北进粤湘桂边，阻止红军南下；令贵州省“剿共”总指挥王家烈派有力部队到湘黔边堵截，总兵力近30万人。当时，中共中央和中央革命军事委员会领导人博古和共产国际派来的军事顾问李德一味退却逃跑，消极避战，为实现到湘西与红2、红6军团会合的计划，决定中央红军分两路前进。其部署是：红3、红8军团为右纵队，经保和圩、青和圩向嘉禾方向前进；红1、红9军团为左纵队，经梅田向临武、蓝山前进；军委第1、第2纵队及红5军团为中央纵队，随后跟进。至25日，红军从道县和水口间全部渡过潇水，随后为了调动敌人，寻机渡过湘江，以一部兵力西进永明。桂军副总司令白崇禧为防红军攻取桂林，令其主力南移至龙虎关、恭城一带，阻止红军西进，并防止蒋军乘机进入广西。这样，全州、兴安一线守军兵力比较薄弱。')"></a>1934-11-27
            <div class="pic11">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E9%A3%9E%E5%A4%BA%E6%B3%B8%E5%AE%9A%E6%A1%A5.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show2"
              />
              <h4>湘江战役</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click3" @mouseover="show.show3 = true"
               @mouseleave="show.show3 = false"
               @click="toggle('强渡乌江','突破国民党四道封锁线之后，国民党紧追不舍，红军们在未得到有效休整的前提下，又碰到了长征以来的第二道难关—乌江天险。这条横亘在贵州大地上的长河，以其水深水急而闻名于世。不巧当时正值当日，寒风凛冽，风吹浪打，让本就湍急的乌江更添凶险。但是这难不倒我们的红军将士们，有人提出用乘竹筏渡河的想法，红军很快开始实验，八名将士乘着竹排在暴雨之中悄然渡河，顺利渡过了巨浪的考验，但是又碰到了漩涡的突袭，第一波将士牺牲了，第二波将士毅然开始了下一次尝试，很幸运的是他们有惊无险地渡过了，很快一支又一支竹筏纷纷下水。经过了一番惨烈地激战，红军最终成功强渡乌江，挥师遵义。')"></a>1935-1-1
            <div class="pic3">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E5%BC%BA%E6%B8%A1%E4%B9%8C%E6%B1%9F.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show3"
              />
              <h4>强渡乌江</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class='click7'
               @mouseover="show.show4=true"
               @mouseleave="show.show4=false"

               @click="toggle('遵义会议','红军在强渡乌江之后，以极快的速度占领了遵义，并由一军团向娄山关、桐梓方向追击，扩大占领区，确保中央机关的安全。同时遵义会议在毛泽东、张闻天、王稼祥等领导同志的努力促成下，红军占领遵义后，1935年1月15日至17日，在遵义召开中共中央政治局扩大会议。')"></a>1935-1-15
            <div class='pic7'>
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E9%81%B5%E4%B9%89%E4%BC%9A%E8%AE%AE.png"
                  style="width: 320px; height: 180px;position:absolute;top: -200px;left: 3px;" v-if="show.show4">
              <h4>遵义会议</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click2"
               @mouseover="show.show5=true"
               @mouseleave="show.show5=false"
               @click="toggle('四渡赤水','遵义会议后，中革军委向各军团首长下达了《渡江作战计划》，拟定：中央红军各部进至赤水、土城附近地域后，分3路纵队由宜（宾）泸（州）间的蓝田坝、大渡口、江安一线北渡长江。\n1935年1月19日起，红军分三路先后从遵义、桐梓、松坎地区出发，向土城、赤水前进。29日凌晨，红军大部队分左中右三路，从元厚、土城向西渡过赤水河，即四渡赤水第一渡。\n红军进至扎西地区，敌仍判断红军我将北渡长江，除向宜宾段各主要渡口增兵外，又调滇军和川军潘文华部向扎西地区逼近，企图对红军分进合击。\n鉴于敌军主力已大部被红军吸引到川滇边境，黔北兵力空虚的情况，红军决定出敌不意的回师东进，折回贵州。红军先头1个团先敌抢渡二郎滩，成功地掩护部队于2月18日至20日，在太平渡、二郎滩第二次渡过赤水河，并继续向桐梓、遵义方向前进。遵义地区的这次作战，历时五天，击溃和歼灭敌2个师又8个团，俘敌3000余，是中央红军战略转移以来取得的一次最大的胜利，极大地鼓舞了士气，打击了敌人的反动气焰。\n红军遵义大捷后，蒋介石于3月2日急忙飞往重庆，亲自指挥对红军的围攻，企图采取堡垒与重点进攻相结合的战法，南守北攻，围歼红军于遵义、鸭溪狭窄地区。为粉碎敌人新的围攻，红军将计就计，伪装在遵义地区徘徊寻敌，以诱敌迫进，然后再转兵西北，寻求新的机动。于15日进占仁怀，16日从茅台第三次渡过赤水河，再入川南。敌误以为红军又要北渡长江，急忙调整部署，向川南压逼我军，企图再次对红军形成合围，聚歼红军于长江南岸地区。\n3月20日～22日，毛泽东命令中央红军秘密、迅速地从太平渡、二郎滩、九溪口第四次渡过赤水河。3月23日经习水二郎、仁怀三合、大坝、高大坪。')"></a>1935-1-19
            <div class="pic2">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E5%9B%9B%E6%B8%A1%E8%B5%A4%E6%B0%B4.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show5"
              />
              <h4>四渡赤水</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click8"
               @mouseover="show.show11=true"
               @mouseleave="show.show11=false"
               @click="toggle('巧渡金沙江','中央红军佯攻贵阳，调出滇军，为北渡金沙江创造了条件。1935年4月29日，中革军委发出《关于野战军速渡金沙江转入川西建立苏区的指示》，指出由于两月来的机动，我野战军已取得西向的有利条件，一般追敌已在我侧后，但敌已集中七十团以上兵力向我追击。现在金沙江两岸空虚，因此政治局决定我野战军应利用目前有利时机，争取迅速渡过金沙江，转入川西消灭敌人，建立起苏区根据地。当日，中央红军分三路前进。5月1日，先头部队直趋金沙江畔。\n金沙江位于长江上游，穿行在川滇边界的深山狭谷间，江面宽阔，水急浪大。如果红军过不去，就会被敌人压进深山狭谷，招致全军覆灭的危险。当中央红军向金沙江挺进时，蒋介石和龙云认定红军的目的地既不在贵阳，也不在昆明，而是“必渡金沙江无疑”，即派飞机对沿金沙江上空疯狂轰炸，又命令控制渡口，毁坏、沉匿所有渡江船筏，企图阻止红军渡江，情况十分紧急。\n5月2日，朱德命令红一军团从龙街渡江、红三军团从洪门渡渡江、红五军团从皎平渡渡江。并命令刘伯承率干部团一部在皎平渡架桥，同时侦查渡河点。5月3日，刘伯承率部赶到皎平渡渡口，缴获两只木船，乘船悄悄地渡到北岸，消灭国民党军一连正规军和一个保安队，控制了渡口。随后，他们又找到5条船，动员36名艄公。从5月3日至9日7天7夜的时间里，红军主力就靠这7只小船渡过金沙江。单独行动的红九军团，在完成红军的牵制任务后，于5月9日在树节、盐井坪地区渡过金沙江。两天后，敌人追兵赶到南岸时，红军已毁船封江，无影无踪。')"></a>1935-5-3
            <div class="pic8">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E5%B7%A7%E6%B8%A1%E9%87%91%E6%B2%99%E6%B1%9F.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show11"
              />
              <h4>巧渡金沙江</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);"
               @mouseover="show.show6=true"
               @mouseleave="show.show6=false"
               class="click4"
               @click="toggle('强渡大渡河','1935年5月上旬，中央红军长征巧渡金沙江后，沿会理至西昌大道继续北上，准备渡过大渡河进入川西北。蒋介石急令第2路军前线总指挥薛岳率主力北渡金沙江向四川省西昌进击；\n5月24日晚，中央红军先头部队急行军赶到大渡河右岸的安顺场。此地由川军2个连驻守，当晚，红1团由团政治委员黎林率第2营到渡口下游佯攻，团长杨得志率第1营冒雨分三路隐蔽接近安顺场，突然发起攻击，经20多分钟战斗，击溃川军2个连，占领了安顺场，并在渡口附近找到1只木船。\n25日晨，刘伯承、聂荣臻亲临前沿阵地指挥。7时强渡开始，岸上轻重武器同时开火，掩护突击队渡河，炮手赵章成两发迫击炮弹命中对岸碉堡。突击队冒着川军的密集枪弹和炮火，在激流中前进。快接近对岸时，川军向渡口反冲击，杨得志命令再打两炮，正中川军。突击队迅速登岸，并在右岸火力的支援下奋勇冲杀，击退川军的反扑，控制了渡口，后续部队及时渡河增援，一举击溃川军1个营，巩固了渡河点，由此渡过了被国民党军视为不可逾越的天险大渡河。')"></a>1935-5-24
            <div class="pic4">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E5%BC%BA%E6%B8%A1%E5%A4%A7%E6%B8%A1%E6%B2%B3.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show6"
              />
              <h4>强渡大渡河</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click9"
               @mouseover="show.show7=true"
               @mouseleave="show.show7=false"
               @click="toggle('飞夺泸定桥','泸定桥又称铁索桥位于四川省泸定县境内，东西净跨 100 米、铁索长 101.67 米、桥宽 2.7米。康熙四十四年（1705 年）动工兴建，康熙四十五年（1706 年）竣工。泸定桥桥体分别由桥身、桥台、桥亭三个部分组成。桥身，由十三根铁链组成，其中 9 根底链，左右各 2 根扶手，底链上满铺木板。13 根铁链之间按一定距离用小铁链相连接，形成一个整体。自此，泸定桥成为四川入藏的重要通道和军事要津。 \n1935 年 5 月 25 日，红军在安顺场抢渡大渡河。面对国民党军的围追堵截，浪大水急的大渡河口，船少人多的红军形势十分严峻。5 月 26 日，毛泽东、周恩来、朱德等人当即决定，由左右两路夹大渡河而上，夺取泸定桥。此时的泸定桥，已有国民党的两个团防守，同时获悉又有两个旅前往增援，企图阻拦红军北上。 \n1935 年 5 月 28 日早晨，接到命令的红四团官兵，为与增援之敌赛跑，在天降大雨，山路崎岖泥泞的情况下，忍着饥饿疲累跑步前进，一昼夜兼行 240 里，终于在 5 月 29 日凌晨到达泸定桥西岸。当时百余米的泸定桥，已被敌人拆去了八十余米的桥板。面对严峻形势，长途奔袭的红四团不顾疲累，在团长和政委的指挥下马上发起总攻。枪炮声，喊杀声，顿时响彻山谷。担任突击队的二连 ，在连长的带领下，22 位勇士手握短枪，肩背马刀，腰缠手榴弹，冒着东岸敌人的火力封锁，在铁索桥上边铺门板边匍匐前进。当突击队发起进攻后，敌人在桥头放起火来，妄图阻止我军前进。此时东岸我军也赶到了泸定桥，很快将火扑灭。在两岸红军的夹击下，守桥敌人部分被我军消灭，部分仓皇逃跑。飞夺泸定桥战斗持续两个小时。红军主力顺利渡过天险大渡河，浩浩荡荡奔赴抗日的最前线。但是，当年飞夺泸定桥的 22 位勇士，绝大多数没有留下姓名。泸定桥又称铁索桥位于四川省泸定县境内，东西净跨 100 米、铁索长 101.67 米、桥宽 2.7米。康熙四十四年（1705 年）动工兴建，康熙四十五年（1706 年）竣工。泸定桥桥体分别由桥身、桥台、桥亭三个部分组成。桥身，由十三根铁链组成，其中 9 根底链，左右各 2 根扶手，底链上满铺木板。13 根铁链之间按一定距离用小铁链相连接，形成一个整体。自此，泸定桥成为四川入藏的重要通道和军事要津。 \n1935 年 5 月 25 日，红军在安顺场抢渡大渡河。面对国民党军的围追堵截，浪大水急的大渡河口，船少人多的红军形势十分严峻。5 月 26 日，毛泽东、周恩来、朱德等人当即决定，由左右两路夹大渡河而上，夺取泸定桥。此时的泸定桥，已有国民党的两个团防守，同时获悉又有两个旅前往增援，企图阻拦红军北上。 \n1935 年 5 月 28 日早晨，接到命令的红四团官兵，为与增援之敌赛跑，在天降大雨，山路崎岖泥泞的情况下，忍着饥饿疲累跑步前进，一昼夜兼行 240 里，终于在 5 月 29 日凌晨到达泸定桥西岸。当时百余米的泸定桥，已被敌人拆去了八十余米的桥板。面对严峻形势，长途奔袭的红四团不顾疲累，在团长和政委的指挥下马上发起总攻。枪炮声，喊杀声，顿时响彻山谷。担任突击队的二连 ，在连长的带领下，22 位勇士手握短枪，肩背马刀，腰缠手榴弹，冒着东岸敌人的火力封锁，在铁索桥上边铺门板边匍匐前进。当突击队发起进攻后，敌人在桥头放起火来，妄图阻止我军前进。此时东岸我军也赶到了泸定桥，很快将火扑灭。在两岸红军的夹击下，守桥敌人部分被我军消灭，部分仓皇逃跑。飞夺泸定桥战斗持续两个小时。红军主力顺利渡过天险大渡河，浩浩荡荡奔赴抗日的最前线。但是，当年飞夺泸定桥的 22 位勇士，绝大多数没有留下姓名。')"></a>1935-5-29
            <div class="pic9">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E9%A3%9E%E5%A4%BA%E6%B3%B8%E5%AE%9A%E6%A1%A5.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show7"
              />
              <h4>飞夺泸定桥</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click5"
               @mouseover="show.show8=true"
               @mouseleave="show.show8=false"
               @click="toggle('翻越夹金山 更喜岷山千里雪，三军过后尽开颜。','夹金山位于川西，横亘在四川宝兴县和懋功（今小金）县之间，又名“甲金山”，藏语称为“甲几”，意为很高很陡的意思。地势陡险，山峰连绵，山巅终年积雪；空气稀薄，天气变化无常。当地民谣称：“夹金山，夹金山，鸟儿飞不过，人更不可攀。要想越过夹金山，除非神仙到人间！”夹金山是中央红军长征中翻越的第一座大雪山。\n1935年6月，强渡大渡河不久，红军即向懋功地区挺进。为甩开追在身后的敌人，迅速实现与红四方面军的会合，中央红军决定，选择敌人较少的雪山草地一线，达到快速行军目的。1935年6月12日拂晓，先遣队开始沿着崎岖狭窄的泥路翻越雪山，一路经过凉水井、扎角坝、菩生岗、烧鸡窝、一直箭、五倒拐……向夹金山顶爬去。当天下午，克服重重困难翻越夹金山的红军先遣队，来到与达维古镇遥相对应的半山坡上，与正执行任务的红四方面军策应部队突然相遇，两军在此意外会合。先遣队胜利翻越夹金山与红四方面军会合的消息传到硗碛，大大鼓舞了中央红军指战员的士气。\n6月13日，中央主力红军翻越夹金山前，在夹金山下的的扎角坝，召开翻山动员大会。随后，红军战士包括伤病员、女战士在内，在藏民的帮助下，用柏树皮、干竹子扎起了一把把“火照”，砍来竹竿、树条做成一根根路杖，把干海椒分给每个战士，作为翻雪山时的御寒品。战士们扔掉一些不必要的物品，束紧腰带，向长征以来的第一座大雪山夹金山挺进。6月17日，毛泽东、周恩来、朱德等带领的党中央、军委和直属部队翻越夹金山，进抵达维。从6月12日到18日，历时七天七夜，中央红军主力全部翻过夹金山，与红四方面军在懋功胜利会师。军委总政治部在达维古镇后山上的喇嘛寺前，举行胜利会师庆祝大会。')"></a>1935-6-12
            <div class="pic5">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E7%BF%BB%E8%B6%8A%E9%87%91%E5%A4%B9%E5%B1%B1.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show8"
              />
              <h4>翻越夹金山 "更喜岷山千里雪，三军过后尽开颜。"</h4>
            </div>
          </li>
          <li>
            <a href="javascript:void(0);" class="click6"
               @mouseover="show.show9=true"
               @mouseleave="show.show9=false"
               @click="toggle('过草地 没过草地路，难知长征苦。','对于长征中的红军来说，翻过大雪山，并不意味着艰苦的行军已结束。迎接他们的，是更难逾越的茫茫大草地。位于川西北的红原县，因红军长征而得名，1960年，为纪念红军经过草原及川西北人民在中国革命危难关头所作出的贡献而建立。周恩来专门题词：“红军走过的大草原”。\n日干乔大沼泽位于红原县瓦切镇北部，泥潭密布，气候无常，被称为陆地上的“死亡之海”。 1936年8月，红二、四方面军左路纵队从阿坝出发，经红原渡过蜿蜒西流的嘎曲河，经日干乔踏上了茫茫泽国的艰难征程。\n 　　肖锋的《长征日记》中写道：进入草地第四天，清晨出发，到分水岭东南宿营，究竟走多远无法正确计算，好多单位都没粮食了，菜和肉干也吃光了，军团政治部民运部有位干事，过分水岭不久，就突然倒在了草地。“当年红军过草地的艰难，是后人难以感受的。”首先是行难，茫茫草地，一望无涯，遍地是水草沼泽泥潭，根本就没有路。 茫茫大草地，并没有让红军前进的步伐停下来。他们互相搀扶，步履坚定地朝着北方前进。\n 饥饿，则是过草地的红军战士最惨痛的记忆。红军后代何继军说，奶奶13岁参加红军，生前不止一次对他说过，过草地时吃草根、野菜，留下印象最深的就一个字：饿。 “草地的水因为长年泡着腐草，又黑又臭又有毒，根本不能饮用。”贺建军说，进入草地前，各部队虽然开展筹粮工作，但在川西北物产不丰的贫瘠之地，有的部队甚至只筹到两天的干粮。进入草地后，战士们身上背的一小袋青稞麦粒或青稞麦粉，成为他们的第二生命，麦粒一颗颗地数着吃，麦粉一小把一小把地省着吃。 \t茫茫草地，无路可走。草地上还有不少绿草覆盖的泥沼，人和牲口掉到里面，越陷越深，直至被吞没。仅据红一军的统计，牺牲者和掉队者就有500多人。广大红军将士能够克服、战胜过雪山草地的困难，首要的就是对革命事业的无限忠诚和顽强的革命意志。这是走出死亡世界的强大精神原动力。 　　过草地时，部队规定，每人带的那袋粮食属于集体的，没有命令谁也无权动用一粒。对于这项规定，战士们都模范遵守。有的同志饿得昏倒过去，也不肯动用自己所背的那袋粮食。即使在那样艰难的环境下，红军将士也充满了革命的乐观主义精神，充满了阶级友爱和革命情谊。这是红军走出雪山草地的又一重要原因。\n一切为了群众，一切依靠群众。这是红军战胜困难的力量源泉。 红军长征途经粮台村时，为穷苦村民分田分地，并成立苏维埃政府。粮台村村民马林发的奶奶是当地苏维埃政府委员，马林发说，他的伯伯马康林，当年只有16岁，也参加了红军。 “听奶奶讲，我们这个村里，当时参加红军的有十几个人。”马林发说。红军长征时，沿途都有不少村民加入。他们一步步地从“打土豪分田地”的愿望，逐渐升华为面向全国、全民族的崇高理想，构筑起红军战士那坚不可摧的理想信念。\n 自1935年1月29日刚在土城战斗中失利的红一方面军进入四川，开启红军长征在四川的征程，到红二、红四方面军1936年8月走出雪山草地离开四川，红军三大主力长征期间在四川境内转战一年零八个月。')"></a>1935-8-21
            <div class="pic6">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E8%BF%87%E8%8D%89%E5%9C%B0.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show9"
              />
              <h4>过草地 "没过草地路，难知长征苦。"</h4>
            </div>
          </li>
          <li style="margin-left: 100px">
            <a href="javascript:void(0);" class="click1"
               @mouseover="show.show10=true"
               @mouseleave="show.show10=false"
               @click="toggle('三军会宁大会师','会宁，北依黄河，东南紧靠西兰公路，是红二、四方面军北上的必经之路，战略位置十分重要。\n “1936 年 6 月，中共中央根据国内时局的演变和夺取宁夏、扩大陕甘根据地的需要，作出了红军三大主力在会宁会师的战略决策。会宁北临靖远，是红军会师休整、北进发动‘宁夏战役’的最佳地域。”毛泽东在陕北保安讨论红军三大主力会师的地点时讲道，红一、二、四方面军会合是件大事，三大主力会合的地点一定要慎重考虑，要选择一个好地方。当时，周恩来建议放在会宁，这一主张当即得到毛泽东的赞同。他高兴地说：“会宁、会宁，红军会师，中国安宁……建议就在会宁会师。”\n9 月 13 日，党中央和中革军委及时制定了“静会战役计划”。根据计划确定的任务，9 月14 日，红一方面军右路纵队十五军团 73 师进占会宁打拉池地区，一部直插会宁县北部的郭城驿、宋家河畔，切断了会宁通往靖远的道路，使驻守两县的敌军失去了联系。 9 月 18 日，左路纵队 1 军团 1 师、2 师逼近西兰公路，红 1 师占领了静宁县的界石铺和会宁东南青江驿、老君坡、杨崖集一线，并以此为中心控制了西兰公路。红一方面军主力部队集结静宁、隆德、海原、靖远一带，在会宁外围形成了一个弧形保护圈，给红二、四方面军北进创造了极为有利的条件。 至此，三大主力红军会宁会师的条件和时机已经完全成熟。 10 月 1 日傍晚，由韦杰、夏云飞率领的红一方面军十五军团骑兵团急行军到达会宁县城北 10 里处的小村庄杨家寨子(今柴家门镇柴家门村寨子社)，封锁了通往城里的道路。10月 2 日凌晨，骑兵团以战斗队列突进县城，从接受作战任务到攻克会宁县城，历时 32 小时，行程 300 多里地，全歼县城守敌，拉开了三军大会师的序幕。\n 1936 年 10 月 9 日，碧空万里，阳光和煦。陇原古道名城会宁焕发了青春，红 1 团在南城门用木板搭起了彩门，在南门城墙上，悬挂着写有“欢迎劳苦功高的朱总司令张总政委”的红绸布横幅。整个会宁城红旗招展，锣鼓喧天，气氛非常热烈。当徐向前、陈昌浩率红四方面军部队进城时，陈赓与红 1 团官兵及当地群众夹道欢迎，锣鼓声、口号声响彻云霄。徐向前、陈昌浩与陈赓紧紧拥抱，细叙思念之情。朱德、张国焘率领红军总部随后进入会宁城，把会师气氛推向了高潮。同时到达的还有红军大学和步校 3000 多名学生，以及第 4 军和 31军。 这个小小的县城沸腾了，锣鼓喧天，暴风雨般的掌声经久不息。朱德热泪盈眶，朝着欢腾的人群挥手致意，用哽咽的声音喊着：“中国共产党万岁！红军胜利会师万岁……”')"></a>1936-9-13
            <div class="pic1">
              <img
                  src="https://images-wujunyi.oss-cn-shanghai.aliyuncs.com/redchina/%E4%BC%9A%E5%B8%88.png"
                  style="
                  width: 320px;
                  height: 180px;
                  position: absolute;
                  top: -200px;
                  left: 3px;
                "
                  v-if="show.show10"
              />
              <h4>三军会宁大会师</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <detail
      :title="detailData.title"
      :passage="detailData.passage"
      :ifshow="isShow"
  ></detail>
</template>

<script>
import detail from "@/components/detail";

export default {
  name: "Timeline",
  components: {
    detail,
  },
  data() {
    return {
      // items: [],
      isShow: false,
      detailData: {
        title: "",
        passage: "",
      },
      show: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
      }
    };
  },
  methods: {
    toggle(title, passage) {
      this.isShow = !this.isShow;
      this.detailData.title = title;
      this.detailData.passage = passage;
    },
  },
  mounted() {
    var oipc = document.getElementById("pic");
    var bcg = document.querySelector(".big");
    var isDrag = false;
    var disX, disY;
    //鼠标移动功能
    oipc.onmousedown = function (e) {
      isDrag = true;
      this.style.cursor = "move";
      e = e || window.event;

      var x = e.clientX;

      disX = x - this.offsetLeft;
    };
    var is_in = false;
    bcg.onmouseout = function (e) {
      is_in = false;
      oipc.style.cursor = "default";
    };
    bcg.onmouseover = function (e) {
      is_in = true;
    };
    //////////////////////////////////////鼠标滚动检测
    var scrollFunc = function (e) {
      var direct = 0;
      e = e || window.event;
      if (e.wheelDelta && is_in) {
        //判断浏览器IE，谷歌滑轮事件
        var mousewheelevt = /Firefox/i.test(navigator.userAgent) ?
            "DOMMouseScroll" :
            "mousewheel";
        if (document.attachEvent) {
          document.attachEvent("on" + mousewheelevt, function (e) {
            mousewheel_event(e.wheelDelta);
          });
        } else if (document.addEventListener) {
          document.addEventListener(
              mousewheelevt,
              function (e) {
                mousewheel_event(e.detail);
              },
              false
          );
        }
        oipc.style.cursor = "default";

        function mousewheel_event() {
          var e = e || window.event;
          if (e.wheelDelta > 0 && is_in && oipc.offsetLeft <= 110) {
            oipc.style.cursor = "move";
            oipc.style.left = oipc.offsetLeft + 10 + "px";
          } else if (e.wheelDelta < 0 && is_in && oipc.offsetLeft >= -3330) {
            oipc.style.cursor = "move";
            oipc.style.left = oipc.offsetLeft - 10 + "px";
          }
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        var mousewheelevt = /Firefox/i.test(navigator.userAgent) ?
            "DOMMouseScroll" :
            "mousewheel";
        if (document.attachEvent) {
          document.attachEvent("on" + mousewheelevt, function (e) {
            mousewheel_event(e.wheelDelta);
          });
        } else if (document.addEventListener) {
          document.addEventListener(
              mousewheelevt,
              function (e) {
                mousewheel_event(e.detail);
              },
              false
          );
        }
        oipc.style.cursor = "default";

        function mousewheel_event() {
          var e = e || window.event;
          if (e.wheelDelta != 0 && is_in) {
            oipc.style.cursor = "move";
            oipc.style.left = oipc.offsetLeft + e.wheelDelta / 20 + "px";
          }
        }
      }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;

    document.onmousemove = function (e) {
      if (!isDrag) {
        return;
      }
      e = e || window.event;

      var x = e.clientX;
      if (oipc.offsetLeft <= 110 && oipc.offsetLeft >= -3330) {
        oipc.style.left = x - disX + "px";
      } else if (oipc.offsetLeft > 110) {
        oipc.style.left = 109 + "px";
      } else if (oipc.offsetLeft < -3330) {
        oipc.style.left = -2029 + "px";
      }
    };

    document.onmouseup = function () {
      isDrag = false;
      oipc.style.cursor = "default";
    };

    //接下去是Dom操作代码,操作显示与否
    // var dianji1 = document.querySelector(".click1");
    // var img1 = document.querySelector(".pic1");
    // img1.style.opacity = "0";
    // dianji1.onmouseover = function() {
    //   img1.style.opacity = "1";
    //   img1.style.transition = "opacity 0.5s";
    // };
    // dianji1.onmouseout = function() {
    //   img1.style.opacity = "0";
    //   img1.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji2 = document.querySelector(".click2");
    // var img2 = document.querySelector(".pic2");
    // img2.style.opacity = "0";
    // dianji2.onmouseover = function() {
    //   img2.style.opacity = "1";
    //   img2.style.transition = "opacity 0.5s";
    // };
    // dianji2.onmouseout = function() {
    //   img2.style.opacity = "0";
    //   img2.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji3 = document.querySelector(".click3");
    // var img3 = document.querySelector(".pic3");
    // img3.style.opacity = "0";
    // dianji3.onmouseover = function() {
    //   img3.style.opacity = "1";
    //   img3.style.transition = "opacity 0.5s";
    // };
    // dianji3.onmouseout = function() {
    //   img3.style.opacity = "0";
    //   img3.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji4 = document.querySelector(".click4");
    // var img4 = document.querySelector(".pic4");
    // img4.style.opacity = "0";
    // dianji4.onmouseover = function() {
    //   img4.style.opacity = "1";
    //   img4.style.transition = "opacity 0.5s";
    // };
    // dianji4.onmouseout = function() {
    //   img4.style.opacity = "0";
    //   img4.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji5 = document.querySelector(".click5");
    // var img5 = document.querySelector(".pic5");
    // img5.style.opacity = "0";
    // dianji5.onmouseover = function() {
    //   img5.style.opacity = "1";
    //   img5.style.transition = "opacity 0.5s";
    // };
    // dianji5.onmouseout = function() {
    //   img5.style.opacity = "0";
    //   img5.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji6 = document.querySelector(".click6");
    // var img6 = document.querySelector(".pic6");
    // img6.style.opacity = "0";
    // dianji6.onmouseover = function() {
    //   img6.style.opacity = "1";
    //   img6.style.transition = "opacity 0.5s";
    // };
    // dianji6.onmouseout = function() {
    //   img6.style.opacity = "0";
    //   img6.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji7 = document.querySelector(".click7");
    // var img7 = document.querySelector(".pic7");
    // img7.style.opacity = "0";
    // dianji7.onmouseover = function() {
    //   img7.style.opacity = "1";
    //   img7.style.transition = "opacity 0.5s";
    // };
    // dianji7.onmouseout = function() {
    //   img7.style.opacity = "0";
    //   img7.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji8 = document.querySelector(".click8");
    // var img8 = document.querySelector(".pic8");
    // img8.style.opacity = "0";
    // dianji8.onmouseover = function() {
    //   img8.style.opacity = "1";
    //   img8.style.transition = "opacity 0.5s";
    // };
    // dianji8.onmouseout = function() {
    //   img8.style.opacity = "0";
    //   img8.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji9 = document.querySelector(".click9");
    // var img9 = document.querySelector(".pic9");
    // img9.style.opacity = "0";
    // dianji9.onmouseover = function() {
    //   img9.style.opacity = "1";
    //   img9.style.transition = "opacity 0.5s";
    // };
    // dianji9.onmouseout = function() {
    //   img9.style.opacity = "0";
    //   img9.style.transition = "opacity 0.5s";
    // };

    // var dianji10 = document.querySelector(".click10");
    // var img10 = document.querySelector(".pic10");
    // img10.style.opacity = "0";
    // dianji10.onmouseover = function() {
    //     img10.style.opacity = "1";
    //     img10.style.transition = "opacity 0.5s";
    // };
    // dianji10.onmouseout = function() {
    //     img10.style.opacity = "0";
    //     img10.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji11 = document.querySelector(".click11");
    // var img11 = document.querySelector(".pic11");
    // img11.style.opacity = "0";
    // dianji11.onmouseover = function() {
    //   img11.style.opacity = "1";
    //   img11.style.transition = "opacity 0.5s";
    // };
    // dianji11.onmouseout = function() {
    //   img11.style.opacity = "0";
    //   img11.style.transition = "opacity 0.5s";
    // };
    //
    // var dianji12 = document.querySelector(".click12");
    // var img12 = document.querySelector(".pic12");
    // img12.style.opacity = "0";
    // dianji12.onmouseover = function() {
    //   img12.style.opacity = "1";
    //   img12.style.transition = "opacity 0.5s";
    // };
    // dianji12.onmouseout = function() {
    //   img12.style.opacity = "0";
    //   img12.style.transition = "opacity 0.5s";
    // };
  },
};
</script>

<style scoped>
.big {
  width: 100%;
  height: 600px;
  position: absolute;
  /* left: 560px; */
  top: 150px;
  background-color: gray;
  overflow: hidden;
}

.time-horizontal a:hover {
  background: #9cdcf0;
}

.time-horizontal a:active {
  background: red;
}

.time-horizontal {
  list-style-type: none;
  border-top: 1px solid #707070;
  max-width: 6000px;
  padding: 0px;
  margin: 100px;
}

.time-horizontal li {
  float: left;
  position: relative;
  text-align: center;
  width: 7%;
  padding-top: 10px;
}

.time-horizontal li a {
  content: "";
  position: absolute;
  top: -10px;
  left: 47%;
  width: 12px;
  height: 12px;
  border: 2px solid #4c4c4c;
  border-radius: 8px;
  background: #4c4c4c;
}

.time_zone {
  width: 5000px;
  height: 200px;
  position: absolute;
  left: 100px;
  top: 200px;
  background: yellow;
  box-shadow: -10px 15px 15px 15px #4c4c4c;
  border-radius: 30px;
  /* FF3.6+ */
  /*overflow-x: scroll;*/
}

.container_9 {
  height: 1px;
}
</style>