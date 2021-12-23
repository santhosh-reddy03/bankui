

const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic ZXhlY3V0aXZlX2Jhbms6ZXhlY3V0aXZlMTIz");
    myHeaders.append("Cookie", "csrftoken=rf4g4TZIcTevmCk5WemLPkBRVxqiztDD8lYqiffirSZrgo6humaGPRKRzoBDQkl1");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8000/api/login/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}