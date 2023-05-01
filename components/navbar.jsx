import { Button, Container, Navbar } from "react-bootstrap";
import Image from "next/image";

export default function NavBar({logoutTrigger,userName}){
    return(
        <Navbar bg="light" variant="light" className="shadow">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        alt="brandLogo"
                        src="/ceb.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        unoptimized
                    />{' '}
                    CEB Meter Reader
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text title={`Current Reader ${userName}`}>
                        {userName}
                    </Navbar.Text>
                    <Button 
                        size="sm" 
                        style={{marginLeft:"10px"}} 
                        onClick={()=>logoutTrigger()}
                    >{userName ? <>Log Out</> :
                                <>Log in</> }</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}