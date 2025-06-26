import { useState } from 'react'
import { FORMSPREE_ENDPOINT } from '@/constants'

const initialForm = { name: '', email: '', subject: '', message: '' }

export const useContactForm = () => {
    const [form, setForm] = useState(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const [validated, setValidated] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const resetForm = () => {
        setForm(initialForm)
        setValidated(false)
        setSubmitted(false)
        setError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setValidated(true)
        setError(null)
        setLoading(true)

        if (!Object.values(form).every(Boolean)) {
            setLoading(false)
            return
        }

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitted(true)
                resetForm()
            } else {
                setError(data.error || 'Something went wrong. Please try again later.')
            }
        } catch {
            setError('Something went wrong. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        submitted,
        validated,
        error,
        loading,
        handleChange,
        handleSubmit,
        resetForm
    }
}
