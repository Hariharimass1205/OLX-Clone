import react from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Post from '../components/posts/Post';
function Home(){
    return(
        <>
        <div>
        <Header/>
        <Banner/>
        <Post/>
        <Post/>
        <Post/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;