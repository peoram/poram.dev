import React from "react";
import styled from "styled-components";
import logo from "./img/parametric.png";
import clicon from "./img/clicon.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  background-color: #fff8f0;
  color: #000000;
`;

const CliIcon = styled.img`
  width: 40px;
  padding-top: 15px;
  padding-left: 20px;
`;

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 670px;
`;

const Heading = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 327px;
  height: 60px;
  padding-top: 60px;
`;

const Name = styled.div`
  font-family: "Josefin Slab", serif;
  font-size: 65px;
  color: #575656;
  height: 45px;
  padding-bottom: 10px;
`;

const Role = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  padding-bottom: 85px;
  padding-top: 15px;
`;

const Logo = styled.img`
  width: 300px;
`;

const Links = styled.div`
  width: 420px;
  line-height: 1.5;
  padding-top: 15px;
`;

const Contact = styled.p`
  text-align: right;
`;

const Blog = styled.p`
  text-align: left;
`;

const Resume = styled.p`
  text-align: center;
`;

const SocialIcons = styled.div`
  text-align: right;
  padding-left: 30px;
  padding-top: 95px;
`;

const LinkedIn = styled.img`
  width: 40px;
  padding-right: 15px;
`;

const Github = styled.img`
  width: 35px;
  padding-right: 10px;
`;

function App() {
  return (
    <Main>
      <CliIcon src={clicon} alt="clicon" />
      <Body>
        <Heading>
          <Name>Paul Oram</Name>
          <hr/>
        </Heading>
        <Role>Dev Ops Engineer</Role>
        <Logo src={logo} alt="logo" />
        <Links>
          <Contact>Contact</Contact>
          <Blog>Blog</Blog>
          <Resume>Resume</Resume>
        </Links>
      </Body>
      <SocialIcons>
        <Github src={github} alt="logo" />
        <LinkedIn src={linkedin} alt="logo" />
      </SocialIcons>
    </Main>
  );
}

export default App;
