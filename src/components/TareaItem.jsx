import { useDispatch } from "react-redux"
import { deleteTarea } from '../features/tareas/tareaSlice'

export const TareaItem = ({ tarea }) => {

    const dispatch = useDispatch()

    return (
        <div className="tarea">
            <div>
                {new Date(tarea.createdAt).toLocaleString('es-MX')}
            </div>
            <div>
                <h3>{tarea.texto}</h3>
                <button className="close" onClick={() => dispatch(deleteTarea(tarea._id))}>X</button>
            </div>
        </div>
    )
}

