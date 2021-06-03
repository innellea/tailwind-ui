import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
    return (
        <div>
            <Header />

            <main>{props.children}</main>
            <Footer />
        </div>
    );
}
