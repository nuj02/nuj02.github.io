import './root.scss'
import { Link, Outlet} from 'react-router-dom'
import ScrollToTop from './scroll'

function Root() {
    return (
        <>
            <ScrollToTop/>
            <header id="sidebar">
                <h1 id="nav-head" lang="ja">池田純</h1>
                <nav id="nav-bar">
                    <ol id="sections">
                        <li>
                            <Link to="/">green</Link>
                        </li>
                        <li>
                            <Link to="graduation-photos">Graduation Photos</Link>
                        </li>
                        <li>
                            <Link to="ch-at-night">Chapel Hill @ Night</Link>
                        </li>
                        <li>
                            <Link to="tokyo">Tokyo</Link>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="https://github.com/nuj02" target="_blank">Github</Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/jun-ikeda/" target="_blank">LinkedIn</Link>
                        </li>
                    </ol>
                </nav>
            </header>
            <div id="canvas">
              <Outlet />  
            </div>
        </>
    )
}

export default Root