import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const Button = ({value}) => {
const {calc,setCalc}=useContext(CalcContext);

    const getStyleNme=btn=>{
        const className={
            '=':'equals',
            'x':'opt',
            '+':'opt',
            '-':'opt',
            '/':'opt',
        }
        return className[btn];
    }
    //User Clicks Decimal
    const decimalClick=()=>{
        setCalc({
            ...calc,
           num:!calc.num.toString().includes('.')?calc.num+value:calc.num
        })
    }
    //User Clicks C 
    const resetClick=()=>{
        setCalc({sign:'',num:0,res:0})
    }
    //User Click Number
    const numberClick=()=>{
        const numberString=value.toString()
        let numberValue;
        if(numberString==='0' && calc.num===0){
            numberValue='0'
        }
        else{
            numberValue=Number(calc.num+numberString)
        }
        setCalc({
            ...calc,
            num:numberValue
        })
    }
        //User Click Operators
        const signClick=()=>{
            setCalc({
                sign:value,
                res:!calc.res && calc.num? calc.num:calc.res,
                num:0
            })
        }
        //User Clicks Equal
        const equalsClick=()=>{
            if(calc.res && calc.num){
                const math=(a,b,sign)=>{
                    const result={
                        '+':(a,b)=>a+b,
                        '-':(a,b)=>a-b,
                        'x':(a,b)=>a*b,
                        '/':(a,b)=>a/b,
                        '%':(a,b)=>a%b,
                     }
                     return result[sign](a,b);
                }
                setCalc({
                    res:math(calc.res,calc.num,calc.sign),
                    sign:'',
                    num:0
                })
            }
           
          
        }
        //User Clicks invert button
        const invertClick=()=>{
            setCalc({
                num:calc.num?calc.num*-1:0,
                res:calc.res?calc.res*-1:0,
                sign:''
            })
        }
    const handleBtnClick=()=>{
        const results={
            '.':decimalClick,
            'C':resetClick,
            '/':signClick,
            'x':signClick,
            '+':signClick,
            '-':signClick,
            '%':signClick,
            '=':equalsClick,
            '+-':invertClick,

        }
        if (results[value]){
            return results[value]()
        }
        else{
          return numberClick()
        
        }
    }

  return (
    <button onClick={handleBtnClick} className={`${getStyleNme(value)} button`}>{value}</button>
  )
}

export default Button