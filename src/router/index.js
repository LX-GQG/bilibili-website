import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Main from '../view/Main.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Video from '../view/Video.vue'
import Tab from '../view/Tab.vue'
import Channel from '../view/Channel.vue'
import Collect from '../view/Collect.vue'
import Phonelogin from '../view/Phonelogin.vue'


var router = new VueRouter({
	routes: [
	{ path: '/', component: Main, name: 'main', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },
	{ path: '/main', component: Main, name: 'main', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },
	{ path: '/login', component: Login, name: 'login', meta:{title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'} },
	{ path: '/register', component: Register, name: 'register', meta:{title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'} },
	{ path: '/Video', component: Video, name: 'Video', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },
	{ path: '/tab', component: Tab, name: 'tab', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },
	{ path: '/channel', component: Channel, name: 'channel', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },
	{ path: '/collect', component: Collect, name: 'collect', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'} },	
	{ path: '/phonelogin', component: Phonelogin, name: 'phonelogin', meta:{title:'茂职院计算机工程系的个人空间_哔哩哔哩_Bilibili'}},
	],
	base:process.env.BASE_URL,
})


router.beforeEach((to,from,next)=> {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		window.location.href = 'http://127.0.0.1:8848/bilibili/static/Phonemain.html'
	}
	next()
	if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})

export default router