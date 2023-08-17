
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import Spinner from "../components/Spinner"

export const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSucces, message } = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSucces || user) {
            navigate('/')
        } else {
            navigate('/login')
        }
        dispatch(reset())



    }, [user, isError, isSucces, message, dispatch, navigate])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h4>
                    <FaSignInAlt /> Login
                </h4>
                <p>Por favor entra a la app.</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Por favor teclea tu email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Por favor teclea tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div
                        className="form-group"
                    >
                        <button
                            type="submit"
                            className="btn btn-block">
                            Login
                        </button>
                    </div>

                </form>
            </section>
        </>
    )
}

