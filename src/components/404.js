import Header from "./partials/header";
import Nav from "./partials/nav";

import Footer from "./partials/footer";
import { Link } from "react-router-dom";


const F404 = () => {
    return ( <>
    <Header/>
    <Nav/>

    <section className="flex items-center h-full p-16 bg-coolGray-900 text-coolGray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-coolGray-600 text-ntext">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl text-lprimary">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-coolGray-400 text-ntext">But dont worry, you can find plenty of other things on our homepage.</p>
		
		<Link to={"/"} className="px-8 py-3 font-semibold rounded bg-violet-400 text-coolGray-900 text-lprimary">Back to homepage </Link>
        </div>
	</div>
</section>
<Footer/>
    </> );
}
 
export default F404;