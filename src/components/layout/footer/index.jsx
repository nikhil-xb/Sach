import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Like my work? Think I am good addition for your firm?</p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
					
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Built with {` `} 
								<a href="https://www.gatsbyjs.org">Gatsby</a> Modified by Nikhil Kumar, Based on template by {` `}<a href="https://github.com/AbdaliDahir/">Abdali Dahir</a>
          		</span> </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;
