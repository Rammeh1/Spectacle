<template>
    <div>
        <div v-if="isLoading">
            <h2>Loading ....</h2>
        </div>
        <div v-else class="py-6">
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <div class="container-fluid">
                    <router-link
                        :to="{ name: 'AddSalles' }"
                        class="btn btnoutline-light"
                    >
                        Ajouter Salle
                    </router-link>
                </div>
            </nav>
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <th scope="col">Libelle</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="salle in salles" :key="salle.id">
                        <td>{{ salle.libelle }}</td>
                        <td>{{ salle.adresse }}</td>
                        <td>
                            <router-link
                                :to="{
                                    name: 'EditSalles',
                                    params: { id: salle.id },
                                }"
                                class="btn btn-outline-warning mx-2"
                            >
                                <i class="fa-solid fa-pen-to-square"></i>
                                Modifier
                            </router-link>
                        </td>
                        <td>
                            <button
                                class="btn btn-outline-danger mx-2"
                                @click="deleteSalle(salle.id)"
                            >
                                <i class="fa-solid fa-trash-can"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const salles = ref([]);
const isLoading = ref(true);

const getSalles = async () => {
    await axios
        .get("http://localhost:8000/api/salles")
        .then((res) => {
            salles.value = res.data;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getSalles();
});

const deleteSalle = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/api/salles/${id}`);
        getSalles();
    } catch (error) {
        console.error(error);
    }
};
</script>

<style lang="scss" scoped></style>
