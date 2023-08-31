const get = async (id) => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(json => console.log(json))
    } catch (error) {
        console.error(error, 'Ошибка')
    }   
}

get(9)