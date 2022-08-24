
import styled from "styled-components"

const StyledSlogan = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    padding : 3px 30px 3px 30px;
    background-color: black;
    color : white;
`;


export default function Slogan() {
    return <StyledSlogan>
        Build System Just For Fun.
    </StyledSlogan>
}