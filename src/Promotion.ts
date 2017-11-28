// 晋升
class Promotion extends eui.UILayer{
    public constructor(){
        super();
        this.drawPromotion();
    }

    private leftTeam41;
    private rightTeam41;
    private leftTeam42;
    private rightTeam42;
    private leftTeam43;
    private rightTeam43;
    private leftTeam44;
    private rightTeam44;
    private leftTeam21;
    private rightTeam21;
    private leftTeam22;
    private rightTeam22;
    private leftTeam11;
    private rightTeam11;

<<<<<<< HEAD

=======
    private teamF41:egret.TextField;
    private teamF42:egret.TextField;
    private teamF43:egret.TextField;
    private teamF44:egret.TextField;
    private teamF21:egret.TextField;
    private teamF22:egret.TextField;
    private teamF11:egret.TextField;
>>>>>>> f24d1938b2579efca055879d20b3367481f73185

    private drawPromotion(){
        //蒙版
       let layer:egret.Shape = new egret.Shape();
       layer.graphics.beginFill(0x000000,0.7);
       layer.graphics.drawRect(0,0,window['store']['stage_Width'],window['store']['stage_Height']);
       layer.graphics.endFill();
       this.addChild(layer);
       //容器
       let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       wrap.width = 664;
       wrap.height = 1092;
       wrap.anchorOffsetX = 332;
       wrap.anchorOffsetY = 546;
       wrap.x = window['store']['stage_anWidth'];
       wrap.y = window['store']['stage_anHeight'];
       wrap.scaleX= window['store'].scale;
       wrap.scaleY= window['store'].scale;
       this.addChild(wrap);
       //bg
       let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-promotion_png'));
       wrap.addChild(bg);
       
        //决赛
        // 左边
        // 插入边框
        let lbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder11.x = 208;
        lbgBorder11.y = 521;
        wrap.addChild(lbgBorder11);
        //队伍icon
        this.leftTeam11 = new eui.Image();
        this.leftTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam11.width = 62;
        this.leftTeam11.height = 62;
        this.leftTeam11.x = 211;
        this.leftTeam11.y = 524;
        wrap.addChild(this.leftTeam11);
        //  右边
        // 插入边框
        let rbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder11.x = 371;
        rbgBorder11.y = 521;
        wrap.addChild(rbgBorder11);
        //队伍icon
        this.rightTeam11 = new eui.Image();
        this.rightTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam11.width = 62;
        this.rightTeam11.height = 62;
        this.rightTeam11.x = 374;
        this.rightTeam11.y = 524;
        wrap.addChild(this.rightTeam11);

        this.teamF11 = new egret.TextField();
        this.teamF11.x = 176;
        this.teamF11.y = 522;
        this.teamF11.text = '3:2';
        this.teamF11.size = 32;
        this.teamF11.textColor = 0xffffff;
        this.teamF11.width = 300;
        this.teamF11.height = 68;
        this.teamF11.bold = true;
        this.teamF11.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF11.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF11); 


         //1/2 top
        // 左边
        // 插入边框
        let lbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder21.x = 208;
        lbgBorder21.y = 300;
        wrap.addChild(lbgBorder21);
        //win
        let proWin09 = this.proWin();
        proWin09.x = 192;
        proWin09.y = 283;
        wrap.addChild(proWin09)
        //队伍icon
        this.leftTeam21 = new eui.Image();
        this.leftTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam21.width = 62;
        this.leftTeam21.height = 62;
        this.leftTeam21.x = 211;
        this.leftTeam21.y = 303;
        wrap.addChild(this.leftTeam21);
        //  右边
        // 插入边框
        let rbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder21.x = 371;
        rbgBorder21.y = 300;
        wrap.addChild(rbgBorder21);
        //win
        let proWin010 = this.proWin();
        proWin010.x = 355;
        proWin010.y = 283;
        wrap.addChild(proWin010)
        //队伍icon
        this.rightTeam21 = new eui.Image();
        this.rightTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam21.width = 62;
        this.rightTeam21.height = 62;
        this.rightTeam21.x = 374;
        this.rightTeam21.y = 303;
        wrap.addChild(this.rightTeam21);

        this.teamF21 = new egret.TextField();
        this.teamF21.x = 176;
        this.teamF21.y = 300;
        this.teamF21.text = '3:2';
        this.teamF21.size = 32;
        this.teamF21.textColor = 0xffffff;
        this.teamF21.width = 300;
        this.teamF21.height = 68;
        this.teamF21.bold = true;
        this.teamF21.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF21.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF21); 


         //1/2 bottom
        // 左边
        // 插入边框
        let lbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder22.x = 208;
        lbgBorder22.y = 743;
        wrap.addChild(lbgBorder22);
        //win
        let proWin11 = this.proWin();
        proWin11.x = 192;
        proWin11.y = 726;
        wrap.addChild(proWin11)
        //队伍icon
        this.leftTeam22 = new eui.Image();
        this.leftTeam22.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam22.width = 62;
        this.leftTeam22.height = 62;
        this.leftTeam22.x = 211;
        this.leftTeam22.y = 746;
        wrap.addChild(this.leftTeam22);
        //  右边
        // 插入边框
        let rbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder22.x = 371;
        rbgBorder22.y = 743;
        wrap.addChild(rbgBorder22);
         //win
        let proWin012 = this.proWin();
        proWin012.x = 355;
        proWin012.y = 726;
        wrap.addChild(proWin012)
        //队伍icon
        this.rightTeam22 = new eui.Image();
        this.rightTeam22.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam22.width = 62;
        this.rightTeam22.height = 62;
        this.rightTeam22.x = 374;
        this.rightTeam22.y = 746;
        wrap.addChild(this.rightTeam22);

        this.teamF22 = new egret.TextField();
        this.teamF22.x = 176;
        this.teamF22.y = 743;
        this.teamF22.text = '3:2';
        this.teamF22.size = 32;
        this.teamF22.textColor = 0xffffff;
        this.teamF22.width = 300;
        this.teamF22.height = 68;
        this.teamF22.bold = true;
        this.teamF22.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF22.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF22); 



        //1/4 1
        // 左边
        // 插入边框
        let lbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder41.x = 32;
        lbgBorder41.y = 57;
        wrap.addChild(lbgBorder41);
        //win
        let proWin01 = this.proWin();
        proWin01.x = 16;
        proWin01.y = 40;
        wrap.addChild(proWin01)
        
        //队伍icon
        this.leftTeam41 = new eui.Image();
        this.leftTeam41.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam41.width = 62;
        this.leftTeam41.height = 62;
        this.leftTeam41.x = 35;
        this.leftTeam41.y = 60;
        wrap.addChild(this.leftTeam41);
        //  右边
        // 插入边框
        let rbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder41.x = 195;
        rbgBorder41.y = 57;
        wrap.addChild(rbgBorder41);
         //win
        let proWin02 = this.proWin();
        proWin02.x = 179;
        proWin02.y = 40;
        wrap.addChild(proWin02)
        //队伍icon
        this.rightTeam41 = new eui.Image();
        this.rightTeam41.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam41.width = 62;
        this.rightTeam41.height = 62;
        this.rightTeam41.x = 198;
        this.rightTeam41.y = 60;
        wrap.addChild(this.rightTeam41);

        this.teamF41 = new egret.TextField();
        this.teamF41.x = 0;
        this.teamF41.y = 57;
        this.teamF41.text = '3:2';
        this.teamF41.size = 32;
        this.teamF41.textColor = 0xffffff;
        this.teamF41.width = 300;
        this.teamF41.height = 68;
        this.teamF41.bold = true;
        this.teamF41.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF41.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF41); 


         //1/4 2
        // 左边
        // 插入边框
        let lbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder42.x = 395;
        lbgBorder42.y = 57;
        wrap.addChild(lbgBorder42);
         //win
        let proWin03 = this.proWin();
        proWin03.x = 379;
        proWin03.y = 40;
        wrap.addChild(proWin03)
        //队伍icon
        this.leftTeam42 = new eui.Image();
        this.leftTeam42.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam42.width = 62;
        this.leftTeam42.height = 62;
        this.leftTeam42.x = 398;
        this.leftTeam42.y = 60;
        wrap.addChild(this.leftTeam42);
        //  右边
        // 插入边框
        let rbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder42.x = 558;
        rbgBorder42.y = 57;
        wrap.addChild(rbgBorder42);
         //win
        let proWin04 = this.proWin();
        proWin04.x = 542;
        proWin04.y = 40;
        wrap.addChild(proWin04)
        //队伍icon
        this.rightTeam42 = new eui.Image();
        this.rightTeam42.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam42.width = 62;
        this.rightTeam42.height = 62;
        this.rightTeam42.x = 561;
        this.rightTeam42.y = 60;
        wrap.addChild(this.rightTeam42);

        this.teamF42 = new egret.TextField();
        this.teamF42.x = 363;
        this.teamF42.y = 57;
        this.teamF42.text = '3:2';
        this.teamF42.size = 32;
        this.teamF42.textColor = 0xffffff;
        this.teamF42.width = 300;
        this.teamF42.height = 68;
        this.teamF42.bold = true;
        this.teamF42.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF42.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF42); 


        //1/4 3
        // 左边
        // 插入边框
        let lbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder43.x = 32;
        lbgBorder43.y = 968;
        wrap.addChild(lbgBorder43);
         //win
        let proWin05 = this.proWin();
        proWin05.x = 16;
        proWin05.y = 951;
        wrap.addChild(proWin05)
        //队伍icon
        this.leftTeam43 = new eui.Image();
        this.leftTeam43.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam43.width = 62;
        this.leftTeam43.height = 62;
        this.leftTeam43.x = 35;
        this.leftTeam43.y = 971;
        wrap.addChild(this.leftTeam43);
        //  右边
        // 插入边框
        let rbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder43.x = 195;
        rbgBorder43.y = 968;
        wrap.addChild(rbgBorder43);
        //win
        let proWin06 = this.proWin();
        proWin06.x = 179;
        proWin06.y = 951;
        wrap.addChild(proWin06)
        //队伍icon
        this.rightTeam43 = new eui.Image();
        this.rightTeam43.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam43.width = 62;
        this.rightTeam43.height = 62;
        this.rightTeam43.x = 198;
        this.rightTeam43.y = 971;
        wrap.addChild(this.rightTeam43);

        this.teamF43 = new egret.TextField();
        this.teamF43.x = 0;
        this.teamF43.y = 968;
        this.teamF43.text = '3:2';
        this.teamF43.size = 32;
        this.teamF43.textColor = 0xffffff;
        this.teamF43.width = 300;
        this.teamF43.height = 68;
        this.teamF43.bold = true;
        this.teamF43.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF43.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF43); 


         //1/4 4
        // 左边
        // 插入边框
        let lbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder44.x = 395;
        lbgBorder44.y = 968;
        wrap.addChild(lbgBorder44);
          //win
        let proWin07 = this.proWin();
        proWin07.x = 379;
        proWin07.y = 951;
        wrap.addChild(proWin07)
        //队伍icon
        this.leftTeam44 = new eui.Image();
        this.leftTeam44.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam44.width = 62;
        this.leftTeam44.height = 62;
        this.leftTeam44.x = 398;
        this.leftTeam44.y = 971;
        wrap.addChild(this.leftTeam44);
        //  右边
        // 插入边框
        let rbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder44.x = 558;
        rbgBorder44.y = 968;
        wrap.addChild(rbgBorder44);
        //win
        let proWin08 = this.proWin();
        proWin08.x = 542;
        proWin08.y = 951;
        wrap.addChild(proWin08)
        //队伍icon
        this.rightTeam44 = new eui.Image();
        this.rightTeam44.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam44.width = 62;
        this.rightTeam44.height = 62;
        this.rightTeam44.x = 561;
        this.rightTeam44.y = 971;
        wrap.addChild(this.rightTeam44);
        this.teamF44 = new egret.TextField();
        this.teamF44.x = 363;
        this.teamF44.y = 968;
        this.teamF44.text = '3:2';
        this.teamF44.size = 32;
        this.teamF44.textColor = 0xffffff;
        this.teamF44.width = 300;
        this.teamF44.height = 68;
        this.teamF44.bold = true;
        this.teamF44.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF44.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(this.teamF44); 


        // [{211,524}]
        // let proWin01 = this.proWin();
        // proWin01.x = 16;
        // proWin01.y = 41;
        // wrap.addChild(proWin01);

<<<<<<< HEAD


         
//决赛
        let wrap11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap11.x = 176;
        wrap11.y = 522;
        wrap11.width = 300;
        wrap11.height = 68;
         // 左边队伍头像容器
        let leftUserBox11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox11.width = 68;
        leftUserBox11.height = 68;
        leftUserBox11.x = 32;
        leftUserBox11.y = 0;  
        wrap11.addChild(leftUserBox11); 
        // 插入边框
        let lbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox11.addChild(lbgBorder11);
        //队伍icon
        this.leftTeam11 = new eui.Image();
        this.leftTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam11.width = 62;
        this.leftTeam11.height = 62;
        this.leftTeam11.x = 3;
        this.leftTeam11.y = 3;
        leftUserBox11.addChild(this.leftTeam11);
        //  右边队伍头像容器
        let rightUserBox11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox11.width = 68;
        rightUserBox11.height = 68;
        rightUserBox11.x = 195;
        rightUserBox11.y = 0;  
        wrap11.addChild(rightUserBox11); 
        // 插入边框
        let rbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox11.addChild(rbgBorder11);
        //队伍icon
        this.rightTeam11 = new eui.Image();
        this.rightTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam11.width = 62;
        this.rightTeam11.height = 62;
        this.rightTeam11.x = 3;
        this.rightTeam11.y = 3;
        rightUserBox11.addChild(this.rightTeam11);
        let teamF11:egret.TextField = new egret.TextField();
        teamF11.text = '3:2';
        teamF11.size = 32;
        teamF11.textColor = 0xffffff;
        teamF11.width = 300;
        teamF11.height = 68;
        teamF11.bold = true;
        teamF11.textAlign = egret.HorizontalAlign.CENTER;
        teamF11.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap11.addChild(teamF11); 



        let proWin01 = this.proWin();
        proWin01.x = 16;
        proWin01.y = -16;
        wrap41.addChild(proWin01);

        let proWin02 = this.proWin();
        proWin02.x = 179;
        proWin02.y = -16;
        wrap41.addChild(proWin02);


        wrap.addChild(wrap41);
        wrap.addChild(wrap42);
        wrap.addChild(wrap43);
        wrap.addChild(wrap44);
        wrap.addChild(wrap21);
        wrap.addChild(wrap22);
        wrap.addChild(wrap11);
       
=======
>>>>>>> f24d1938b2579efca055879d20b3367481f73185
    }

    private proWin(){
        let img = new egret.Bitmap(RES.getRes('proWin_png'));
        return img;
    }
    private upTeamData(leftTeam41,rightTeam41){
        this.leftTeam41.source = leftTeam41;
        this.rightTeam41.source = rightTeam41;
    }

}