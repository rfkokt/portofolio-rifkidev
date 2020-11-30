import React from "react"
import styled from "styled-components"

import Backgorund from '../../assets/pictures/company_team.jpg';
import {Logo} from "../../component/logo";

const TopContainer = styled.div`
    width : 100%;
    height : 100vh;
    padding : 0;
    background-image: url(${Backgorund})
`;

const BacgroundFilter = styled.div`
    width : 100%;
    height : 100%;
    background-color : rgba(55, 55, 55, 0.88);
    display : flex;
    flex-direction:column;
    align-items : center;
`;

export function TopSection(props) {

    return <TopContainer>
        <BacgroundFilter>
            <Logo/>
        </BacgroundFilter>
    </TopContainer>

}