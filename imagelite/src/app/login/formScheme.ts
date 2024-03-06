import * as Yup from 'yup'

export interface LoginForm {
    name?: string;
    email: string;
    password: string;
    passwordMatch: string;
}

export const validationScheme  = Yup.object().shape({
    email: Yup.string().trim().required('Email é obrigatório!').email('Email inválido!'),
    password: Yup.string().required('Senha é obrigatória!').min(8, 'A senha deve ter pelo menos 8 caracteres!'),
    passwordMatch: Yup.string().oneOf( [Yup.ref('password')], 'A senha deve ser igual!' )
})

export const formScheme: LoginForm = { email: '', name: '', password: '', passwordMatch: '' }