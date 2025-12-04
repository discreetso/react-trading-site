import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe"

function ProductPage() {
    return (
        <>
        <Hero />
        
        <LeftSection 
        imageURL="media/images/kite.png"
        productName="kite" 
        productDescription="Our ultra trading flagship platform with streaming market data, advance charts, an elegant UI, and more. Enjoy the kite experience seamleslyon your Andriod and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        
        <RightSection />
        
        <LeftSection 
        imageURL="media/images/coin.png"
        productName="Coin" 
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bit-size cards to help you learn on the go." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

        <RightSection />

        <LeftSection 
        imageURL="media/images/varsity.png"
        productName="Varsity mobile" 
        productDescription="Our ultra trading flagship platform with streaming market data, advance charts, an elegant UI, and more. Enjoy the kite experience seamleslyon your Andriod and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        
        <Universe />
        </>
    );
}

export default ProductPage;