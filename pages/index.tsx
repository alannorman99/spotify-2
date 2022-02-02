import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>
          Spotify 2.0
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is a start</h1>
    </div>
  )
}
