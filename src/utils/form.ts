import { RegisterOptions } from "react-hook-form";

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,}$/;

export const requireValidations: RegisterOptions = {
    required: {
        value: true,
        message: 'Este campo es requerido',
    }
}

export const usernameValidations: RegisterOptions = {
    required: {
        value: true,
        message: 'Este campo es requerido',
    }
}

export const emailValidations = {
    required: {
        value: true,
        message: 'Este campo es requerido'
    }
}

export const passwordValidations = {
    required: {
        value: true,
        message: 'Este campo es requerido'
    },
    minLength: {
        value: 8,
        message: 'La contraseña debe tener al menos 8 caracteres'
    }, 
    pattern: {
        value: passwordRegex,
        message: 'La contaseña debe tener al menos una minúscula, mayúscula, número y símbolo'
    }
}