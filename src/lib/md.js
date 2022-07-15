import Fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = `${process.cwd()}/src`;

export const getFiles = (direction) => Fs.readdirSync(path.join(root,`pdf/${direction}`))

export const getFileBySlug = async ( slug, direction) => {
  const mdxSource = Fs.readFileSync(path.join(root, `pdf/${direction}`, `${slug}.mdx`), 'utf-8')

  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    fromMatter:{
      slug,
      ...data,
    }
  }
}

export const getAllFilesMetadata = (direction) => {
  const files = getFiles(direction);

  return files.reduce((allPost, slugPdf) => {
    const mdxSource = Fs.readFileSync(
      path.join(root, `pdf/${direction}`, slugPdf),
      'utf-8'
    )

    const { data } = matter(mdxSource)
    return [...allPost ,{ ...data, slug: slugPdf.replace('.mdx', '')}]
  },[])
}
