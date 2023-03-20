import styled from "styled-components"
import axios from "axios"
import UserContext from "./UserContext"
import { useContext } from "react"


function ListaHabitos(props){
    const array = ["D","S","T","Q","Q","S","S"]
    const {token} = useContext(UserContext)
    console.log(props.dias)
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }
    function delet(){
        const resquest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,config)
    }
    return(
        <MeusHabitos >
            <div>
            <h1>{props.nome}</h1>
            <img onClick={delet} src="/lixeira.png"/>
            </div>
            {array.map((e,i) => <Button i={i} dias={props.dias} disabled>{e}</Button>)}
        </MeusHabitos>
    )
}
export default ListaHabitos

const MeusHabitos = styled.div` 
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding:14px;
margin-bottom:10px;
h1{
    font-weight: 400;
font-size: 19.976px;
color: #666666;
}

img{
    width:20px;
    height:20px;
}
div{
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
}

`

const Button = styled.button` 
font-size: 19.976px;
    width:30px;
    height:30px;
    margin-right:4px;
    background-color: ${props => !(props.dias.includes(props.i)) ? "#FFFFFF": "#CFCFCF"};
    color: ${props => !(props.dias.includes(props.i)) ? "#CFCFCF": "#FFFFFF"};
`