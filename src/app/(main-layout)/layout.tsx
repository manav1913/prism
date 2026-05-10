import Footer from "@/components/homepage/Footer"
import Navbar from "@/components/homepage/Navbar"
import { Children, PropsWithChildren } from "react"


const MainLayout = ({children}:PropsWithChildren) => {
  return (
    <div className="min-h-screen w-screen bg-background">
      
      <Navbar/>
      <div className="mt-4">
      {children}
      </div>
     <Footer/> 

    </div>
  )
}

export default MainLayout
