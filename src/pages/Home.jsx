import React from "react";
import styled from "styled-components";
export default function Home(){
    
    return(
        <Body>
            <List>
                <a href="game">게임하기</a>
            </List>
            <List>
            <a href="game">랭킹보기</a>

            </List>
            <List>
            <a href="game">내 정보</a>
            </List>
        </Body>
    )
}
const Body=styled.div`
width:100%;
height:100%;
`
const List=styled.div`
    
`