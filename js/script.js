// SELECTORS
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode')


// FUNCTIONS
const onSubmit = (e) => {
    e.preventDefault();

    clearUi();
    
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
            
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50)
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

const clearUi = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link')
    if (saveLink) {
        saveLink.remove()
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode'
    link.innerHTML = 'Download and Save QR Code';
    document.getElementById('generated').appendChild(link);
}

hideSpinner()




// LISTENERS
form.addEventListener('submit', onSubmit)
