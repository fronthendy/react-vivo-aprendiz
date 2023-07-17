import logoConexos from '../../assets/logo-conexos-white.png'
import { HeaderStyled } from './style'

export default function Header (){
    return (
    <>
        <HeaderStyled>
            <img src={logoConexos} alt="Logo Conexos" />
        </HeaderStyled>
    </>
    )
}