import { useState } from "react"

function Heroes(){

    const [names, setNames] = useState([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])

    const handleDelete = (index) =>{
        setNames(names.filter(item =>{
            if(index === item){
                return false
            }
            return true
        }))
    }

    return(
        <div>
            {
                names.map((name, index) =>
                <li key={index} onClick={() => handleDelete(name)}>{name}</li>
                )
            }
        </div>
    )
}

export default Heroes
