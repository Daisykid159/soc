import { StyleSheet, Dimensions } from "react-native";
import Constant from "../../config/Constant";
const {height, width} = Dimensions.get("screen")

const width_Img = 110;
export const styles = StyleSheet.create({
    avatar: {
    width: width_Img * 0.9,
    height: width_Img * 0.9,
    borderRadius: (width_Img * 0.9) / 2,
    borderWidth: 5,
    borderColor: "#fff",
  },
    headerContent: {
    backgroundColor: "#ccc",
    borderRadius: width_Img / 2,
    width: width_Img,
    height: width_Img,
    alignItems: "center",
    padding: 6,
  },
    header: {
    alignItems: "center",
    top: -width_Img / 2,
    position: "absolute",
    zIndex: 99,
  },
  container: {
    backgroundColor: "#20315f",
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  name: {
    fontSize: 22,
    color: "#000",
    fontWeight: "600",
  },
  email: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
  },
  wrapper:{
    width:'100%',
    height:'100%',
    flex:1,
    paddingTop:100,
    backgroundColor:'transparent',
  },
  pannel: {
    backgroundColor: "#a4d9f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 1,
    alignItems: "center",
    paddingTop: width_Img,
    height:'100%',
    bottom:0,
    paddingBottom:Constant.VAR.HEIGHT_BOTTOM_TAB,
    
  },
  profileDetail: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "90%",
    alignItems: "center"
  },
  title:{
    fontSize:20,
    color: '#000',
    textAlign:"left",
  },
  detailTop: {
  flexDirection: "row",
  padding: 15,
  justifyContent:"space-around",
  borderBottomColor: "#666",
  borderBottomWidth: 1,
  width: "70%"
},
button_title:{
    fontSize:15,
    color: "white"
},
devide: {
  height:"100%",
  width: 2,
  backgroundColor:"#666",
},
detailBottom: {
  flexDirection: "row",
  padding: 15,
  justifyContent: "space-around",
  width: "100%",
},
detailItem :{
    alignItems: "center",
},
icon:{
    padding:5,
    backgroundColor: "#ccc",
    width: 40,
    textAlign: "center",
    borderRadius: 8,
},
detailText:{
    fontSize:16,
    color:"rgb(29, 104, 104)"
},
body:{
    width: "95%",
    marginTop: 5,
    padding:5,
},
button:{
    flexDirection: 'row',
    padding: 11,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#04567f",
    margin: 5,
    borderRadius: 15,
},
}
);
export default styles;