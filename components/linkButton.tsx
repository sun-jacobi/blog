import {Button} from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';


const StyledButton = styled(Button)`
    margin-top: 13px;
    width: 150px;
`;


export default function linkButton
    ({href, text} : {
        href : string
        text : string
    })
{
    return (
        <div className='linkButton'> 
        <Link href= {href}>
            <StyledButton variant = "outline-black">
              {text}  
            </StyledButton>
        </Link> 
        </div>);
}