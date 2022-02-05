import AnimatedText from 'react-animated-text-content';

const Projectsword = (props) => {
    
    return(
        <><AnimatedText
        type="blocks" // animate words or chars
        animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
        }}
        animationType="rifle"
        interval={0.1}
        duration={1}
        tag="p"
        className="subsection_title"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
    >
            Projects

</AnimatedText>
        </>
    )
}


export default Projectsword