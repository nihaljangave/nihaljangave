import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nihal Jangave is an avid data engineer building data pipelines and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nihal jangave, nihal, jangave, data engineer portfolio, nihal data engineer, nihal developer, data pipelines, nihal jangave portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nihal Jangave's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nihal Jangave',
};
