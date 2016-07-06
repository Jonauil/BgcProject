import React,{Component} from 'React';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

export default class TextInput_Demo extends Component{
    render(){
        return(
        <View style={styles.container} >
            <Image style={styles.qq_image} source={require('../img/Thumbnails/qq.jpg')} />
            <TextInput
                style={styles.user_input}
                placeholder='QQ号/手机号/邮箱'
                ref="userinput"
                textAlign='center'
                />
             <View style={{height:1,backgroundColor:'#F4F4F4'}} ></View>
            <TextInput
                style={styles.pwd_input}
                placeholder='密码'
                ref='pwdinput'
                textAlign='center'
                secureTextEntry={true}
                />
            <View style={styles.style_view_commit} >
                <Text style={{color:'#fff'}} >登录</Text>
            </View>

            <View style={styles.unlogin_text} >
                <Text style={styles.view_unlogin} >无法登录?</Text>
                <Text style={styles.view_register} >新用户</Text>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    qq_image:{
        width:70,
        height:70,
        marginTop:40,
        alignSelf:'center',
        borderRadius:35
    },user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:35
    },pwd_input:{
        backgroundColor:'#fff',
        height:35
    },style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },unlogin_text:{
        flexDirection:'row',
        flex:1,
        alignItems:'flex-end',
        bottom:10
    },
    view_unlogin:{
            fontSize:12,
            color:'#63B8FF',
            marginLeft:10
    },view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right'
    }
});