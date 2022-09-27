const manageOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    document.getElementById('order-no-display').innerText = `Status for Order No. ${orderId}`
    document.getElementById('order-no-display').style.display = 'block'
    document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light', 'btn-success')
    document.getElementById('order-id-input').value=''
}