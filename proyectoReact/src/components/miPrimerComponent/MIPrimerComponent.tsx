import { FC } from "react";

interface IPropsMIPrimerComponent {
	text: string;
	color: string;
	fontSize: number;
}

export const MIPrimerComponent: FC<IPropsMIPrimerComponent> = ({
	text,
	color,
	fontSize,
}) => {
	return (
		<div style={{ color: `${color}`, fontSize: `${fontSize || 5}rem` }}>
			<p></p>
			{text}
		</div>
	);
};
