module.exports = {
    apps : [{
        name   : "StarterApplication",
        script : "ORIGIN=https://example.org BODY_SIZE_LIMIT=Infinity node build/index.js",
        log_date_format: "YYYY-MM-DD HH:mm Z",
    }]
}
