import React from 'react'
import { View ,StyleSheet,Button,Text,TouchableOpacity} from 'react-native';

export default class Calculator extends React.Component{

    constructor(){
        super()
        this.state={
            resultText:"",

        }
        this.operators=['DEL','+','-','*','/']
    }
    numberPressed(text){
        if(text=='='){
            return this.validate() && this.calculateResult()
        }
        this.setState({
            resultText:this.state.resultText+text,
        })
    
    }

    validate(){
        const text = this.state.resultText;
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':
                return false;
        }

        return true
    }
    
    calculateResult(){
        const text = this.state.resultText
        // text.split('').forEach(char=>{
        //     if(char=='+'||char=='-'||char=='*'||char=='/'){

        //     }
        // })
        this.setState({
            calculationText:eval(text)
        })
    }
    operatorsPressed(operator){
        switch(operator){
            case 'DEL':
                if(this.state.resultText=="") break
                let number = this.state.resultText.split('');
                number.pop()
                this.setState({
                    resultText:number.join('')
                })
            break
            case '+':
            case '-':
            case '*':
            case '/':
            if(this.state.resultText=="") break
            const lastChar = this.state.resultText.split('').pop()

            if(this.operators.indexOf(lastChar)>0) return
            this.setState({
                resultText:this.state.resultText + operator,
            })
            break
        }
    }

    clearCalculation(text){
        switch(text){
            case 'DEL':
                this.setState({
                    resultText : "",
                    calculationText:""
                })
            break
        }
    }

    render(){

        let rows =[]
        let numbers =[[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
        for(let i=0;i<4;i++){
            let row=[]
            for(let j=0;j<3;j++){
                row.push(
                    <TouchableOpacity onPress={()=>this.numberPressed(numbers[i][j])}>
                    <Text style={styles.textDigits}>{numbers[i][j]}</Text>
                </TouchableOpacity>
                )
            }
            rows.push(<View style={styles.row}>{row}</View>);
        }

        
        let ops =[]
        for(let i=0;i<5;i++){
            ops.push(
                <TouchableOpacity onPress={()=>this.operatorsPressed(this.operators[i])}
                onLongPress={()=>this.clearCalculation(this.operators[i])}>
                <Text style={styles.textDigits}>{this.operators[i]}</Text>
                </TouchableOpacity>
            )
        }

        return(
            <View style={styles.container}>

                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>

                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>

            </View>
        )
    }
    static navigationOptions = {
        header: null,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25
    }, 
    result:{
        flex:2,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    calculation:{
        flex:1,
        backgroundColor:'white'
    },
    buttons:{
        flex:7,
        flexDirection:'row'
    },
    resultText:{
        flex:1,
        fontSize:40,
        textAlignVertical: "center",
        fontWeight: '400',
    },
    calculationText:{
        flex:1,
        fontSize:40,
        textAlign:"right",
        textAlignVertical: "center",
        fontWeight: '400',
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    numbers:{
        flex:3,
        backgroundColor:'#434343',
    },
    textDigits:{
        fontSize:30,
        fontWeight: '400',
        padding:15,
        color:'white'
        // fontFamily: 'Cochin',
    },
    operations:{
        flex:1,
        backgroundColor:'#636363',
        justifyContent:'space-around',
        alignItems:'center'
    }
})