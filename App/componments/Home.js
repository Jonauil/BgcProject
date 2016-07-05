/*
 *Home page
 * 
 */
import React, {Component} from 'react';

import {
	Text,
	Image,
	View,
	StyleSheet,
	ScrollView,
} from 'react-native';


export default class Home extends Component {
	render() {
		const title_data = HOME_DATA[0];
		return (
			<View style={styles.container}>
			<View style={styles.header}>
			<Text style={styles.title}>{title_data.title}</Text>
			</View>

         <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false}>

		<View style = {styles.fabushishibiao} >
			<Image style={styles.icon_title_img} source={require('../img/icon_tit_shishibiao@3x.png')} />
			<Text style = {styles.tit_text} > 发布实时标 </Text>
			<Image style={styles.icon_title_jt} source={require('../img/icon_tit_youjt@3x.png')} />
		</View >

		< View style = {styles.box} >
			<View style={styles.box_Item}>
        	<Image style={styles.box_Img} source={require('../img/icon_gdfeikaiwa@3x.png')} />
			<Text style={styles.box_Text}>管道非开挖</Text>
        	</View> 
        	<View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_gdkaiwa@3x.png')}/> 
			<Text style = {styles.box_Text} > 管道开挖 </Text>
			</View >
			<View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_tiaoqiankt@3x.png')} /> 
			<Text style = {styles.box_Tex} > 跳纤开通 </Text>
			</View >
			<View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_jzbanqian@3x.png')} /> 
			< Text style = {styles.box_Text} > 基站搬迁 </Text>
			</View >
		</View>

		< View style = {styles.box} >

			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_glfushe@3x.png')} /> 
			<Text style={styles.box_Text}> 光缆敷设 </Text>
        	</View> 
        	<View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_glrongjie@3x.png')}/> 
			<Text style = {styles.box_Text} > 光缆熔接 </Text>
			</View >

			< View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_wlan@3x.png')} />
			 <Text style = {styles.box_Text} > WLAN </Text >
			 </View >

			 <View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_more@3x.png')} /> 
			< Text style = {styles.box_Text} > 更多 </Text>
			</View >
		</View >
		
		<View style={styles.fabuyuyuebiao}>
			<Image style={styles.icon_title_img} source={require('../img/icon_tit_yuyuebiao@3x.png')} />
			<Text style={styles.tit_text}>发布预约标</Text>
			<Image style={styles.icon_title_jt} source={require('../img/icon_tit_youjt@3x.png')} />
		</View>

		<View style={styles.box}>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_shineifb@3x.png')} />
			<Text style={styles.box_Text} >室内分布</Text>
			</View>
			<View style = {styles.box_Item} >
			<Image style={styles.box_Img} source={require('../img/icon_xiaoqukd@3x.png')} />
			<Text style={styles.box_Text}>小区宽带</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_louyukd@3x.png')} />
			<Text style={styles.box_Text}>楼宇宽带</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_hongzhan@3x.png')} />
			<Text style={styles.box_Text}>宏站</Text>
			</View>
		</View>

		<View style={styles.box}>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_zhbuxian@3x.png')} />
			<Text style={styles.box_Text} >综合布线</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_ganzhan@3x.png')} />
			<Text style={styles.box_Text}>杆站</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_liangaihuan@3x.png')} />
			<Text style={styles.box_Text}>链改环</Text>
			</View>
			<View style = {styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_more@3x.png')} />
			<Text style = {styles.box_Text}>更多</Text>
			</View >
		</View>

		<View style={styles.fabuyuyuebiao} >
			<Image style={styles.icon_title_img} source={require('../img/icon_tit_fuwubiao@3x.png')} />
			<Text style={styles.tit_text} >发布服务标</Text>
			<Image style={styles.icon_title_jt} source={require('../img/icon_tit_youjt@3x.png')} />
		</View>
		
		<View style={styles.box} >

			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_xietiao@3x.png')} />
			<Text style={styles.box_Text}>协调</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_banzheng@3x.png')} />
			<Text style={styles.box_Text}>办证</Text>
			</View>
			<View style={styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_xunzu@3x.png')} />
			<Text style={styles.box_Text}>寻租</Text>
			</View>
			<View style = {styles.box_Item}>
			<Image style={styles.box_Img} source={require('../img/icon_more@3x.png')} />
			<Text style = {styles.box_Text}>更多</Text>
			</View >
		</View>

		<View style={styles.fabuyuyuebiao}>
			<Image style={styles.icon_title_img} source={require('../img/icon_tit_biaodi@3x.png')} />
			<Text style={styles.tit_text} >标的</Text>
			<Image style={styles.icon_title_jt2} source={require('../img/icon_tit_youjt@2x.png')} />
		</View>

		<View style={styles.box} >
			<View style={styles.box_Item2}>
			<Image style={styles.box_Img} source={require('../img/icon_jingbiaozhong@3x.png')} />
			<Text style={styles.box_Text}>可投标</Text>
			</View>
			<View style={styles.box_Item2}>
			<Image style={styles.box_Img} source={require('../img/icon_yijiebiao@3x.png')} />
			<Text style={styles.box_Text}>已投标</Text>
			</View>
			<View style={styles.box_Item2}>
			<Image style={styles.box_Img} source={require('../img/icon_yizhongbiao@3x.png')} />
			<Text style={styles.box_Text}>已中标</Text>
			</View>
		</View>

		<View style={styles.fabuyuyuebiao}>
			<Image style={styles.icon_title_img} source={require('../img/icon_tit_xiangmu@3x.png')} />
			<Text style={styles.box_Text} >项目</Text>
			<Image style={styles.icon_title_jt2} source={require('../img/icon_tit_youjt@2x.png')} />
		</View>

			<View style={styles.box} >
				<View style={styles.box_Item2} >
				<Image style={styles.box_Img} source={require('../img/icon_jinxingzhong@3x.png')} />
					<Text style={styles.box_Text} >进行中</Text>
				</View>
				<View style={styles.box_Item2} >
					<Image style={styles.box_Img} source={require('../img/icon_shenhezhong@3x.png')} />
					<Text style={styles.box_Text} >审核中</Text>
				</View>
				<View style={styles.box_Item2} >
					<Image style={styles.box_Img} source={require('../img/icon_yiwancheng@2x.png')} />
					<Text style={styles.box_Text} >已完成</Text>
				</View>
			</View>


		</ScrollView>
				<View style={styles.box} >
					<View style={styles.box_Item2} >
						<Image style={styles.box_Img} source={require('../img/menu_icon/icon_menu_shouye@2x.png')} />
						<Text style={styles.menu_icon_text} >首页</Text>
					</View>
					<View style={styles.box_Item2} >
						<Image style={styles.box_Img} source={require('../img/menu_icon/icon_menu_biaodi@2x.png')} />
						<Text style={styles.menu_icon_text} >标的</Text>
					</View>
					<View style={styles.box_Item2} >
						<Image style={styles.box_Img} source={require('../img/menu_icon/icon_menu_xiangmu@2x.png')} />
						<Text style={styles.menu_icon_text} >项目</Text>
					</View>
					<View style={styles.box_Item2} >
						<Image style={styles.box_Img} source={require('../img/menu_icon/icon_menu_gengduo@2x.png')} />
						<Text style={styles.menu_icon_text} >我的</Text>
					</View>
				</View>
		</View>
		);
	}
}

const HOME_DATA = [{
	title: '首页'
}, ];

const styles = StyleSheet.create({
	contentContainer: {

	},
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		marginTop: 18,
		backgroundColor: '#e2241d',
	},
	title: {
		fontSize: 18,
		color: '#fff',
	},
	fabushishibiao: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 60,
		marginTop: 5,
		alignItems: 'center',
		borderColor: '#e7e7e7',
		borderBottomWidth: 1,
		borderTopWidth: 0.5,
	},
	fabuyuyuebiao: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 60,
		marginTop: 10,
		alignItems: 'center',
		borderColor: '#e7e7e7',
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},
	icon_title_img: {
		height: 30,
		width: 30,
		marginLeft: 10,
		marginRight: 10,
	},
	tit_text: {
		fontSize: 16,
		color: '#282a31',
		fontWeight: 'bold',
	},
	box: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	box_Item: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		borderColor: '#e7e7e7',
		borderRightWidth: 1,
		borderBottomWidth: 1,
	},box_Item2: {
				flex: 1,
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: 100,
				borderColor: '#e7e7e7',
				borderBottomWidth: 1,
			},
	box_Img: {
		width: 30,
		height: 30,
		marginBottom: 7,
	},
	box_Text: {
		fontSize: 12,
		color: '#5c6578',
	},menu_icon_text:{
		color:'#95a0aa',
		fontSize:10,
	},icon_title_jt:{
		width:20,
		height:20,
		marginLeft:240,
		marginRight: 10,
	},icon_title_jt2:{
		width:20,
		height:20,
		marginLeft:280,
		marginRight: 10,
	},
});