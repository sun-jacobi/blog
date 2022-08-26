import * as fs from 'fs/promises'
import path, { join, resolve } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';



const blogDir = path.join(process.cwd(), '_blogs');


export type blogType = {
    data : blogDataType;
    content : blogContentType
}

export type blogDataType = {
    id : string;
    title : string;
    date : Date;
}

export type blogContentType = {
    id : string;
    content : string;
}


//------------------------------------------------------

export async function getBlogData(id : string) {
    const filePath = join(blogDir, id + ".md");
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const matterData = matter(fileContent).data;
    return {
        id,
        title : matterData['title'] as string,
        date : matterData['date'] as Date,
    }
}
export async function getBlogContent(id : string) {
    const filePath = join(blogDir, id + ".md");
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const matterContent = matter(fileContent).content;
    const contentHtml = await remark().use(remarkHtml)
                                .process(matterContent);
    return {
        id,
        content : contentHtml.toString(),
    }
}




//------------------------------------------------------
export async function getAllPaths() {
    const filenames = await fs.readdir(blogDir);
    return filenames.map((filename) => 
    {
        return {
            params : {
                id : filename.replace(/\.md$/, ''),
            }
        } 
    });

}


// get the font matter
export async function getBlogsData() {
    const filenames = await fs.readdir(blogDir);
    const blogsData = await Promise.all(filenames.map(async (filename) =>  {
        const id = filename.replace(/\.md$/, '');
        const filepath = path.join(blogDir, filename);
        const fileContent = await fs.readFile(filepath, 'utf-8');
        const matterData = matter(fileContent).data;
        return {
            id, 
            title : matterData['title'] as string,
            date : matterData['date'] as Date,
        } 
    }));
    return blogsData;  
}



