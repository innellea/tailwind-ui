import Header from "./header";

export default function Layout(props) {
    return (
        <div className="flex flex-no-wrap w-full">
            <Header />

            <main className="w-full">{props.children}</main>
        </div>
    );
}
