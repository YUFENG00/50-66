<template>
<div class="all" id="all">
    <navDiv></navDiv>
    <status></status>
    <div id="task-content" @click="changeStatus">
		<div class="line-wrapper" id="doingTask">
		  <div class="line-scroll-wrapper">
		    <div class="line-normal-wrapper">
		      <div class="line-btn-level"><button class="complete">已完成</button><button class="wait">待办</button><button class="doing">进行中</button></div>
		      <div class="line-normal-left-wrapper">
		        <div class="line-normal-avatar-wrapper"><img src="../assets/images/45_66_03.png" class="line-status-img"></div>
		        <div class="line-normal-info-wrapper">
		          <div class="line-normal-msg">some task some task some task some task some task some task</div>
		        </div>
		      </div>
		    </div>
		    <div class="line-btn-delete"><button class="compile">编辑</button><button class="del">删除</button></div>
		  </div>
		</div>


		<div class="line-wrapper">
		  <div class="line-scroll-wrapper">
		    <div class="line-normal-wrapper">
		      <div class="line-btn-level"><button class="complete">已完成</button><button class="wait">待办</button><button class="doing">进行中</button></div>
		      <div class="line-normal-left-wrapper">
		        <div class="line-normal-avatar-wrapper"><img src="../assets/images/45_66_06.png" class="line-status-img"></div>
		        <div class="line-normal-info-wrapper">
		          <div class="line-normal-msg">some task some task some task some task some task some task</div>
		        </div>
		      </div>
		    </div>
		    <div class="line-btn-delete"><button class="compile">编辑</button><button class="del">删除</button></div>
		  </div>
		</div>

		<div class="line-wrapper">
		  <div class="line-scroll-wrapper">
		    <div class="line-normal-wrapper">
		      <div class="line-btn-level"><button class="complete">已完成</button><button class="wait">待办</button><button class="doing">进行中</button></div>
		      <div class="line-normal-left-wrapper">
		        <div class="line-normal-avatar-wrapper"><img src="../assets/images/45_66_08.png" class="line-status-img"></div>
		        <div class="line-normal-info-wrapper">
		            <div class="line-normal-msg">some task some task some task some task some task some task</div>
		        </div>
		      </div>
		    </div>
		    <div class="line-btn-delete"><button class="compile">编辑</button><button class="del">删除</button></div>
		  </div>
		</div>
    </div>
</div>
</template>

<script>
    import navDiv from './navDiv'
    import status from './status'
    import $ from 'jquery'
    let lineSwipe;	
	
// 滑动事件 
$(document).ready(lineSwipe = function(e) {
    $(".line-wrapper").width($(window).width());
    // 设定每一行的宽度=屏幕宽度+按钮宽度
    $(".line-scroll-wrapper").width($(".line-wrapper").width() + $(".line-btn-delete").width());

    console.log($(".line-scroll-wrapper").width());
    // 设定常规信息区域宽度=屏幕宽度
    $(".line-normal-wrapper").width($(".line-wrapper").width());
    // 设定文字部分宽度（为了实现文字过长时在末尾显示...）
    $(".line-normal-msg").width($(".line-normal-wrapper").width()-100);

    // 获取所有行，对每一行设置监听
    let lines = $(".line-normal-wrapper");
    let len = lines.length; 
    let lastX, lastXForMobile;

    // 用于记录被按下的对象
    let pressedObj;  // 当前滑动的对象
    let lastLeftObj; // 上一个左滑的对象
    let lastRightObj; //上一个右滑的对象

    // 用于记录按下的点
    let start;

    // 网页在移动端运行时的监听
    for (let i = 0; i < len; ++i) {
        lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象 

            // 记录开始按下时的点
            let touches = event.touches[0];
            start = { 
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });

        lines[i].addEventListener('touchmove',function(e){
            // 计算划动过程中x和y的变化量
            let touches = event.touches[0];
            let delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };

            // 横向位移大于纵向位移，阻止纵向滚动
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
        });

        lines[i].addEventListener('touchend', function(e){
            if ((lastLeftObj && pressedObj != lastLeftObj) 
                || (lastRightObj && pressedObj != lastRightObj)) { // 点击除当前滑动对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
                $(lastRightObj).animate({marginLeft:"0"},500);
                lastRightObj = null; //清空上一个右滑对象
            }
            let diffX = e.changedTouches[0].pageX - lastXForMobile;
            let currMarginLeft = parseInt(window.getComputedStyle(pressedObj,null).marginLeft); //获取当前对象的计算样式
            console.log(pressedObj.style.marginLeft);
            console.log(currMarginLeft);
            console.log(diffX);
            if (diffX < -150 && currMarginLeft == 0) {
                $(pressedObj).animate({marginLeft:"-264px"}, 500); // 左滑
                $(lastRightObj).animate({marginLeft:"0"},500);// 已经右滑状态的对象左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 500); // 已经左滑状态的对象右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } 
            else if (diffX < -150 && currMarginLeft == 396) {
                if (pressedObj == lastRightObj) {
                    $(pressedObj).animate({marginLeft:"0"},500);
                    lastRightObj = null;
                }
            }
            else if (diffX > 150 && currMarginLeft == 264) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
            else if (diffX > 150 && currMarginLeft == 0) {
                $(pressedObj).animate({marginLeft:"396px"},500); // 右滑
                $(lastLeftObj).animate({marginLeft:"0"},500); // 已经左滑状态的对象右滑
                lastRightObj && lastRightObj != pressedObj && 
                    $(lastRightObj).animate({marginLeft:"0"},500); // 已经右滑状态的对象左滑
                lastRightObj = pressedObj; // 清空上一个右滑的对象
            }
        });
    }
});


export default {
		name: 'all',
		lineSwipe,
		data () {
			return {

			}
		},
		components: {
			navDiv,
			status
		},
		methods: {
			getNode: function() {
				let taskContent1 = $(".line-wrapper")[0];
				return taskContent1;
			},
			getParentNode: function() {
				let taskContent = $("#all");
				return taskContent;
			},
			// 编辑 删除
            changeStatus: function(e) {
				console.log(e.target);
				let parent = e.target.parentNode.parentNode;

				if (e.target.className == "compile") {
					let taskNode = parent.getElementsByClassName("line-normal-msg");
					
				}
				// 设置任务的状态
				else if (e.target.className == "del") {
					e.target.parentNode.parentNode.parentNode.remove();
				}
				else if (e.target.className == "complete") {
			        let imgNode = parent.getElementsByClassName("line-status-img");
			        imgNode[0].setAttribute("src", "../assets/images/45_66_06.png");
				}
				else if (e.target.className == "wait") {
			        let imgNode = parent.getElementsByClassName("line-status-img");
			        imgNode[0].setAttribute("src", "../assets/images/45_66_08.png");
				}
				else if (e.target.className == "doing") {
			        let imgNode = parent.getElementsByClassName("line-status-img");
			        imgNode[0].setAttribute("src", "..assets/images/45_66_03.png");
				}
			}
		}
	};
 
</script>

<style scoped>
.line-wrapper {
position: relative;
height: 144px; 
margin-top: 20px;
overflow: hidden; 
font-size: 28px; 
border-bottom: 1px solid #aaa; 
}
.line-scroll-wrapper { 
	white-space: nowrap; 
	height: 144px; 
	clear: both; 
}
.line-btn-delete { 
	float: left; 
	width: 264px; 
	height: 144px; 
}
.line-btn-delete button { 
	width: 50%; 
	height: 100%; 
	background: red; 
	border: none; 
	font-size: 24px; 
	font-family: 'Microsoft Yahei'; 
	color: #fff;
}
.line-btn-level {
	float: left;
	width: 396px;
	height: 144px;
	margin-left: -396px;
}
.line-btn-level button {
	width: 33%;
	height: 100%;
	background: red;
	border: none;
	font-size: 24px;
	font-family: "Microsoft Yahei";
	color: #fff;
}
.line-normal-wrapper { 
	display: inline-block; 
	line-height: 100px; 
	float: left; 
	padding-top: 10px; 
	padding-bottom: 10px; 
}
.line-normal-avatar-wrapper { 
	width: 100px; 
	height: 124px; 
	float: left; 
	margin-left: 12px; 
}
.line-normal-avatar-wrapper img { 
	width: 92px; 
	height: 92px; 
	// border-radius: 60px; 
}
.line-normal-left-wrapper { 
	float: left; 
	overflow: hidden; 
}
.line-normal-info-wrapper { 
	float: left; 
	margin-left: 10px; 
}
.line-normal-msg { 
	position: absolute;
	width: 400px;
	height: 144px;
	color: #000; 
	font-size: 50px;
	line-height: 28px; 
	overflow:hidden; 
	text-overflow:ellipsis;
	margin-top: 11px;
}
</style>