// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
// import { FormComponent } from "./components/FormComponent/FormComponent";
// import { MIPrimerComponent } from "./components/miPrimerComponent/MIPrimerComponent";

import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {
	return (
		<>
			{/* <MIPrimerComponent
				text="Texto desde propiedades"
				color="red"
				fontSize={5}
			/>
			<ComponentCounter />
			<ComponentUseEffect /> */}
			{/* <FormComponent /> */}
			<AppProduct />
			
		</>
	);
};
