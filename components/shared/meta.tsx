import Head from 'next/head'

type Props = {
  title: string
  description?: string
  keywords?: string
  image?: string
}

const Meta = ({ title, keywords, description, image }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : '/logo512.png'} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : '/logo512.png'} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>
        {title.includes('Ahmad') ? title : title.concat(' | Muhammad Ahmad')}
      </title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Muhammad Ahmad - Full Stack Developer',
  keywords: 'web development, programming, web design, react js, chakra ui',
  description: 'Software Engineer. Lover of web and opensource.',
}

export default Meta
