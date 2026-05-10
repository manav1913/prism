import { Children, PropsWithChildren } from "react"


const MainLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
      {/* Navbar */}
      {children}
      {/* Footer */}

    </div>
  )
}

export default MainLayout
