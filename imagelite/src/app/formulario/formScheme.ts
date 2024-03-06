import * as Yup from 'yup'

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const formScheme: FormProps = { name: '', tags: '', file: '' }

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim()
            .required('Nome é obrigatório!')
            .max(50, 'Limite 50 caracteres!'),
    tags: Yup.string().trim()
            .required('As tags são obrigatórias!')
            .max(50, 'Limite 50 caracteres!'),
    file: Yup.mixed<Blob>()
            .required('Selecione uma imagem!')
            .test('size', 'Imagem não pode ser maior que 4 MB', (file) => {
                return file.size < 4000000;
            })
            .test('type', 'Formatos aceitos: jpeg, giff ou png', (file) => {
                return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
            })
})