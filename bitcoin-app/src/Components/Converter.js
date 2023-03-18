// import React, { useEffect, useState } from 'react'
// import {Button ,Card,Form,Input,Select} from 'antd'
// import './converter.css'


// function Converter() {
    
//     const[crypto,setCrypto]=useState([]);
//     const[inputValue,setInputValue]=useState("0");
//     const[result,setResult]=useState("0");
//     const[firstSelect,setFirstSelect]=useState("BitCoin")
//     const[secondSelect,setSecondSelect]=useState("Ether")

//     const apiUrl='https://api.coingecko.com/api/v3/exchange_rates';
//     const names=[{}]
//     useEffect(()=>{
//         fetchData();
//     },[])           
//     useEffect(()=>{
//         console.log(inputValue,firstSelect,secondSelect);
//     },[inputValue,firstSelect.secondSelect]) 
//     async function fetchData(){
//         const response=await fetch(apiUrl);
//         const jsonData=await response.json();
//         const data=jsonData.rates;
//         const tempArray=Object.entries(data).map((item)=>{
//             return {
//                 value:item[1].name,
//                 label:item[1].name,
//                 rate:item[1].value
//             }
//         })
//         setCrypto(tempArray)
//     }
//     useEffect(()=>{
//         if(crypto==0)return;
//         const firstRate=crypto.find((item)=>{
//             return item.value === firstSelect;
//         }).rate
//         const secondRate=crypto.find((item)=>{
//             return item.value === secondSelect;
//         }).rate
//         const resultValue=(secondRate/firstRate)*inputValue
//         setResult(resultValue.toFixed(6))
//     },[firstSelect,secondSelect,inputValue])
    
//   return (
//     <div className='container'>
//     <Card className='crypto-card' title={<h1>Crypto-Converter'</h1>}>
//     <Form.Item
//         rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//         <Input onChange={(event)=>{
//             setInputValue(event.target.value)
//         }}/>
//     </Form.Item>
//     <div className='drop'>
//           <Select onChange={(value)=>{setFirstSelect(value)}} defaultValue="BitCoin" style={{width:'160px'}} options={crypto}>
//             {/* <Select.Option value="demo" >Demo</Select.Option> */}
//           </Select>
//           <Select onChange={(value)=>{setSecondSelect(value)}} defaultValue="Ether" style={{width:'160px'}} options={crypto}>
//             {/* <Select.Option value="demo">Demo</Select.Option> */}
//           </Select>
//     </div>
//     <p>{inputValue} {firstSelect}: {result} {secondSelect}</p>
//     </Card>
    
//     {/* <Button type='primary'>Click Me</Button> */}
//     </div>
//   )
// }

// export default Converter

import React, { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";

// import { RiCoinsLine } from 'react-icons/ri';
import './converter.css';

function Converter() {
    const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

    const defaultFirstSelectValue = "Bitcoin";
    const defaultSecondSelectValue = "Ether";

    const [cryptoList, setCryptoList] = useState([]);
    const [inputValue, setInputValue] = useState("0");
    const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
    const [secondSelect, setSecondSelect] = useState(defaultSecondSelectValue);
    const [result, setResult] = useState("0");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const data = jsonData.rates;
        const tempArray = Object.entries(data).map((item) => {
            return {
                value: item[1].name,
                label: item[1].name,
                rate: item[1].value,
            };
        });

        setCryptoList(tempArray);
    }

    useEffect(() => {

        if(cryptoList.length === 0) return;

        const firstSelectRate = cryptoList.find((item) => {
            return item.value === firstSelect
        }).rate;
        const secondSelectRate = cryptoList.find((item) => {
            return item.value === secondSelect
        }).rate;

        const resultValue =  (inputValue * secondSelectRate) / firstSelectRate;
        setResult(resultValue.toFixed(6));

    }, [inputValue, firstSelect, secondSelect,cryptoList])

    return (<>
    
    <div className="container">
            
            <Card className="crypto-card" title={<h1 style={{fontFamily:'verdana'}}> Crypto Converter</h1>}>
                <Form size="large">
                    <Form.Item>
                        <Input onChange={(event) => setInputValue(event.target.value)}/>
                    </Form.Item>
                </Form>
                <div className="select-box">
                    <Select
                        style={{ width: "25vw",marginTop:'30px'}}
                        defaultValue={defaultFirstSelectValue}
                        options={cryptoList}
                        onChange={(value) => setFirstSelect(value)}
                    />
                    <Select
                        style={{ width: "25vw",marginTop:'30px' }}
                        defaultValue={defaultSecondSelectValue}
                        options={cryptoList}
                        onChange={(value) => setSecondSelect(value)}
                    />
                </div>
                <p className="para">{inputValue} {firstSelect} = {result} {secondSelect}</p>
            </Card>
    </div>
    </>
    );
}

export default Converter;