class Cnt extends egret.DisplayObjectContainer{
    public constructor(Width,Height,anWidth,anHeight){
        super();
        this.drawCnt(Width,Height,anWidth,anHeight);
    }
    // 缩放系数
    private scale:number = window['store'].scale;
    // 反缩放系数 用户头像放大
    private scale2:number = 1/window['store'].scale;

    // 比赛进程 1/4 / 1/2  / 决赛
    private matchPro = '决赛';
    // 内容舞台 操作头像
    private bgCourtWrap:egret.DisplayObjectContainer ;

    // 头像位置  1 是自己
    private  userImg1:userImage
    private  userImg2:userImage
    private  userImg3:userImage
    private  userImg4:userImage
    private  userImg5:userImage
    private  userImg6:userImage
    private  userImg7:userImage
    private  userImg8:userImage
    private  userImg9:userImage

    // 比赛容器
    private fieldContain

    //  文字区域 开始 、 投注 、 结束 (放入 放出)
    private textT:TextTips ;

    // 定时器
    private timer:Timer ;

    // 总决赛的点球 4 个 进行复用
    private penalty0 ; private bgMask0;
    private penalty_point0 ; private bgMask_point0

    private penalty1 ; private bgMask1;
    private penalty_point1 ; private bgMask_point1 ;

    private penalty2 ; private bgMask2;
    private penalty_point2 ; private bgMask_point2;

    private penalty3 ; private bgMask3;
    private penalty_point3 ; private bgMask_point3;
    //冠军
    private champion:egret.DisplayObjectContainer;
    private championText:egret.TextField;

    //toast
    private toastText:egret.TextField;
    private toast;
    private toastBg:egret.Bitmap ;

    private drawCnt(Width,Height,anWidth,anHeight){
        let $store = window['store'] ,
        // 内容区
            wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = Width;
        wrap.height = Height; 
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);

        // 背景 
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg_jpg'));
        bg.anchorOffsetX = anWidth;
        bg.x = anWidth;
        bg.y = 0;
        wrap.addChild(bg);

         // 背景 桌子区域，用来定位桌子计时器和里面的足球场等
        this.bgCourtWrap = new egret.DisplayObjectContainer();
        this.bgCourtWrap.width = Width;
        this.bgCourtWrap.height = 1035; //963+30+42  桌子的高度加上计时器突出高度+头像突出高度
        this.bgCourtWrap.anchorOffsetX = this.bgCourtWrap.width/2;
        this.bgCourtWrap.anchorOffsetY = this.bgCourtWrap.height/2;
        this.bgCourtWrap.x = anWidth;
        this.bgCourtWrap.y = anHeight -16 ;

        $store['$bgCourtWrap'] = this.bgCourtWrap ;
        //问题，测试屏幕大小进行缩放
        this.bgCourtWrap.scaleX=this.scale;
        this.bgCourtWrap.scaleY=this.scale;
        wrap.addChild(this.bgCourtWrap);

        // 背景 大桌子
        let bgCourt:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width/2;
        bgCourt.x = anWidth;
        bgCourt.y = 30;
        this.bgCourtWrap.addChild(bgCourt);

        //倒计时
        this.timer = new Timer();
        this.timer.anchorOffsetX = 90;
        this.timer.x = anWidth;
        this.timer.y = 0;
        this.bgCourtWrap.addChild( this.timer );

        //文字说明区域
        this.textT = new TextTips();
        this.textT.anchorOffsetX = this.textT.width/2;
        this.textT.x = anWidth;
        this.textT.y = 76;
        this.bgCourtWrap.addChild( this.textT );
        this.fieldContain = new Field_ball_contain();
        $store['$fieldContain'] = this.fieldContain ;
        this.bgCourtWrap.addChild( this.fieldContain );

        //冠军
        this.champion = new egret.DisplayObjectContainer();
        this.champion.width = 241;
        this.champion.height = 200; 
        this.champion.x = 750;
        this.champion.y = 93;

        let championImg:egret.Bitmap = new egret.Bitmap(RES.getRes('champion_png'));
        this.champion.addChild(championImg);   

        this.championText = new egret.TextField();
        this.championText.alpha = 0;
        this.championText.text = '';
        this.championText.textColor = 0xffffff;
        this.championText.size = 36;
        this.championText.width = 241;
        this.championText.height = 200;
        this.championText.textAlign = egret.HorizontalAlign.CENTER;
        this.championText.verticalAlign = egret.VerticalAlign.BOTTOM;

        // this.bgCourtWrap.addChild(this.champion);
        // this.champion.addChild(this.championText); 

        //toast
        this.toast = new egret.DisplayObjectContainer();
        this.toast.width = 430;
        this.toast.height = 90; 
        this.toast.anchorOffsetX = 215;
        this.toast.anchorOffsetY = 45;
        this.toast.x =  $store['stage_anWidth'] ;
        this.toast.y =  $store['stage_anHeight'] ;
 
        this.toastBg = new egret.Bitmap(RES.getRes('bg-toast_png'));
        this.toastText = new egret.TextField();
        this.toastText.textColor = 0xffffff;
        this.toastText.size = 30;
        this.toastText.width =430;
        this.toastText.height = 90;
        this.toastText.textAlign = egret.HorizontalAlign.CENTER;
        this.toastText.verticalAlign = egret.VerticalAlign.MIDDLE;

        // this.addChild(this.toast);
        // this.toastText.text = 'toast提示';
        // this.toast.addChild(this.toastBg);
        // this.toast.addChild(this.toastText); 

    }

    /**
     *  tips 提示
     */
    private showTips( val:string ){
        if( val !== '' ){
            this.toastText.text = val ;
            if( !!this.toastBg ){
                this.toast.addChild(this.toastBg);
            }
            if( !!this.toast ){
                this.addChild(this.toast);
            }
            if( !!this.toastText ){
                this.toast.addChild(this.toastText);   
            }
            setTimeout(()=>{
                if( this.toastBg.parent  ){
                    this.toast.removeChild(this.toastBg);
                }
                if( this.toastText.parent ){
                    this.toast.removeChild(this.toastText);   
                }
            },1700)

        }else{
            if( !!this.toast ){
                this.removeChild(this.toast);
            }
            if( this.toastBg.parent  ){
                this.toast.removeChild(this.toastBg);
            }
            if( this.toastText.parent ){
                this.toast.removeChild(this.toastText);   
            }
        }
    }

    /**
     *  champion 冠军
     */
    private showChampion( name:string ){
        let $store = window['store'] ;
        if( !!this.champion ){
            this.bgCourtWrap.addChild( this.champion ) ;
            if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                egret.Tween.get(this.champion).to({x:254.5},200)
            }else{
                this.champion.x = 254.5 ;
            }
        }
        if( !!this.championText ){
            this.championText.text = name ;
            this.champion.addChild(this.championText) ; 
            if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                egret.Tween.get(this.championText).to({alpha:1},200)
            }else{
                this.championText.alpha = 1 ;
            }           
            
        }
        
    }

    /**
     *  remove champion 冠军
     */
    private delChampion(){
        if( this.champion.parent ){
            this.bgCourtWrap.removeChild(this.champion);
        }
        if( this.championText.parent ){
            this.champion.removeChild(this.championText); 
        }
    }

    /**
     *  4个进球的实例的初始化
     */
    private initAllPenalty(){
        let $store = window['store'] ,
            penaltyStr = 'penalty' ,
            bgMaskStr = 'bgMask' ,
            penaltyStr_p = 'penalty_point' ,
            bgMaskStr_p = 'bgMask_point' ;   

        for( let i = 0; i < 4 ; i++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  
            
            //决赛的开奖
            // 插入遮罩层,正常进球和点球要分开两个遮罩 mark
            this[bgMaskStr] = this.bgMask();
            this[bgMaskStr].anchorOffsetX = 245;
            this[bgMaskStr].x = $store.stage_anWidth;
            // this[bgMaskStr].y = 265;  
            // this.bgCourtWrap.addChild( this[bgMaskStr] );
            //正常进球
            this[penaltyStr] = new Penalty01();
            this[penaltyStr].anchorOffsetX = 245;
            this[penaltyStr].x = $store.stage_anWidth;

            // this[penaltyStr].y = 323;  //决赛265   +58  
            // this[penaltyStr].mask = this[bgMaskStr] ;
            // this.bgCourtWrap.addChild( this[penaltyStr] );

            // 过一会出现的
            // setTimeout(()=>{
            //     egret.Tween.get( this[penaltyStr] ).to( {y:265 },200 );
            // },3000)
    
            //点球
            this[bgMaskStr_p] = this.bgMask();
            this[bgMaskStr_p].anchorOffsetX = 245;
            this[bgMaskStr_p].x = $store.stage_anWidth;
            // this[bgMaskStr_p].y = 265;  
            // this.bgCourtWrap.addChild( this[bgMaskStr_p] );

            this[penaltyStr_p] = new Penalty02();
            this[penaltyStr_p].anchorOffsetX = 245;
            this[penaltyStr_p].x = $store.stage_anWidth;

            // this[penaltyStr_p].y = 323;  //决赛265   +58  
            // this[penaltyStr_p].mask = this[bgMaskStr_p] ;
            // this.bgCourtWrap.addChild( this[penaltyStr_p] );

            // setTimeout(()=>{
            //         egret.Tween.get( this[penaltyStr] ).to( {y:107 },200 );
            //     },5000)
            //     setTimeout(()=>{
            //         egret.Tween.get( this[penaltyStr_p]  ).to( {y:265 },200 );
            //     },5000)            
            // }
        }
    }

    /**
     *  延迟函数
     */
    private wait (duration = 250) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, duration)
        })
    }

    /**
     *  传入结算 长度  调整 4 2 1 的位置  
     *  显示比分 记得加上点球的比分  要做判断
     *  调整位置 -- 放入舞台 -- 执行动画 
     *  @param result  所有的数据 2005
     */
    async adjustPenalty( allResult ){
        // 比赛框的位置坐标 
        let local_4 = [120,300,505,700] ,
            local_2 = [210,480] , // 130 500  210 、480
            local_1 = [ 295 ] , // 265  + 30
            curr_local = null ,

            penaltyStr = 'penalty' ,
            bgMaskStr = 'bgMask' ,
            penaltyStr_p = 'penalty_point' ,
            bgMaskStr_p = 'bgMask_point' ,   

            len = allResult.length ,  // 数据长度
            findIndex = null ,
            endResult = null ,
            $store = window['store'] ;

        // 确保 在调用之前已经清除
        switch (len){
            case 4:
                curr_local = [...local_4] ;
            ;break;
            case 2:
                curr_local = [...local_2] ;
            ;break;
            case 1:
                curr_local = [...local_1] ;
            ;break;
        }
        // 放出对应进球 点球
        for( let i = 0;i < len; i++ ){

            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            this[bgMaskStr].y = curr_local[i];                                  
            this[penaltyStr].y = curr_local[i] + 58 ;

            this[bgMaskStr_p].y = curr_local[i];           
            this[penaltyStr_p].y = curr_local[i] + 58 ;

            if( !!this[bgMaskStr] ){
                this.bgCourtWrap.addChild( this[bgMaskStr] );
            }
            if( !!this[penaltyStr] ){
                this.bgCourtWrap.addChild( this[penaltyStr] );
            }
            if( !!this[bgMaskStr_p] ){
                this[penaltyStr].mask = this[bgMaskStr] ;
                this.bgCourtWrap.addChild( this[bgMaskStr_p] );
            }
            if( !!this[penaltyStr_p] ){
                this[penaltyStr_p].mask = this[bgMaskStr_p] ;
                this.bgCourtWrap.addChild( this[penaltyStr_p] );
            }
            this[penaltyStr].clearAllball();
            // 更新头像  获取头像  

            this[penaltyStr].upFootballImg(  this.cnt_getFieldImg( allResult[i].matchid ) )
            // 等等正常比分

            egret.Tween.get( this[penaltyStr] ).to( {y: curr_local[i] }, 300 );
            this[penaltyStr].createFootball( allResult[i].timeline , allResult[i].is_extratime ,allResult[i].matchid );

            if( $store['matFindField'][ allResult[i].matchid ] ){
                if( allResult[i].is_spotkick === '0' ){
                    if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_l'
                    }else{
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_r'
                    }
                }else{
                    if( parseInt ( allResult[i].spotkick[0] ) > parseInt ( allResult[i].spotkick[2] ) ){
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_l'
                    }else{
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_r'
                    }
                }
            }

        }

        // 在外面  await  18s   25s  
        await this.wait( 18550 );  

        if( len === 4 ){
            // 处理层级
            if( this.bgCourtWrap.getChildIndex( this['userImg1'] ) < this.bgCourtWrap.getChildIndex( this.fieldContain )  ){
                this.bgCourtWrap.swapChildren( this['userImg1'] , this.fieldContain ) ;
            }
        }

        // 同步  执行 点球
        // await this.start_showPenalty( allResult ,  curr_local);
        for( let i = 0; i < len ;i ++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            findIndex = this.findPenaltyStr( allResult[i].matchid ) ;
            if( allResult[i] && allResult[i].is_spotkick === '1' ){
                this.showPenalty( allResult[i].spotkick_style , curr_local , findIndex , allResult[i].matchid ,allResult[i].score )
            }else{
                // 无点球  根据 score 来显示对应的 win 图标 score 1:1
                // 去除 进球框 显示win .showWinLocation( matchid , leftOrRig );
                if( allResult[i] && allResult[i].is_extratime === '1' ){
                   endResult =  this.is_extratimeFn( allResult[i] , bgMaskStr,penaltyStr );
                }else{
                    if( allResult[i].score ){

                        if( this[bgMaskStr].parent ){
                            this.bgCourtWrap.removeChild( this[bgMaskStr] );
                        }
                        if( this[penaltyStr].parent ){
                            this.bgCourtWrap.removeChild( this[penaltyStr] );
                        }

                        if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                            this.fieldContain.showWinLocation( allResult[i].matchid , '_l' ) ;
                        }else{
                            this.fieldContain.showWinLocation( allResult[i].matchid , '_r' ) ;
                        }
                        // 取 出
                        if( len === 1 ){
                            endResult = allResult[i] ;
                        }else{
                            endResult = null ;
                        }
                    }
                }
            }
        }

        // console.log('-----------');
        // console.log( endResult )
        // console.log( $store['matches'].length )
        // console.log('显示冠军')
        // 显示冠军 
        if( endResult && $store['matches'] && $store['matches'].length === 1 ){
            let championName = null;
            await this.wait(300);
            if( $store['matFindField'][ endResult.matchid ] ){
                championName = this.fieldContain[ $store['matFindField'][ endResult.matchid ] ].getFieldImg();
                if( parseInt ( endResult.score[0] ) > parseInt ( endResult.score[2] ) ){
                     this.showChampion( championName['l_name'] )
                }else{
                    this.showChampion( championName['r_name'] )
                }
            }
        }

    }

    /**
     *  直接显示  win 的 结果
     *  allResult
     */
    private showFieldWin( allResult ){
        let len = allResult.length ,
            $store = window['store'] ;

        for( let i = 0;i < len; i++ ){
            if( allResult[i].is_spotkick === '0' ){
                if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_l' , allResult[i].score  ) ;
                }else{
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_r' , allResult[i].score ) ;
                }
            }else{
let newScore = (parseInt( allResult[i].score[0] ) + parseInt( allResult[i].spotkick[0] )) +':'+ ( parseInt ( allResult[i].score[2] ) +  parseInt( allResult[i].spotkick[2] )) ;
                if( parseInt( allResult[i].spotkick[0] ) > parseInt( allResult[i].spotkick[2] ) ){
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_l' ,newScore ) ;
                }else{
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_r', newScore ) ;
                }
            }
        }

        // 显示冠军 (快捷)
        if( allResult && allResult.length === 1 ){
            let championName = null;
            if( $store['matFindField'][ allResult[0].matchid ] ){
                championName = this.fieldContain[ $store['matFindField'][ allResult[0].matchid ] ].getFieldImg();

                setTimeout(()=>{
                    if( allResult[0].is_spotkick === '0' ){
                        if( parseInt ( allResult[0].score[0] ) > parseInt ( allResult[0].score[2] ) ){
                            this.showChampion( championName['l_name'] )
                        }else{
                            this.showChampion( championName['r_name'] )
                        }
                    }else{
                        if( parseInt ( allResult[0].spotkick[0] ) > parseInt ( allResult[0].spotkick[2] ) ){
                            this.showChampion( championName['l_name'] )
                        }else{
                            this.showChampion( championName['r_name'] )
                        }
                    }
                }, 1800 )

            }
        }

    }
    /**
     *  隐藏进球 出现win
     */
    async is_extratimeFn(allResult , bgMaskStr ,penaltyStr ){
        await this.wait( 7000 );
        if( allResult.score ){
            if( this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr] );
            }

            if( parseInt ( allResult.score[0] ) > parseInt ( allResult.score[2] ) ){
                this.fieldContain.showWinLocation( allResult.matchid , '_l' ) ;
            }else{
                this.fieldContain.showWinLocation( allResult.matchid , '_r' ) ;
            }
            // 取 出
            if( window['store']['matches'].length === 1 ){
                return allResult ;
            }else{
                return null ;
            }
        }
    }

    /**
     *  清楚中奖 main ==》 cnt ==> fieldcontain
     */
    private cnt_removeAllWinIcon(){
        // remove  champion 
        this.delChampion() ;
        // remove field 
        this.fieldContain.removeAllWinIcon()
    }

    /**
     *  根据 matchid  找 对应的img
     *  @param matchid
     */
    private cnt_getFieldImg( matchid:string ){
        let $store = window['store'] ,
            currFieldStr = '';
        if( matchid ){
            currFieldStr = $store['matFindField'][ matchid ] ;
            if( currFieldStr ){
                return this.fieldContain[currFieldStr].getFieldImg() ;
            }else{
                console.warn('获取头像error')
            }
        }
        return {}
    }

    /**
     *  根据 matchid  找 对应的点球
     *  @param matchid
     */
    private  findPenaltyStr( matchid:string ){
        let $store = window['store'] ,
            currFieldStr = '';
        if( matchid ){
            //  matchid  找 位置
            if( $store['matFindField'][ matchid ] ){
                currFieldStr = $store['matFindField'][ matchid ] ;
                switch (currFieldStr){
                    case 'field1':
                    case 'field21':
                    case 'field41':
                        return '0' ;
                    ;
                    case 'field22':
                    case 'field42':
                        return '1' ;
                    ;
                    case 'field43':
                        return '2' ;
                    ;
                    case 'field44':
                        return '3' ;
                    ;
                }
            }else{
                console.error('not find matchid at field_ball_contain' );
            }
        }
    }

    /**
     *  清除 所有的点球 
     *  main ==》 cnt
     */
    private cleanAllPenalty(){

        let penaltyStr = 'penalty' ,
            bgMaskStr = 'bgMask' ,
            penaltyStr_p = 'penalty_point' ,
            bgMaskStr_p = 'bgMask_point' ;  

        for( let i = 0;i<4;i++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            if( this[penaltyStr] ){
                if( this[penaltyStr].parent ){
                    this.bgCourtWrap.removeChild( this[penaltyStr] );
                }
                this[penaltyStr].initLine();
                
            }

            if( this[bgMaskStr] && this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr_p] && this[penaltyStr_p].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr_p] );
            }
            if( this[bgMaskStr_p] && this[bgMaskStr_p].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr_p] );
            }
        }

    }

    /**
     *  是否出现点球 (对应场地)
     * @param curr_local 运动的坐标
     *  @param penaltyArr 点球坐标
     *  @param footIndex 点球的坐标 （通过比赛id 找到的）
     *  @param mathcid 为了 显示最终的win
     */
    async showPenalty( penaltyArr  , curr_local , footIndex ,matchid:string ,score:string ){
        let penaltyStr = 'penalty' ,
            bgMaskStr = 'bgMask' ,
            penaltyStr_p = 'penalty_point' ,
            bgMaskStr_p = 'bgMask_point' ;  

        penaltyStr = 'penalty'+footIndex ;
        bgMaskStr = 'bgMask'+footIndex ;
        penaltyStr_p = 'penalty_point'+footIndex;
        bgMaskStr_p = 'bgMask_point'+footIndex  ;  

        // 更新点球的 图片  
        if( this[penaltyStr_p] ){
            this[penaltyStr_p].upPenaltyballImg(  this.cnt_getFieldImg( matchid ) )
        }
        await this.wait( 6500 ) ;
        //  进球 切 点球
        egret.Tween.get( this[penaltyStr] ).to( {y:curr_local[footIndex] -158 }, 200 )
        
        // egret.Tween.get( this[penaltyStr] ).to( {y:curr_local[footIndex] -158 }, 200 ).call(()=>{
        //     if( this[bgMaskStr].parent ){
        //         this.bgCourtWrap.removeChild( this[bgMaskStr] );
        //     }
        //     if( this[penaltyStr].parent ){
        //         this.bgCourtWrap.removeChild( this[penaltyStr] );
        //     }

        // });
        // egret.Tween.get( this[ penaltyStr_p ]  ).to( {y: curr_local[footIndex] }, 200 ).call(()=>{
        //     // 对应点球动画
        //     setTimeout(()=>{
        //         this[ penaltyStr_p ].movePenalty( penaltyArr , matchid ,score ,footIndex )
        //     },500)
        // });
        egret.Tween.get( this[ penaltyStr_p ]  ).to( {y: curr_local[footIndex] }, 200 )       

        setTimeout(()=>{
            if( this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr] );
            }
            this[ penaltyStr_p ].movePenalty( penaltyArr , matchid ,score ,footIndex )
        },700)

    }

    // timer 定时器
    // main => cnt => Timer
    private cnt_timer( setTime:string ){
        this.timer['createTimer']( setTime );
    }

    private cnt_timerRemove(){
        this.timer['timerRemove']( );
    }

    // 修改顶部文案
    // main => cnt => textTips
    private cnt_upTextTips( tips:string ){
        this.textT['upTextTips']( tips )
    }

    private bgMask(){
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penaltyWrap-mask_png'));
        return bgMask;
    }

    // 金币发出 ( 分发 )   
    //  settle-list 处理函数 更新用户的金币（延迟一下吧）
    //  通过matchid 找到 开始位置 通过uid 找到头像位置
    // 
    async settle_listFn( settleData:any ){
        let choseUser = null ,
            $store = window['store'] ,
            baseImg = 'userImg' ,
            curFindField = '' ,
            allShowWinNum = 0 ,
            userImgArr = [] ;
        if( settleData ){
            for( let i=0,len = settleData.length ;i<len ; i++ ){
                choseUser = baseImg + $store['userPositionLocal'][ settleData[i].uid ] ;
                if( settleData[i].prize_info &&  settleData[i].prize_info.length > 0 ){
                    allShowWinNum = 0 ;
                    // 派金币
                    for( let j = 0;j < settleData[i].prize_info.length ; j++ ){
                        if( settleData[i].prize_info[j] && settleData[i].prize_info[j].matchid ){
                            curFindField = $store['fieldLeftOrRight'][settleData[i].prize_info[j].matchid];
                            allShowWinNum =  allShowWinNum + parseInt( settleData[i].prize_info[j].prize );
                            if( curFindField ){
                                await this.fieldContain.sendEndCoin( curFindField , settleData[i].uid ) ;
                            }
                        }
                    }
                    if( this[ choseUser ] && allShowWinNum ){
                        this[ choseUser ].isShowWinGold( allShowWinNum );
                        userImgArr.push( this[ choseUser ] )
                    }
                }
                //  更新每个用户的信息 可能要再动画之后  离开的用户 为null 
                if( settleData[i].uid && settleData[i].total && this[ choseUser ] ){
                    this[ choseUser ]['setMyGold']( settleData[i].total )
                }
            }

            // 清除对应的奖
            setTimeout(()=>{
                for( let i = 0; i< userImgArr.length;i++ ){
                    userImgArr[i].isHideWinGold() 
                }
            }, 3000 )

        }

    }

    // 他人金币 发出
    private cnt_Other_Coin( matchid:string , selection:string , uid:string , bet_golds:string , total_coin:string ){
        // 处理 他人金币的金币减少 .
        let $store = window['store'] ,
            choseOther = $store['userPositionLocal'][uid] ,
            selOtherCoin = $store['userPosition'][$store['userPositionLocal'][uid] - 1] -1 ,
            baseImgStr = 'userImg' + choseOther ; 
        if( this[ baseImgStr] ){
            if( total_coin ){
                this[ baseImgStr ]['setMyGold']( total_coin );
            }
            this.fieldContain.other_Coin( matchid , selection , selOtherCoin , bet_golds );
        }

    }


    // 金币收起  main ==> cnt ==> fieldcontain
    // app 上是延迟 收集
    private cnt_collectCoin(){
        setTimeout(()=>{
            this.fieldContain.collectCoin();
        },1500)
    }

    // 调研初始化场地
    private initFieldCon(){
        this.fieldContain.initFieldMsg();
    }

    //  容器 new
    private initUserImg(){
        let $store = window['store'] ;
        for( let i=0;i<9;i++ ){
            var choseUserImg = 'userImg'+(i+1)
            this[choseUserImg] = new userImage();
            this[choseUserImg].scaleX = this.scale2;
            this[choseUserImg].scaleY = this.scale2;
            if( i === 0 ){
                this[choseUserImg].anchorOffsetX = 44;
                this[choseUserImg].anchorOffsetY = 124 ;
                this[choseUserImg].x = $store['stage_anWidth'] ;
                this[choseUserImg].y = 1035;
                $store['userMySelf'] = this[choseUserImg];
            }else if( ( $store['userPosition'][i] - 1 ) < 5 ){
                this[choseUserImg].x = $store['userPositionObj'][$store['userPosition'][i] - 1].x;
                this[choseUserImg].y = $store['userPositionObj'][$store['userPosition'][i] - 1].y;
            }else{
                this[choseUserImg].x = $store['stage_Width'] - $store['userPositionObj'][$store['userPosition'][i] - 1].x;
                this[choseUserImg].y = $store['userPositionObj'][$store['userPosition'][i] - 1].y;
            }
        }
    }

    //  初始的用户信息  new
    public initUserMsg(){
        // 调整原数组
        let $store = window['store'] ,
            len = $store['user_info'].length ,
            newUserInfo = [] ,
            firstUser = null ,
            bigIndex = 0 ,
            i ;

        if( this.fieldContain && this.bgCourtWrap  ){
            bigIndex = this.bgCourtWrap.getChildIndex( this.fieldContain ) ;
        }

        if( !len || len === undefined){
            len = 0
        }

        for( i =0 ;i< len ;i++ ){
            if(  $store['user_info'][i].uid === $store['env_variable']['uid'] ){
                firstUser = $store['user_info'][i];
            }else{
                newUserInfo.push( $store['user_info'][i] )
            }
        }
        if( firstUser !== null ){
            newUserInfo.unshift( firstUser )
        }
        $store['user_info'] = newUserInfo ;

        $store['emptyUserPosition'] = [];
        for( i=0;i<9 ; i++ ){
            if( i >=len ){
                $store['emptyUserPosition'].push( i+1 )
            }
        }
        let newIndex = 0 ,
            newObj = null ;
        for( i=0; i<len ;i++){
            if( $store['user_info'][i] && $store['user_info'][i].photo === '' ){
                $store['user_info'][i].photo = 'http://img.choopaoo.com/esun/upload/be/83/be837ad8049611e797ef.png'
            }
            if( $store['user_info'][i].uid ){
                $store['userPositionLocal'][$store['user_info'][i].uid] = ( i + 1 ) 
            }

            var choseUserImg = 'userImg'+(i+1) ;

            if( this[choseUserImg] ){
                this[choseUserImg].upDataUseMsg( window['formateName'] ( $store['user_info'][i].username ) , $store['user_info'][i].photo ,
                    $store['user_info'][i].total );
            }

            this.bgCourtWrap.addChild(this[choseUserImg]);

            if( this.bgCourtWrap.getChildIndex( this[choseUserImg] ) > newIndex ){
                newIndex = this.bgCourtWrap.getChildIndex( this[choseUserImg] ) ;
                newObj = this[choseUserImg] ;
                this.bgCourtWrap.swapChildren( this.fieldContain ,  this[choseUserImg] ) ;
            }

        }
        this.bgCourtWrap.swapChildren( this.fieldContain , newObj ) ;

    }

    // 用户 进入  new
    private addUserImage( username:string , photo:string , total:string , uid:string ){
        let $store = window['store'] ,
            userI = $store['emptyUserPosition'].shift() ,
            choseUserImg = 'userImg' + ( userI ) ;
            
        if( !userI ){
            console.error('无空闲房间')
            return false;
        }
        $store['userPositionLocal'][uid] = userI
        // console.log( choseUserImg )
        if( photo === '' ){
            photo = 'http://img.choopaoo.com/esun/upload/be/83/be837ad8049611e797ef.png'
        }

        if( this[choseUserImg] ){
            this[choseUserImg].upDataUseMsg( window['formateName'] (username) ,photo  ,
            total );
        }

        this.bgCourtWrap.addChild(this[choseUserImg]);
        setTimeout(()=>{
            if( !$store['unableClick'] && !!this.fieldContain && !!this[choseUserImg] && this.fieldContain.parent && this[choseUserImg].parent ){
                let item = null ,
                    choseUserImg = 'userImg' ,
                    bigIndex = 0 ,
                    bigUserImg = null ;
                for( item  in $store.userPositionLocal ){
                    if( $store.userPositionLocal[item] ){
                        if( this.bgCourtWrap.getChildIndex( this[ choseUserImg +  $store.userPositionLocal[item] ] ) > bigIndex ){
                            bigIndex = this.bgCourtWrap.getChildIndex( this[ choseUserImg +  $store.userPositionLocal[item] ] ) ;
                            bigUserImg = this[ choseUserImg +  $store.userPositionLocal[item] ] ;
                        }
                    }
                }
                if( !!bigIndex ){
                    if( !!this.fieldContain && this.fieldContain.parent ){
                        this.bgCourtWrap.swapChildren( this.fieldContain , bigUserImg  ) ;
                        this.bgCourtWrap.setChildIndex( this.fieldContain , bigIndex + 1 ) ;
                    }
                }
            }

        },10)

    }
    // 用户 离开  new
    private removeUserImage( uid:string ){
        let delIndex = 0 ,
            $store = window['store'] ;
        if( $store['userPositionLocal'][uid] ){
            delIndex = $store['userPositionLocal'][uid] ;
        }

        if( delIndex === 0 ){
            console.error( 'not find uid');
            return false;
        }

        if( delIndex ){
            let choseUserImg = 'userImg'+ ( delIndex ) ;
            // 更新数组
            if( $store['userPositionLocal'][uid] ){
                $store['userPositionLocal'][uid] = null ;
            }

            $store['emptyUserPosition'].push( delIndex );

            if( this.bgCourtWrap && this[choseUserImg] && this[choseUserImg].parent ){
                this.bgCourtWrap.removeChild(this[choseUserImg]);
            }
        }
    }


    // 处理聊天相关（ html ）
    private showChat( uid:string ,msg:string ){
        let $store = window['store'] ,
            findLocal = null ,
            currDom = null ;

        if( uid ){
            findLocal = $store['userPosition'][ $store['userPositionLocal'][ uid ] - 1 ];
            currDom = document.querySelector('.local0'+ findLocal) ;
            currDom.style.display = 'block' ;
            currDom['innerHTML'] = msg ;
            setTimeout(()=>{
                currDom['innerHTML'] = '' ;
                currDom.style.display = 'none' ;
            },1500)
        }
    }

}