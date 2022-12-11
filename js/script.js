// SELECTORS
const form = document.getElementById('generate-form');
const qrCodeOutput = document.getElementById('qrcode')


// FUNCTIONS
const onSubmit = (e) => {
    e.preventDefault();
    
    // Since this is an input, we need to select the value. Not just the element
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);
    if (url === '' || size === '') {
        alert('Please enter a valid URL and Size')
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner()
            generateQRCode(url, size)
        }, 3000)
    }
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    })
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}
hideSpinner()




// LISTENERS
form.addEventListener('submit', onSubmit)
