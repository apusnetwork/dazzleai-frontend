import LegalLayout from "@/frontend/components/layout/legal";
import fs from "fs";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import Showdown from "showdown";


export default function LegalPage({ html, title, description, slug }: { html: string, title: string, description: string, slug: string }): JSX.Element {


  return (

    <LegalLayout title={title} description={description} canonical={`/legal/${slug}`}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  )
}




export function getStaticProps({ params }: GetStaticPropsContext): GetStaticPropsResult<any> {

  if (!params) return { notFound: true }
  let title = '';
  let description = '';

  const converter = new Showdown.Converter();

  let markdown = fs.readFileSync(`content/legal/${params.slug}.md`, "utf8");

  const regex = /^---\ntitle:\s(.*)\ndescription:\s(.*)\n---\n/;
  const match = markdown.match(regex);


  if (match && match.length) {
    title = match[1];
    description = match[2]

    markdown = markdown.replace(match[0], '');
  }



  const html = converter.makeHtml(markdown);

  return { props: { html, title, description, slug: params.slug } };
}

export function getStaticPaths(): GetStaticPathsResult {
  const articles = fs
    .readdirSync("content/legal")
    .filter((a) => a.endsWith(".md"))
    .map((a) => a.replace(".md", ""));

  const paths = articles.map((a) => ({ params: { slug: a } }));

  return {
    paths,
    fallback: false,
  };
}