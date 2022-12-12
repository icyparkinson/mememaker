import styled from "styled-components"

const MainSection = styled.main`
width: 80%;
margin: 25px auto;
`

const Form = styled.form`
display: grid;
grid-template: 40px 40px / 1fr 1fr;
gap: 17px;
`

const Input = styled.input`
border-radius: 5px;
border-color: black;
text-indent: 5px;
`

const Button = styled.button`
grid-column: 1 / -1;
`

function Meme(){
    return(
        <MainSection>
            <Form>
                <Input type = "text" placeholder="Top Text"></Input>
                <Input type = "text" placeholder="Bottom Text"></Input>
                <Button>Click to get random image!</Button>
            </Form>
        </MainSection>
    )
}

export default Meme