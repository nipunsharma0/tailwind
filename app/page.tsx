import Image from "next/image";
import Body from "D:/code playground/reactApp/my-project/src/components/Body"
import Header from "D:/code playground/reactApp/my-project/src/components/Header"
import Footer from "D:/code playground/reactApp/my-project/src/components/Footer"


export default function Home() {
  return (
    <div className="bg-amber-50 px-6 py-3 min-h-screen flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 lg:pl-20 lg:pr-20 ">
      <Header/>
      <Body/>
      <Footer/>

    </div>
    
  )
}