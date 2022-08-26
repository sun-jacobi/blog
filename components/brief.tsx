import { blogDataType } from "../lib/posts";
import Link from "next/link";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardStyle = { 
  "width": '30rem', 
  "height": '15rem',
  "padding-top" : "30px",
  "border" : "0px"
};

export default function Brief({id, title, date} : blogDataType)
{
    return (
        <> 
        <Card style={CardStyle}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {`Last updated on ${date.toString()}`}
        </Card.Text>
        <Link href={`/blogs/${id}`}>
        <Button variant="dark"> 
        Learn More
        </Button>
        </Link>

      </Card.Body>
    </Card>
    </>
  );
}