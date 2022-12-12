import styled from "styled-components"

const HeaderSection = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: auto;
padding: 10px;
background-color: purple;
color: white;
`

const Header2 = styled.h2`
margin-right: auto;
margin-left: 20px;
font-size: 40px;
`

const Header4 = styled.h4`
margin-right: 20px;
font-size: 25px;
`

function Header(){
    return(
        <HeaderSection>
            <Header2>Meme Maker</Header2>
            <Header4>Made by You!</Header4>
        </HeaderSection>
    )
}

export default Header