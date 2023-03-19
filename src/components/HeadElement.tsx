import Head from 'next/head'

export type HeadProps = {
    title: string;
    description: string;
    image?: string;
  };

export default function HeadElement({ description, image, title }: HeadProps) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta name="description" content={description} />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
    </Head>
    </>
  )
}