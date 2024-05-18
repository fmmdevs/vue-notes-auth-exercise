import { Ref } from 'vue'
import INote from './INote'

interface IUser{
    name: Ref<string>,
    email: Ref<string>,
    logged: Ref<boolean>,
    jwt: Ref<string>,
    notes:Ref<Array<INote>>
}

export default IUser