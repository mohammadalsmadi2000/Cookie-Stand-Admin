import CustomForm from "@/components/CustomForm"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PlaceholderComponent from "@/components/PlaceholderComponent"
import Head from "next/head"
import { useState } from "react"
export default function Home() {
  const [data, setData] = useState({})
  const [haveData, setHaveData] = useState(false)

  function handelData(fromCahild) {
    setData((prev) => ({
      ...prev,
      ...fromCahild
    }))
    setHaveData(true)
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin - Home</title>
        <meta
          name="description"
          content="Cookie Stand Admin is a web application that allows you to manage and track your cookie stands. Create new stands, view sales reports, and track performance with ease. Join us and take your cookie business to the next level!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="cookie stand, admin, react, next.js" />
        <meta name="author" content="Your Name Here" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Cookie Stand Admin - Your Title Here" />
        <meta name="twitter:description" content="Cookie Stand Admin is a web application that allows you to manage and track your cookie stands. Create new stands, view sales reports, and track performance with ease. Join us and take your cookie business to the next level!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Header title="Cookie Stand Admin" />
      </header>
      <main className="flex flex-col min-h-screen">
        <div className="flex items-center justify-center" style={{ flex: 1 }}>
          <div style={{ height: 300, width: 800, backgroundColor: "#86eeac", borderRadius: 9 }}>
            <CustomForm handelData={handelData} />
            {haveData && <div> <br />
              <PlaceholderComponent data={data} />

              <br />



            </div>
            }
          </div>
        </div>



        <div className="flex items-start justify-center" style={{ flex: 1 }}>
          {!haveData && <p>Report Table Coming Soon...</p>}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
