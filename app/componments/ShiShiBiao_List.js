/*
 *ShiShiBiao_List page
 *
 */
import React,{Component} from 'React';
import {
    View,
    Text,
    StyleSheet,
    Image,
}from 'react-native';

export default class ShiShiBiao_List extends Component{
    render(){
        return (
            <View style={styles.container} >
                <View style={styles.header} >
                    {/*<Image style={styles.header_Img} source={require('../img/icon_diqu_zjt@2x.png')} />*/}
                    <Text style={styles.header_text} >实时标</Text>
                </View>
                <View style={styles.wrap} >
                <View style={styles.content_left}>
                    <View style={styles.module_left}>
                        <Text style={styles.content_text_left} >
                            通信线路工程
                        </Text>
                    </View>
                    <View style={styles.module_left}>
                        <Text style={styles.content_text_left} >
                            通信传输工程
                        </Text>
                    </View>
                    <View style={styles.module_left}>
                        <Text style={styles.content_text_left} >
                            通信系统集成
                        </Text>
                    </View>
                </View>

                <View style={styles.content_right} >
                    <Text style={styles.content_text_right} >
                        CMNET
                    </Text>
                </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    wrap:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#f8f8f8',
        width:280
    },
    content_left:{
        flex:1,
        backgroundColor:'#3c3c3c'

    },content_right:{
        flex:1,
        backgroundColor:'#f8f8f8'

    },content_text_left:{
        fontSize:16,
        color:'#fff',
        textAlign:'center'

    },content_text_right:{

    },module_left:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        padding:20
    },header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: 18,
        backgroundColor: '#e2241d'
    },header_text:{
        fontSize:18,
        color:'#fff'
    },header_Img:{
        width:18,
        height:18
    }
});