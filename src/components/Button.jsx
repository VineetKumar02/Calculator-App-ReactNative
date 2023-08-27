import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

import { ThemeContext } from "../context/themeContext";
import { Styles } from './../styles/Styles';



const Button = ({ onPress, title, isLightBlue, isBlue, isGray }) => {

    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                Styles.btn,
                isLightBlue ? Styles.btnLightBlue
                    : isBlue ? Styles.btnBlue
                        : isGray ? Styles.btnGray
                            : theme === 'light'
                                ? Styles.btnLight
                                : Styles.btnDark
            ]}

        >
            <Text
                style={[
                    isBlue || isLightBlue || isGray
                        ? Styles.smallTextLight
                        : theme === 'light'
                            ? Styles.smallTextDark
                            : Styles.smallTextLight
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
