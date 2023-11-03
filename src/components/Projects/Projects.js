import React from "react";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
// to change the following projects info i can edit every props in constant file images are found in public folder
const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ id, image, title, tags, description, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TagList>
								{tags.map((tag, index) => (
									<Tag key={index}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
