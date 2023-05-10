import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/login')
        }
        catch {
            setError('Failed to log out')
        }
    }

  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Dashboard Works!</h2>
                <sub>(login success - Master Register Admin)</sub>
                {error && <Alert variant='danger'>{error}</Alert>}
                <br />
                <strong>Email: </strong>{currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Update Profile
                </Link>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
            <Button variant='link' onClick={handleLogout}>Log Out</Button> 
        </div>

        <br />
        <br />
        <br />
        <button>
            <Link to='/factory-manager'>Factory Manager</Link>
        </button>
        <br />
        <br />
        <br />
        <button>
            <Link to='/call-center-admin'>Call center Admin</Link>
        </button>
    </div>

  )
}
