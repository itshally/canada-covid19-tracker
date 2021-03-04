import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return (
        <>
        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description ? description : "..."}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content={keywords ? keywords : "..."} />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        </>
    )
}

export default Meta
