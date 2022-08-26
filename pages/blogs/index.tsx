import { getBlogsData } from "../../lib/posts";
import Brief from "../../components/brief";
import { blogDataType } from "../../lib/posts";

import styles from '../../styles/BlogHome.module.css'

export default function BlogIndex({data} : {data : blogDataType[]}) {
    const briefs = data.map((item, index) => <Brief {...item} key = {index}/>);
    return (
        <div className={styles.main}>
        <h1> JIA SUN </h1>
        <h2> Heap </h2>
         {briefs}
        </div>
    );
}


export async function getStaticProps() {
    const data = await getBlogsData();
    return {
        props : {
            data,
        },   
    };
}