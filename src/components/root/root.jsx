// import './root.scss'
import { Link, Outlet} from 'react-router-dom'
import ScrollToTop from './scroll'

function Root() {
    return (
        <>
            <ScrollToTop/>
            <header class='flex flex-col items-center min-w-80 sticky top-0 self-start text-oxford-blue'>
                <h1 lang='ja' class='text-3xl my-6 text-center font-zen'>池田純</h1>
                <nav>
                    <ol class='list-none my-4 items-center pl-4'>
                        <li class='hover:text-cerulean'>
                            <Link to="/">green</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="graduation-photos">Graduation Photos</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="ch-at-night">Chapel Hill @ Night</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="tokyo">Tokyo</Link>
                        </li>
                    </ol>
                    <ol class='list-none my-4 items-center pl-4'>
                        <li class='hover:text-cerulean'>
                            <Link to="https://nuj02.github.io/Ultrasound-Filtering/" target="_blank">Ultrasound Spatiotemporal Filtering</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="https://nuj02.github.io/2024-ASA-Duke-DataFest/" target="_blank">2024 ASA DataFest</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="https://nuj02.github.io/MNIST-Playground/" target="_blank">MNIST Playground</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="PML-Vis">2nd PML Visualization Competition</Link>
                        </li>
                    </ol>
                    <ol class='list-none my-4 items-center pl-4'>
                        <li class='hover:text-cerulean'>
                            <Link to="about">About</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="https://github.com/nuj02" target="_blank">Github</Link>
                        </li>
                        <li class='hover:text-cerulean'>
                            <Link to="https://www.linkedin.com/in/jun-ikeda/" target="_blank">LinkedIn</Link>
                        </li>
                    </ol>
                </nav>
            </header>
            <div class='flex flex-col grow items-center gap-y-0.5 mt-4'>
              <Outlet />  
            </div>
        </>
    )
}

export default Root