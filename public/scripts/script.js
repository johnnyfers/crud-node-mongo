function deleteLink(id) {

    fetch('/' + id, { method: 'DELETE' }).then(res => {

        res.text().then(linkId => {
            document.getElementById(linkId).remove();
        })
    })

    document.location.reload(true);
}