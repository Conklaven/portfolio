import AnimatedText from 'react-animated-text-content';

const Di = (props) => {
    
    return(
        <><AnimatedText
        type="blocks" // animate words or chars
        animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
        }}
        animationType="wave"
        interval={0.05}
        duration={.08}
        tag="p"
        className="school"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
    >
            Developers Institute : Full Stack Certification
            

</AnimatedText>
        </>
    )
}


export default Di