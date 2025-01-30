import { jwtDecode } from 'jwt-decode'

export function decode(token) {
    try {
        return jwtDecode(token)
    } catch (err) {
        console.error('invalid token')
        return {}
    }
}