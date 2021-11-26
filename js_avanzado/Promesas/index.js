const request = require('request')

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com'

const createAuthor = (name, lastName, nacionality, biography, gender ,age, isAlive) => {
    const URL_POST = `${URL_BASE}/api/v1/authors/`

    const jsonToSend = {
        "name" : name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }

    return new Promise((resolve, reject) => {
        request.post(URL_POST, {form : jsonToSend}, (err, res, body) => {
            if( res.statusCode === 201) {
                const newAuthor = JSON.parse(body)
                resolve(newAuthor)
            } else {
                console.log(err)
                reject(new Error("No se pudo crear el usuario"))
            } 
        })
    })

}

const updateAuthor = (id, name, lastName, nacionality, biography, gender ,age, isAlive) => {
    const URL_PUT = `${URL_BASE}/api/v1/authors/${id}/`

    const jsonToSend = {
        "name" : name,
        "last_name": lastName,
        "nacionalidad": nacionality,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }

    return new Promise((resolve, reject) => {
        return request.put(URL_PUT, {form: jsonToSend}, (err, res, body) => {
            if (res.statusCode === 200) {
                resolve(readAuthor(id))
            }else {
                reject(new Error(`No se pudo actualizar el usuario: ${id}` ))
            }
        })
    })
}

const readAuthor=(idAuthor)=>{
    const URL_GET= `${URL_BASE}/api/v1/authors/${idAuthor}`

    return new Promise((resolve,reject)=>{
     return request.get(URL_GET,(err,res,body)=>{
        if(res.statusCode===200){
         const data=JSON.parse(body)
          resolve(data)        
        }

        else{
            reject(new Error ("Ocurrio un error"))
        }

      })
    })

}

const deleteAuthor=(idToDelete)=>{
    const URL_DELETE=`${URL_BASE}/api/v1/authors/${idToDelete}`

    return new Promise((resolve,reject)=>{
        return request.delete(URL_DELETE,(err,res,body)=>{
            if(res.statusCode===200){
                
            }
        })
    })
}



createAuthor('Juancho x223', 'Generiacon 9999', 'MX', 'VATOS LOCOS 4Evar', 'F', 30, true)
    .then((newAuthor) => {
        console.log('Autor creado', newAuthor)
        return updateAuthor(newAuthor.id,'Juancho433', 'Generiacon 9999', 'MX', 'VATOS LOCOS 4Evar', 'F', 30, false)
        
    })
    .then((updateAuthor) => {
        console.log('Autor Actualizado:', updateAuthor)
        
    })

