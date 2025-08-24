const checkOrigin = (req, res, next) => {
    //const token = req.headers.authorization.
    console.log(req.headers)
    next()
}

export default checkOrigin