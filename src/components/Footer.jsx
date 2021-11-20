import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    display:flex;
    padding:20px;
    ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;    
    padding:20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin-bottom:20px 0px;
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:#ffffff;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}
`;

const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItems = styled.li`
    width:50%;
    margin-bottom:10px;
`;
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;

const Payment = styled.img`
    width:100%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Hello mate, I have rich experience in web developement field. I have done many projects like your requirements. I will be glad if you choose me. Thank you</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <LinkedIn/>
                    </SocialIcon>                    
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Man Fashion</ListItems>
                    <ListItems>Wpman Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms</ListItems>
                </List>
            </Center>
            <Right>
                <Title></Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />
                    622 Dixie Path, South Tobinchestar 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 23456789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact@lama.dev
                </ContactItem> 
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )

}
export default Footer
