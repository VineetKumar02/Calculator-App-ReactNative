import { React, useState } from "react";
import { View, Text } from "react-native";

import Button from "./Button";

import { Styles } from "../styles/Styles";



export default function MyKeyboard() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState(null);


    const handleNumberPress = (buttonValue) => {
        if (expression.length < 15) {
            if (result) {
                setExpression(buttonValue);
            }
            else {
                setExpression(expression + buttonValue);
            }
            setResult(null);
        }
    };

    const handleOperationPress = (buttonValue) => {
        setExpression(expression + buttonValue);
        setResult(null);
        if (expression.length < 15) {
            if (result) {
                setExpression(result + buttonValue);
            }
            else {
                setExpression(expression + buttonValue);
            }
            setResult(null);
        }
    };

    const clear = () => {
        setExpression("");
        setResult(null);
    };

    const expressionDisplay = () => {
        if (result) {
            return <Text style={[Styles.expressionText, { fontSize: 30 }]}>{expression}</Text>;
        }
        else if (expression.length < 6) {
            return <Text style={[Styles.expressionText]}>{expression}</Text>;
        }
        else if (expression.length >= 6 && expression.length < 8) {
            return <Text style={[Styles.expressionText, { fontSize: 70 }]}>{expression}</Text>;
        }
        else if (expression.length >= 8 && expression.length < 11) {
            return <Text style={[Styles.expressionText, { fontSize: 50 }]}>{expression}</Text>
        }
        else if (expression.length >= 11 && expression.length < 14) {
            return <Text style={[Styles.expressionText, { fontSize: 40 }]}>{expression}</Text>
        }
        else {
            return <Text style={[Styles.expressionText, { fontSize: 35 }]}>{expression}</Text>
        }
    };


    const resultDisplay = () => {
        if (result !== null) {
            if (result.length < 6) {
                return <Text style={[Styles.resultText]}>{result}</Text>;
            }
            else if (result.length >= 6 && result.length < 8) {
                return <Text style={[Styles.resultText, { fontSize: 70 }]}>{result}</Text>;
            }
            else if (result.length >= 8 && result.length < 11) {
                return <Text style={[Styles.resultText, { fontSize: 50 }]}>{result}</Text>
            }
            else if (result.length >= 11 && result.length < 14) {
                return <Text style={[Styles.resultText, { fontSize: 40 }]}>{result}</Text>
            }
            else {
                return <Text style={[Styles.resultText, { fontSize: 35 }]}>{result}</Text>
            }
        }
        else {
            return (<></>);
        }
    };

    const getResult = () => {
        try {
            let ans = eval(expression).toString();
            setResult(ans);
        }
        catch (error) { }
    };

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                {expressionDisplay()}
                {resultDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="⌫" isGray onPress={() => { setExpression(expression.slice(0, -1)); setResult(null) }} />
                <Button title="％" isBlue onPress={() => handleOperationPress("%")} />
                <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Button title="00" onPress={() => handleNumberPress("00")} />
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="." onPress={() => handleOperationPress(".")} />
                <Button title="=" isLightBlue onPress={() => getResult()} />
            </View>
        </View>
    );
}
