import { Appearance } from "react-native"

const dark_white = Appearance.getColorScheme();
let light_mode = false;
if (dark_white=='light')
{
    light_mode = true;
}
console.log(dark_white);
export const colors = {
    black:'#000000',
    textcolor:light_mode?'#ffffff':'#000000',
}