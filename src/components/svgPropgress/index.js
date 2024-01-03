import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import * as shape from 'd3-shape';
import Path from './Path';
import Svg, {G} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';

class ProgressCircle extends PureComponent {
  state = {
    height: 0,
    width: 0,
  };

  _onLayout(event) {
    const {
      nativeEvent: {
        layout: {height, width},
      },
    } = event;
    this.setState({height, width});
  }

  render() {
    const {
      style,
      progressColor,
      backgroundColor,
      strokeWidth,
      startAngle,
      endAngle,
      animate,
      animateDuration,
      children,
      cornerRadius,
      dataChart,
      dataDes,
    } = this.props;

    let {progress} = this.props;

    const {height, width} = this.state;

    const outerDiameter = Math.min(width, height);

    if (!isFinite(progress) || isNaN(progress)) {
      progress = 0;
    }

    // important order to have progress render over "rest"
    const data = dataChart;
    //  [
    //   {
    //     key: 'rest',
    //     value: 1,
    //     color: '#434C78',
    //   },

    //   {
    //     key: 'progres1s',
    //     value: 1,
    //     color: '#8F94FB',
    //   },

    //   {
    //     key: 'progres1s',
    //     value: 1,
    //     color: '#F5AF19',
    //   },
    //   {
    //     key: 'progress',
    //     value: 1,
    //     color: '#E923FF',
    //   },
    // ];

    const pieSlices = shape
      .pie()
      .value(d => d.value)
      .sort(a => (a.key === 'rest' ? 1 : -1))
      .startAngle(startAngle)
      .endAngle(endAngle)(data);

    const arcs = pieSlices.map((slice, index) => ({
      ...data[index],
      ...slice,
      path: shape
        .arc()
        .outerRadius(index === 0 ? outerDiameter / 2 + 2 : outerDiameter / 2) // Radius of the pie
        .innerRadius(
          index === 0
            ? outerDiameter / 2 - strokeWidth - 2
            : outerDiameter / 2 - strokeWidth,
        ) // Inner radius: to create a donut or pie
        .startAngle(index === 0 ? startAngle : startAngle)
        .endAngle(index === 0 ? endAngle : slice.endAngle)
        .cornerRadius(cornerRadius)(),
    }));

    const extraProps = {
      width,
      height,
    };

    return (
      <View style={style} onLayout={event => this._onLayout(event)}>
        {height > 0 && width > 0 && (
          <Svg
            style={{
              height: height + 20,
              width,
            }}>
            {/* center the progress circle*/}
            <G x={width / 4} y={(height + 20) / 2}>
              {React.Children.map(children, child => {
                if (child && child.props.belowChart) {
                  return React.cloneElement(child, extraProps);
                }
                return null;
              })}
              {arcs.map((shape, index) => {
                return (
                  <Path
                    key={index}
                    fill={shape.color}
                    d={shape.path}
                    animate={animate}
                    animationDuration={animateDuration}></Path>
                );
              })}
              {React.Children.map(children, child => {
                if (child && !child.props.belowChart) {
                  return React.cloneElement(child, extraProps);
                }
                return null;
              })}
            </G>
          </Svg>
        )}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: height,
            width: width / 2 + 10,
          }}>
          <View style={{paddingHorizontal: 12, paddingBottom: 12}}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Thông số
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dataDes?.map((item, index) => {
                return (
                  <View
                    style={{
                      paddingLeft: 12,
                      marginTop: 6,
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                        backgroundColor: item.color,
                        marginRight: 12,
                      }}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        alignSelf: 'center',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
            {/* <View
              style={{
                paddingLeft: 12,
                marginTop: 12,
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,

                  backgroundColor: '#F5AF19',
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  alignSelf: 'center',
                }}>
                Truy cập không hợp lệ
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 12,
                marginTop: 12,
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  backgroundColor: '#E923FF',
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  alignSelf: 'center',
                }}>
                Truy cập hợp lệ
              </Text>
            </View> */}
          </View>
        </View>
      </View>
    );
  }
}
// gọi props
ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.any,
  progressColor: PropTypes.any,
  backgroundColor: PropTypes.any,
  strokeWidth: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  animate: PropTypes.bool,
  cornerRadius: PropTypes.number,
  animateDuration: PropTypes.number,
  dataChart: PropTypes.array,
  dataDes: PropTypes.array,
};
// khỏi tạo giá trị mặc định khi ko truyền vào
ProgressCircle.defaultProps = {
  progressColor: 'black',
  backgroundColor: '#ECECEC',
  strokeWidth: 10,
  startAngle: 0,
  endAngle: Math.PI * 2,
  cornerRadius: 30,
  dataChart: [
    {
      key: 'rest',
      value: 0,
      color: '#434C78',
    },
    {
      key: 'progres1s',
      value: 12,
      color: 'green',
    },

    {
      key: 'progres1s',
      value: 7,
      color: '#8F94FB',
    },

    {
      key: 'progres1s',
      value: 6,
      color: '#F5AF19',
    },
    {
      key: 'progress',
      value: 5,
      color: '#E923FF',
    },
  ],
  dataDes: [{name: 'lo hoong', color: '#F5AF19'}],
};

export default ProgressCircle;
