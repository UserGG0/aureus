const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://aureus.wtf/scriptapi';

fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
        "accept": "*/*",
        "accept-language": "pl-PL,pl;q-0.7",
        "content-type": "application/json;charset=UTF-8",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "20",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "referrerPolicy": "no-referrer"
    },
    credentials: "include",
    mode: "cors",
    body: JSON.stringify(requestBody)
})
.then(response => response.text())
.then(data => {
    console.log(data); // You can do something with the response here
})
.catch(error => {
    console.error('Error:', error);
});
