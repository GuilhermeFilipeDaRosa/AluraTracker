<template>
    <section>
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, nome } in projetos" :key="id">
                    <td>{{ id }}</td>
                    <td>{{ nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(id)">
                            <span class="ison is-small">
                                <i class="fas fa-trash" />
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "@/store"
import { EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";

export default defineComponent({
    name: 'Listas-tracker',
    methods: {
        excluir(id: string) {
            this.store.commit(EXCLUIR_PROJETO, id);
        },
    },
    setup() {
        const store = useStore();
        return {
            projetos: computed(() => store.state.projetos),
            store
        };
    },
})
</script>

