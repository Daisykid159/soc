import React from 'react';
import {
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';

function ButtonSearch(props: {setState?: any; origin?: Array<any>}) {
  const [expand, setExpand] = React.useState(false);
  const [width, setWidth] = React.useState(() => new Animated.Value(0));
  const maxHeight = width.interpolate({
    inputRange: [0, 1],
    outputRange: ['10%', '52%'], // <-- value that larger than your content's height
  });
  const ShowMore = () => {
    Animated.timing(width, {
      toValue: expand ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false, // <-- neccessary
    }).start(() => setExpand(!expand));
  };
  const onChangeText = (value: string) => {
    if (props.origin && props.setState && props.origin.length > 0) {
      var keys = Object.keys(props.origin[0]);
      var newState = [];
      props.origin.forEach(item => {
        var include = false;
        for (var i = 0; i < keys.length; i++) {
          var items = item[`${keys[i]}`] + '';
          if (items.includes(value)) {
            include = true;
          }
        }
        include ? newState.push(item) : null;
      });
      props.setState(newState);
    }
  };
  return (
           <Animated.View
        style={{
          justifyContent: 'center',
          marginRight: 10,
          height: 30,
          width: maxHeight,
          borderRadius: 15,
          backgroundColor: '#152F3E',
          alignItems: 'center',
          marginTop: 6,
          position: 'relative',
        }}>
        {expand && (
          <TextInput
            placeholder={'Enter Any'}
            placeholderTextColor="#ccc"
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              paddingRight: 30,
              paddingLeft: 20,
              fontSize: 14,
              paddingVertical: 0,
              color: 'white',
            }}
            onChangeText={e => onChangeText(e)}
          />
        )}
        <TouchableOpacity
          onPress={() => ShowMore()}
          style={{position: 'absolute', right: 10}}>
          <SvgXml xml={`${svgs.SvgSearch}`} height={14} width={14} />
        </TouchableOpacity>
      </Animated.View>

  );
}
export default ButtonSearch;
