import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
    const {values, handleChanges, resetForm} = useForm({
        email:"",
        nombre:"",
        edad:0
    })

    const {email, nombre, edad} = values

    const handleSumbitForm = () => {
        console.log(values);
    }

    const handleResetForm = () => {
        resetForm();
    }

	return (
		<>
			<div>
				<h2>Formulario</h2>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
				<input
					onChange={handleChanges}
					name="email"
					value={email}
					type="email"
					placeholder="example@example.com"
				/>
				<input
					onChange={handleChanges}
					name="nombre"
					value={nombre}
					type="text"
					placeholder="Nombre"
				/>
				<input
					name="edad"
					onChange={handleChanges}
					value={edad}
					type="number"
					placeholder="Edad"
				/>
			</div>
			<div>
				<button onClick={handleSumbitForm}>Enviar</button>
				<button onClick={handleResetForm}>Resetear</button>
			</div>
		</>
	);
};
