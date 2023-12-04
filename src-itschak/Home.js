import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="pages-menu">
            <h1>Choose a Page</h1>
            <div className="buttons-container">
                <Link to="/todos"><button>Todos</button></Link>
                <Link to="/posts"><button>Posts</button></Link>
                <Link to="/albums"><button>Albums</button></Link>
            </div>
        </div>
    );
}

export default Home;
