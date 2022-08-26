import { getAllPaths, getBlogContent, getBlogData  } from "../../lib/posts"

import { blogType, blogDataType, blogContentType} from "../../lib/posts";
import Head from "next/head";
import hljs from 'highlight.js';
import { useEffect } from "react";

import styles from "../../styles/Blog.module.css"
type paramType = {
    id : string;
}

function Markup(content : blogContentType) {
    return {__html: content.content};
}



export default function Blog({blog} : {blog :blogType}) {
    useEffect(() => {
        hljs.configure({ cssSelector: 'code' });
        hljs.highlightAll();
    }, []);
    let {content,data} : {content : blogContentType
    , data : blogDataType} = blog;
    return (   
        <div className={styles.main}>
    <div className={styles.time}> {`Last updated on ${data.date.toString()}`}</div>
    <div dangerouslySetInnerHTML={Markup(content)}></div>
    </div>
    );

}


export async function getStaticProps({params} : {params : paramType} ) {
    const content = await getBlogContent(params.id);
    const data = await getBlogData(params.id);
    return {
        props : {
            blog : {
                content,
                data,
            },
        },
    }
}



export async function getStaticPaths() {
    const paths = await getAllPaths();
    return {
        paths,
        fallback :false,
    };
}
