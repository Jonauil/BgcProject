import React,{Component} from 'React';
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';


export default class Image_Demo extends Component{
    render(){
        return(
            <View style={{marginLeft:10,marginTop:30}} >
                <Text style={{fontSize:16}} >本地图片</Text>
                <Image source={require('../img/icon_add_red@3x.png')} />
            </View>

        );
    }
}

const styles = StyleSheet.create({


});