import adaptive from '../assets/adaptive-icon.png'
import { Navlink } from './nav-link'

export function Header(){
    return(
        <div className='flex items-center gap-5 py-2'>
            <img src={adaptive} alt="" className='w-8 rounded'/>
            
            <nav className='flex items-center gap-5'>
                <Navlink title='Eventos'>Eventos</Navlink>
                <Navlink>Participantes</Navlink>
            </nav>
        </div>
    )
}