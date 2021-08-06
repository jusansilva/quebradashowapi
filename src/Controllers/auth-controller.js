

module.exports.login = async (req, res) => {
    try {
        const auth = await AuthService.verify(req.body);
        if(!auth.error){
            res.status(201).json({erro: false, body: auth});
        }
        res.status(401).json(auth.message);
    } catch (error) {
        res.status(500).json(error)
    }
}