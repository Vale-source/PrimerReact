import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({handleAddProduct}) => {
	const { handleChanges, values, resetForm } = useForm({
		nombre: "",
		imagen: "",
		precio: 0,
	});

    const handleSumbitForm = () => {
        handleAddProduct(values)
        resetForm();
    }

	return (
		<Form className="p-4 border rounded m-3">
			<Form.Group controlId="formNombre">
				<Form.Label>Nombre</Form.Label>
				<Form.Control
					type="text"
					name="nombre"
					placeholder="Ingrese el nombre del producto"
					value={values.nombre}
					onChange={handleChanges}
				/>
			</Form.Group>
            <Form.Group controlId="formNombre">
				<Form.Label>Imagen</Form.Label>
				<Form.Control
					type="text"
					name="imagen"
					placeholder="Ingrese la imagen del producto"
					value={values.imagen}
					onChange={handleChanges}
				/>
			</Form.Group>
            <Form.Group controlId="formNombre">
				<Form.Label>Precio</Form.Label>
				<Form.Control
					type= "number"
					name="precio"
					placeholder="Ingrese el precio del producto"
					value={values.precio}
					onChange={handleChanges}
				/>
			</Form.Group>
            <div className="d-flex justify-content-center mt-4">
                <Button onClick={handleSumbitForm} variant="primary">Enviar Producto</Button>
            </div>
		</Form>
	);
};
