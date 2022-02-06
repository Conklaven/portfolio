import AnimatedText from 'react-animated-text-content';

const WKU = (props) => {
    
    return(
        <><AnimatedText
        type="chars" // animate words or chars
        animation={{
            x: '200px',
            y: '-290px',
            scale: 1.1,
            ease: 'ease-in',
        }}
        animationType="wave"
        interval={0.05}
        duration={.08}
        tag="p"
        className="school"
        includeWhiteSpaces
        threshold={.01}
        rootMargin="20%"
    >
            Western Kentucky University : Business Communications
            

</AnimatedText>
        </>
    )
}


export default WKU