import Head from "next/head"

export default function HeadwTitle({title}){
    return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Developer Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ceb.png" />
    </Head>
    )
}