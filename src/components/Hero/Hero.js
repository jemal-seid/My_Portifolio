import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br /> My Personal Portifolio
			</SectionTitle>
			<SectionText>
				Hi, I'm Jemal and I graduated from the University of () with a degree in
				Computer Science. My interests are in Front End developer, and love to
				create beautiful and performant products with delightful user
				experiences.
			</SectionText>
			{/* I can repalec google.com with my resume or coverletter */}
			<Button
				onClick={() =>
					(window.location = "https://jemal-seid.github.io/new-CV/")
				}>
				See More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
