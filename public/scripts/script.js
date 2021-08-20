function deleteProduct(id) {
    fetch('/' + id, { method: 'DELETE' }).then(res => {
        res.text().then(productId => {
            document.getElementById(productId).remove();
        })
    })

    document.location.reload(true);
}

function deleteEmployee(id) {
    fetch('/employee' + id, { method: 'DELETE' }).then(res => {
        res.text().then(employeeId => {
            document.getElementById(employeeId).remove();
        })
    })

    document.location.reload();
}

function deleteCategory(id) {
    fetch('/category' + id, { method: 'DELETE' }).then(res => {
        res.text().then(categoryId => {
            document.getElementById(categoryId).remove();
        })
    })

    document.location.reload();
}

function deleteBrand(id) {
    fetch('/brand' + id, { method: 'DELETE' }).then(res => {
        res.text().then(brandId => {
            document.getElementById(brandId).remove();
        })
    })

    document.location.reload();
}