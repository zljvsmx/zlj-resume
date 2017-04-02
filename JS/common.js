
$(function(){
	$("#js_fullpage").fullpage({
		slidesColor:['#212325', '#fff', '#212325', '#ebfbff'],
		anchors:['page1', 'page2', 'page3', 'page4'],
		menu:'#menu',
		afterLoad:function(anchorLink,index){
			if(index==2){
				$("#js_fullpage").children().eq(1).addClass("focus");
				Canvas_Wedge();
			}
			if(index==3){
				$(".wrap_cantainer").animate({
					top:"0px"
				});
				$(".wrap_dot").animate({
					top:"0px",
					opacity:1
				});
				$("#blog,#github").animate({
					bottom:"0px"
				})
				$(".wrap_dot span").hover(function(){
					var index=$(this).index();
					$(this).addClass("active_dot").siblings().removeClass("active_dot");
					$(".wrap_cantainer").stop().animate({
						"left":-index*1000
					},1000);
				});
				var timer=null;
				var num=0;
				var Len=$(".wrap_dot span").length;
				//自动轮播函数
				function clock(){
					timer=setInterval(function(){
						if(num<Len-1){
							num++;
						}else{
							num=0;
						}
						changeTo(num);
					},3000)
				}
				clock()
				
				//鼠标经过暂停自动轮播函数
				$(".wrap_cantainer,.wrap_dot").hover(function(){
					clearInterval(timer)
				},function(){
					clock()
				})
				
				//轮播函数
				function changeTo(num){
					$(".wrap_cantainer").stop().animate({
						left:"-"+num*1000+"px"
					})
					$(".wrap_dot span").eq(num).addClass("active_dot").siblings().removeClass("active_dot");
				};

				$("#js_fullpage").children().eq(2).addClass("focus");

			}
			if(index==4){
				$("#js_fullpage").children().eq(3).addClass("focus");
				
			}
		},
		onLeave:function(anchorLink ,index){ // 滚动前
				$('#js_fullpage').children().removeClass("focus");
				$(".wrap_cantainer").animate({
					top:"1000px"
				},600);
				$(".wrap_dot").animate({
					top:"1000px",
					opacity:0
				},600);
				$("#blog,#github").animate({
					bottom:"-1000px"
				},600);
			}
//		afterRender:function(){
//			$(".anli").addClass("active");
//		}
	})
	var navLi=$(".ul_nav li");
	navLi.on("click",function(){
		for (var i=0;i<navLi.length;i++) {
			$(this).addClass("active").siblings().removeClass("active");
			
		}
	})
	
//	var head=$(".head");
//	head.animate({
//		top:"0px"
//	},600)
	
	var arP=$(".arP");
	var wrapTime=$(".wrap_time");
	arP.animate({
		top:"0px",
		opacity:1
	},600,"swing")
	
	var $click=$(".click");
	var $wrapTime=$(".wrap_time");
	
		
		
		wrapTime.animate({
			opacity:"1"
		},600,function(){
			wrapTime.css({
				display:"block"
			})
		})
	
	//环形进度条展开动画
	function Canvas_Wedge(){
		var canvas_PW=$(".canvas_parent").width();
		var canvas_PH=$(".canvas_parent").height();
		var stage=new Konva.Stage({
			container:"canvas",
			width:canvas_PW,
			height:canvas_PH
		})
		var layer=new Konva.Layer();
		stage.add(layer);
		
		//#f0f4f7
		//画第一个h环形——PS
		var x1=stage.width()/4-125;
		var y1=stage.height()/2;
		
		var PSBS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:85,
			fill:"#7FCDE3"
		})
		layer.add(PSBS_circle);
		
		var PS_wedge1=new Konva.Wedge({
			x:x1,
			y:y1,
			angle:0,
			fill:"#29BBE3",
			radius:85,
			rotation:-90
		});
		layer.add(PS_wedge1);
		
		var PS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:50,
			fill:"#1597BB"
		});
		layer.add(PS_circle);
		
		var PS_text=new Konva.Text({
			x:x1-50,
			y:y1-18,
			align:"center",
			width:100,
			fontSize:35,
			fontFamily:"Helvetica",
			text:"50%",
			fill:"#94E8FF"
		})
		layer.add(PS_text);
	
		//画第二个环形——HTML
		var x1=250+(stage.width()/4-125);
		var y1=stage.height()/2;
		
		var PSBS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:85,
			fill:"#FFD966"
		})
		layer.add(PSBS_circle);
		
		var PS_wedge2=new Konva.Wedge({
			x:x1,
			y:y1,
			angle:0,
			fill:"#FFC000",
			radius:85,
			rotation:-90
		});
		layer.add(PS_wedge2);
		
		var PS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:50,
			fill:"#E6AC00"
		});
		layer.add(PS_circle);
	
		var PS_text=new Konva.Text({
			x:x1-50,
			y:y1-18,
			align:"center",
			width:100,
			fontSize:35,
			fontFamily:"Helvetica",
			text:"80%",
			fill:"#94E8FF"
		})
		layer.add(PS_text);
		
		//画第三个环形——CSS3
		var x1=500+(stage.width()/4-125);
		var y1=stage.height()/2;
		
		var PSBS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:85,
			fill:"#E88C82"
		})
		layer.add(PSBS_circle);
		
		var PS_wedge3=new Konva.Wedge({
			x:x1,
			y:y1,
			angle:0,
			fill:"#E74C3C",
			radius:85,
			rotation:-90
		});
		layer.add(PS_wedge3);
		
		var PS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:50,
			fill:"#B53C2F"
		});
		layer.add(PS_circle);
		
		var PS_text=new Konva.Text({
			x:x1-50,
			y:y1-18,
			align:"center",
			width:100,
			fontSize:35,
			fontFamily:"Helvetica",
			text:"90%",
			fill:"#94E8FF"
		})
		layer.add(PS_text);
		
		//画第四个环形——JQ
		var x1=750+(stage.width()/4-125);
		var y1=stage.height()/2;
		
		var PSBS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:85,
			fill:"#43DEC1"
		})
		layer.add(PSBS_circle);
		
		var PS_wedge4=new Konva.Wedge({
			x:x1,
			y:y1,
			angle:0,
			fill:"#0BC5A2",
			radius:85,
			rotation:-90
		});
		layer.add(PS_wedge4);
		
		var PS_circle=new Konva.Circle({
			x:x1,
			y:y1,
			radius:50,
			fill:"#0AAB8D"
		});
		layer.add(PS_circle);
		
		var PS_text=new Konva.Text({
			x:x1-50,
			y:y1-18,
			align:"center",
			width:100,
			fontSize:35,
			fontFamily:"Helvetica",
			text:"75%",
			fill:"#94E8FF"
		})
		layer.add(PS_text);
		
		layer.draw();
		
		PS_wedge1.to({
			angle:180,
			duration:2,
			easing:Konva.Easings.EaseOut
		});
		
		PS_wedge2.to({
			angle:288,
			duration:2,
			easing:Konva.Easings.EaseOut
		});
		
		PS_wedge3.to({
			angle:324,
			duration:2,
			easing:Konva.Easings.EaseOut
		});
		
		PS_wedge4.to({
			angle:270,
			duration:2,
			easing:Konva.Easings.EaseOut
		});
	}
	
	//案例部分轮播图
	//轮播基础部分
	(function(){
		//点击购物车案例打开页面跳转至购物车效果
		var shoppingCart=$("#shopping-cart");
		shoppingCart.on("click",function(){
			window.open("https://zljvsmx.github.io/shopping-cart/")
		})
		//点击博客/github进入相关页面
		$("#blog").on("click",function(){
			window.open("https://blog.csdn.net/zljvsmx")
		})
		$("#github").on("click",function(){
			window.open("https://github.com/zljvsmx")
		})
	})()
		
		
		
		
})