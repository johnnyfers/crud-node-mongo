function deleteLink(id) {
    fetch('/' + id, { method: 'DELETE' }).then(res => {
        res.text().then(productId => {
            document.getElementById(productId).remove();
        })
    })

    document.location.reload(true);
}