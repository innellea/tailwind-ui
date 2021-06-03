import Header from "./header";

export default function Layout(props) {
    return (
        <div>
            <Header />

            <main>{props.children}</main>
        </div>
    );
}
