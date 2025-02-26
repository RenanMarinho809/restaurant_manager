import jwt from 'jsonwebtoken';



//gerar token ao fazer o login
 async function generateToken(email: string, senha: string){
     return jwt.sign({email, senha}, 'secret', {expiresIn: '1h'})
}

export default generateToken;