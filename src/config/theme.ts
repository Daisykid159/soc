const darkBG = require('../assets/img/imageContainer/bg.png');
const lightBG = require('../assets/img/imageContainer/lightBG.png');

export const darkTheme:PropsStyleTheme = {
    BackGroundImage:darkBG,
    StatusBarMode:"light-content",
    ColorCard:"#162235"
}
export const lightTheme:PropsStyleTheme = {
    BackGroundImage:lightBG,
    StatusBarMode:"dark-content",
    ColorCard:"rgba(0,0,0,.5)"
}
export interface PropsStyleTheme {
    BackGroundImage:any,
    StatusBarMode?: 'light-content' | 'dark-content',
    ColorCard?:string
}