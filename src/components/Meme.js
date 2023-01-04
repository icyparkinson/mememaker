import React from "react"
import {useState, useEffect} from "react"
import styled from "styled-components"

const MainSection = styled.main`
width: 80%;
margin: 25px auto;
`

const Form = styled.div`
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

const MemeArea = styled.div`
display:flex;
position: relative;
justify-content: center;

img{
    display: flex;
    width: 50%;
    border: 1px solid black;
    margin: 15px;
}

h2{
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
}

.topText{
    top: 0;
}

.bottomText{
    bottom: 0;
}


`

function Meme(){

    const [memeData, setMemeData] = useState({
        imgUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setMemeData((prevMeme) =>{
            return({
                ...prevMeme,
                [name]: value
            })
        })
    }

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*100))

    function handleButton(){
        setRandomNumber(Math.floor(Math.random()*100))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData((prevMeme) => {
            return {
                ...prevMeme,
                imgUrl: data.data.memes[randomNumber].url
            }
        }))
    }, [randomNumber])


    return(
        <MainSection>
            <Form>
                <Input 
                    type = "text" 
                    placeholder="Top Text"
                    value={memeData.topText}
                    name="topText"
                    onChange={handleChange}
                ></Input>
                <Input 
                    type = "text" 
                    placeholder="Bottom Text"
                    value={memeData.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                ></Input>
                <Button onClick={handleButton}>Click to get random image!</Button>
            </Form>

            <MemeArea>
                <img src={memeData.imgUrl} alt="meme" />
                <h2 className="topText">{memeData.topText}</h2>
                <h2 className="bottomText">{memeData.bottomText}</h2>
            </MemeArea>
        </MainSection>
    )
}

export default Meme