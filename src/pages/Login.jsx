

import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

export const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // TODO: 

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

