import IProjetos from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore} from "vuex";
import { InjectionKey } from "vue";
import IProjeto from "@/interfaces/IProjeto";

interface Estado {
    projetos: IProjetos[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto;

            state.projetos.push(projeto);
        }
    },
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}