import React from "react"
import styled from 'styled-components';
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

const quotes = [
  `"The betterment of the world can be achieved through pure and goodly deeds, commendable and seemly conduct." - Bahá'u'lláh`,
  `"Tell the rich of the midnight sighing of the poor..." - Bahá'u'lláh`,
  `“...however dark the immediate horizons, we must go forward rejoicing in the knowledge that the work we are privileged to perform is God’s work and will bring to birth a world whose splendor will outshine our brightest visions and surpass our highest hopes.” - Universal House of Justice`,
  `"True peace and tranquility will only be realized when every soul will have become the well-wisher of all mankind." - Bahá'u'lláh`,
]

const NavLink = styled.a`
  margin: 0 1em;
  font-size: 1.8em;
`;

const FooterNav = styled.nav`
  margin-bottom: 2em;
`;

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      <p>{quotes[Math.floor(Math.random() * quotes.length)]}</p>
      <FooterNav>
        <NavLink href="https://twitter.com/EddieGdotme" rel="noreferrer"><AiOutlineTwitter/></NavLink>
        <NavLink href="mailto:hello@eddieg.me" rel="noreferrer"><AiOutlineMail/></NavLink>
      </FooterNav>
      © {new Date().getFullYear()}, by Eddie Glenn.
    </footer>
  )
}

export default Footer
