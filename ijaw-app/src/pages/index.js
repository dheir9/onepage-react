import Head from "next/head";
import Home from "../component/header"
import Countdown from "../component/countdown";
import Note from "../component/note"
import Location from "../component/location";
import Information from "../component/info";
import Footer from "../component/footer";
const OnePage = () => {
    return (
        <div>
            <Head>
                <meta charSet="=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Imomotimi Ijaw Dance</title>
            </Head>
            <Home />
            <Countdown />
            <Note />
            <Location />
            <Information />
            <Footer />
        </div>
    )
}

export default OnePage;