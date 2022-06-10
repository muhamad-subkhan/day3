function submitData() {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-number").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == "") {
        return alert("Nama wajib diisi")
    } else if (email == "") {
        return alert("Email wajib diisi")
    } else if (phone == "") {
        return alert("Phone wajib diisi")
    } else if (subject = "") {
        return alert("Subject wajib diisi")
    } else if (message == "") {
        return alert("Pesan wajib diisi")
    }



    let emailReceiver = "admin@gmail.com" //email penerima//
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=hallo nama saya ${name} ${message} silahkan hubungi ${phone} Email:${email}`
    a.click()


    let dataObject = {
        email,
        phone,
        subject,
        message
    }

    console.log(dataObject);


}