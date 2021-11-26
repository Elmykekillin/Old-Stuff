const deleteAuthor=(idToDelete)=>{
    const URL_DELETE=`${URL_BASE}/api/v1/authors/${idToDelete}`

    return new Promise((resolve,reject)=>{
        return request.delete(URL_DELETE,(err,res,body)=>{
            if(res.statusCode===200){
                const data=JSON.parse(body)
                resolve(data)
            }

        }
    })
}

deleteAuthor()