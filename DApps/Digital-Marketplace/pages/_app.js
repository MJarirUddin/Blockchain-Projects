import '../styles/globals.css'
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return <div>
    <nav className="border-b p-6 bg-gradient-to-r from-green-200 via-blue250-500 to-blue-500">
      <span className="text-4xl font-bold " >NFT Marketplace</span>
      <div className="flex mt-4 font-bold text-xl" >
        <Link href="/">
          <a className="mr-4 text-blue-500 " >Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-blue-500 " >Sell Digital Asset</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-blue-500 " >Buy Digital Asset</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-blue-500 " >Creator Dashboard</a>
        </Link>
      </div>
      
    </nav>
    <Component {...pageProps}  />
    {/* <div className="pt-8">
    <div class="h-10 bg-blue-500 text-center fond-bold">All Right Reserves @ 2021</div>
    </div> */}
  </div>
}

export default MyApp
