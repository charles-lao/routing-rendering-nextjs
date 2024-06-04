import Link from 'next/link';

export default function NewsDetailPage({ params }) { // Params object To get the dynamic key
    const newsId = params.id;
    
    return (
        <>
            <h1>News Detail Page</h1>    
            <p>News ID: {newsId}</p>       
        </>
    );
    
}