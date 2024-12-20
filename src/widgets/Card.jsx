import classes from './Card.module.css';
import { useState } from 'react';
import { Image } from '@aws-amplify/ui-react';


function Card() {

    // eslint-disable-next-line no-unused-vars
    const [countDown, setCountDown] = useState('');

    function getCountDown(){
        setCountDown( '07-06-2025');
    }

    return (
        <div>

            <Image
                alt=""
                src="/assets/Header.png"
                srcSet="/assets/Header.png 400w, /assets/Home_Desktop.png 1800w"
                height="100%"
                width="100%"
            />

        </div>
    );
}

export default Card;