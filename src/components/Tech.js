import AnimatedText from 'react-animated-text-content';

const Tech = (props) => {
    
    return(
        <><AnimatedText
        type="words" // animate words or chars
        animation={{
            x: '200px',
            y: '-290px',
            scale: 1.1,
            ease: 'ease-in',
        }}
        animationType="wave"
        interval={0.05}
        duration={.8}
        tag="p"
        className="school"
        includeWhiteSpaces
        threshold={.01}
        rootMargin="20%"
    >
            HTML, CSS, Javascript, REACT, Redux, Node.js, JSON, AJAX, SQL, JQuery, Bootstrap, Bash

Windows, OSX, Unix/Linux
            

</AnimatedText>
        </>
    )
}


export default Tech