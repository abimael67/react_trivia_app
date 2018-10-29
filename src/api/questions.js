export default class Questions {
    static loadQuestions(resolve, reject){
        return fetch(`${process.env.REACT_APP_QUESTIONS_API_URL}`).then(res=>{
            if(res.status !== 200){
                console.log(`There was a problem retrieving the data. ERRCODE: ${res.status}`)
                reject(res)
                return
            }
            res.json().then(data=>{ 
                        resolve(data)
                    })

        }).catch(err=>reject(err))             
    }
}