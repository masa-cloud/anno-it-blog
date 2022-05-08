import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "../index";
import { client } from "../../libs/client";
import React from 'react';
import dayjs from 'dayjs'

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-2 block">{dayjs(props.publishedAt).format("YYYY年MM月DD日")}</time>
      <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: props.body }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, {id: string}> = async ( ctx ) => {
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  })

  return {
    props: data,
  }
}
export default BlogId;