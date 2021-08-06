const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.login = async (body) => {
    try {
        if(body.user === 'luiz' && req.body.password === '123'){
            const id = 1; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 4800 // expires in 90min
            });
            return {error: false, auth: true, token: token };
          }
          
          return {error: true, message: 'Login inválido!'};
    } catch (error) {
        throw error;
    }
}

module.exports.verify = async (token) => {
    try {
        if (!token) return {error: true,  auth: false, message: 'Nenhum token valido' };
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) return {error: true, auth: false, message: 'Falha ao autenticar token' };
          
         return {error: false, auth: true, userId: decoded.id};
        });
    } catch (error) {
        throw error;
    }
}