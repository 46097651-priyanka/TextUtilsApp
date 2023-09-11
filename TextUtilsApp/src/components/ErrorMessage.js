import { useSelector } from "react-redux";
import ErrorImg from '../assets/404.png';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
    const themeState = useSelector((state) => state.theme);

    return (
        <div className="container" style={{ color: themeState.color }}>
            <div classsName="content"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img src={ErrorImg} alt="Error" style={{ height: '350px' }} />
                <h2 style={{ textAlign: 'center' }}>
                    404 <br />
                    Error Not Found!
                </h2>
                <p>
                    Go to <Link to="/">Home</Link>
                </p>
            </div>
        </div>
    )
}