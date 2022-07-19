import Link from "next/link";



const NotFound = () => {
    return(
        <div className="text-center w-full h-screen flex justify-center items-center">
            <h1>Ooooopsss...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href={'/'}><a className="no-underline text-[#4979ff]">Homepage</a></Link></p>
        </div>
    )
}

export default NotFound