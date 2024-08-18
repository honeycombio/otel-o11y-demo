function headers_json(r) {
    return JSON.stringify(r.headersIn)
}

function extractTraceparent(r) {
    var traceparent = r.headersIn['traceparent'];
    if (traceparent) {
        r.variables.traceparent = traceparent;
    } else {
        r.variables.traceparent = "";
    }
    return traceparent;
}

function renderTemplate(r, data, flags) {
    if(r.headersOut['Content-Type'] && r.headersOut['Content-Type'].includes('text/html')) {
        var response = data.toString();
        // replace the template variable in the HTML content
        r.log('Content-type:' + r.headersOut['Content-Type']);
        r.log('Content-Length: ' + r.headersOut['Content-Length']);
        response = response.replace("<meta name=\"traceparent\" content=\"00-00000000000000000000000000000000-0000000000000000-00\">", `<meta name=\"traceparent\" content=\"${r.headersIn['traceparent']}\">`);
        r.log('data content length: ' + response)
        r.log(response.length);
        r.sendBuffer(response, flags);
    } else {
        r.log('>> Content-type:' + r.headersOut['Content-Type']);
        r.log('>> Content-Length: ' + r.headersOut['Content-Length']);
        r.sendBuffer(data, flags);
    }
}

function filterHeader(r) {
    if (r.headersOut['Content-Type'] == 'text/html') {
        r.headersOut['Content-Length'] = undefined;
    }
}

export default { extractTraceparent, renderTemplate, headers_json, filterHeader };