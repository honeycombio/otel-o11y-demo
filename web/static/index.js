// import { HoneycombWebSDK, WebVitalsInstrumentation } from '@honeycombio/opentelemetry-web';
// import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

// const sdk = new HoneycombWebSDK({
//     apiKey: process.env.HONEYCOMB_API_KEY,
//     serviceName: 'web',
//     instrumentations: [getWebAutoInstrumentations(), new WebVitalsInstrumentation()], // add automatic instrumentation
// });
// sdk.start();

// Function to fetch the image binary data from the server

async function tier1(event) {
    try {
        var url = '/proxy/';
        if (event.target.id == 'go_fast') var url = url + 'fast';
        else if (event.target.id == 'go_slow') var url = url + 'slow';
        else if (event.target.id == 'go_error') var url = url + 'error';

        // Start with the loading image
        document.getElementById('picture').style = "display:none";
        document.getElementById('loading-meme').style = "display:block";
        document.getElementById('message').innerText = "Invoking " + url;
        document.getElementById('message').style = "display:block";

        const response = await fetch(url, {
            method: 'GET'
            // method: 'POST',
            // headers: {
            //    'Content-Type': 'application/json'
            //},
            // Optionally, you can send data in the request body if needed
            // body: JSON.stringify({ /* any data you want to send */ })
        });

        if (!response.ok) {
            throw new Error('Failed to invoke ' + url);
        }

        const data = await response.text();
        // in case of json, we can use await response.json();

        // Convert the binary response to a blob
        // const blob = await response.blob();

        // Create a URL for the blob
        // const imgUrl = URL.createObjectURL(blob);

        // Set the image source to the URL
        document.getElementById('loading-meme').style = "display:none";
        document.getElementById('message').style = "display:none";
        // document.getElementById('picture').src = imgUrl;
        // document.getElementById('picture').style = "display:block;";
        document.getElementById('message').innerText = event.target.id + " → " + data;
        document.getElementById('message').style = "display:block;";
    } catch (error) {
        console.error('Error calling tier1:', error);
        document.getElementById('loading-meme').style = "display:none";
        // document.getElementById('picture').style = "display:none;";
        document.getElementById('message').innerText = "There was an error running the service. Please retry.";
        document.getElementById('message').style = "display:block;";
    }
}

document.getElementById('go_fast').addEventListener('click', tier1);
document.getElementById('go_slow').addEventListener('click', tier1);
document.getElementById('go_error').addEventListener('click', tier1);