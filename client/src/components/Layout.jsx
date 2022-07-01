import FoodContextProvider  from "../contexts/FoodContext";

const Layout = ({children}) => {
    return(
        <FoodContextProvider>
        <main className="grid gap-x-10 grid-cols-1 md:grid-cols-2  p-5 bg-green-900 min-h-fit ">{children}</main>
        </FoodContextProvider>
    )
}
export default Layout;