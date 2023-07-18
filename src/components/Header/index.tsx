import logoConexos from "../../assets/logo-conexos-white.png";
import { HeaderStyled, Container, Menu } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <Menu>
            <ul>
              <li>
                <Link to="/home">Início</Link>
              </li>
              <li>
                <Link to="#">Serviços</Link>
              </li>
              <li>
                <Link to="#">Relatórios</Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
