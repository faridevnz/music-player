import { useEffect } from 'react';
import WelcomeIllustration from './../../assets/images/welcome-illustration.svg';
import { Button } from './../../components/Button/Button';
import './Welcome.scss';

export const Welcome = () => {
    // functions
    const handleGetStarted = () => {
        const url: string = "https://accounts.spotify.com/authorize?client_id=7d00bef5661b4ec483a2ddb65d014d62&redirect_uri=http://localhost:3000/welcome&response_type=code";
        window.location.href = url;
    };
    // hooks
    useEffect(() => {
        const code: string = window.location.href.split("code")[1]?.substring(1) ?? null;
        // if code is not null
        if (!!code) {
            localStorage.setItem('code', code);
            window.location.href = "/library";
        }
    }, []);
    // render
    return (
        <div className="fullpage welcome-container">
            <img src={WelcomeIllustration} alt=" " />
            <Button onClick={handleGetStarted}>Get started</Button>
        </div>
    );
}