<template>
    <div>
        <div v-if="isLoading">
            <h2>Loading ....</h2>
        </div>
        <div v-else class="py-6">
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <div class="container-fluid">
                    <router-link
                        :to="{ name: 'AddSpectacles' }"
                        class="btn btnoutline-light"
                    >
                        Ajouter Spectacle
                    </router-link>
                </div>
            </nav>
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Salle</th>
                        <th scope="col">Pièce</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="spectacle in spectacles" :key="spectacle.id">
                        <td>{{ spectacle.datespectacle }}</td>
                        <td>{{ spectacle.salle.libelle }}</td>
                        <td>{{ spectacle.piece.titre }}</td>

                        <td>
                            <button
                                class="btn btn-outline-warning mx-2"
                                @click="deleteSpectacle(spectacle.id)"
                            >
                                <i class="fa-solid fa-pen-to-square"></i>
                                Modifier
                            </button>
                        </td>
                        <td>
                            <button
                                class="btn btn-outline-danger mx-2"
                                @click="deleteSpectacle(spectacle.id)"
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

const spectacles = ref([]);
const salles = ref([]);
const isLoading = ref(true);

const getSpectacles = async () => {
    await axios
        .get("http://localhost:8000/api/spectacles")
        .then((res) => {
            spectacles.value = res.data;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getSpectacles();
});
const deleteSpectacle = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/api/spectacles/${id}`);
        getSpectacles();
    } catch (error) {
        console.error(error);
    }
};
</script>

<style lang="scss" scoped></style>
