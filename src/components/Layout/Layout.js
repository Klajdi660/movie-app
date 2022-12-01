import MainNav from './MainNav';
import classes from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <MainNav />
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}

export default Layout;
