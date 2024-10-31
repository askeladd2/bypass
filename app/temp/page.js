"use client"; 
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { generateSlug } from '@/utils/slug';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Page({ params }) {
    const [nextpage, setnextpage] = useState(false);
    const linkUrl = clickCount === 0 ? '/ads' : `/intervals/${slug2}`;

    useEffect(() => {
        const interval = setInterval(() => {
            setnextpage(prev => !prev);
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    if (params.slug === "delta") {
        return( <>
                <Navbar />
                <div className=" m-auto p-5 w-full flex justify-between sm:flex-wrap  ">
                <h2 className="text-2xl font-semibold my-4  h-12  border border-white ">The Power of Empathy</h2>   

                <div className="  border-white border rounded-sm p-6 ">

                        <h1 className="text-3xl  font-bold my-5">How Epic Is Understanding People?</h1>
                        <div className="container m-auto p-5 w-full flex justify-center ">
                    {/* Top Cover Image */}
                    <div className=" m-auto  mb-5">
                    <div className="m-auto">
    {nextpage ? (
      <Link
         className="bg-red-600 px-4 py-2 text-white rounded-md"
        href={linkUrl}
      >
        Continue
      </Link>
    ) : (
      <p className='bg-red-600 px-4 py-2 text-white rounded-md"'>Loading...</p>
    )}
                    </div>
                </div>
                </div>
                <h2 className="text-2xl font-semibold my-4  h-12  border border-white ">The Power of Empathy</h2>   
                </div>

                
            </>
) }

    return (
        <div className="flex justify-center items-center w-full h-full min-h-screen">
            <iframe src="https://giphy.com/embed/E4cnIqDuNov1Pp10yC" width="480" height="360" style={{ border: 0 }} allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/travisband-travis-E4cnIqDuNov1Pp10yC">View on Giphy</a></p>
        </div>
    );
}












// // app/index.js

// import Link from 'next/link';

// function generateHashForInterval() {
//     const now = new Date();
//     const halfHourInterval = Math.floor(now.getTime() / (30 * 60 * 1000));
//     const str = String(halfHourInterval);
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charCodeAt(i);
//         hash = (hash << 5) - hash + char;
//     }
//     return hash.toString(16);
// }

// export default function HomePage() {
//     const currentHash = generateHashForInterval();

//     return (
//         <div>
//             <h1>Welcome to the Interval App</h1>
//             <p>Current Hash: {currentHash}</p>
//             <Link href={`/intervals/${currentHash}`}>
//                 Go to Current Interval Page
//             </Link>
//         </div>
//     );
// }
