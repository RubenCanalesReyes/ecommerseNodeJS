function products() {
    const productId = document.getElementById('product-id').value;

    if (!productId) {
        alert('Por favor, ingresa un Id del producto');
        return;
    }

    fetch(`http://localhost:3000/api/product/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw alert('Producto no encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('product-name').textContent = `${data.name}`; // Nombre
            document.getElementById('product-description').textContent = `${data.description}`; // Descripción
            document.getElementById('product-price').textContent = `$${data.price}.00`; // Precio
            // para la imagen (Soon)
            if (data.imageUrl) {
                document.getElementById('product-image').src = data.imageUrl;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.message);
        });
}
