<template>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h4 align="center">Modifier Salle</h4>
        <form @submit.prevent="modifierSalle">
            <div class="row">
                <div class="col-md-6">
                    <label for="libelle" class="form-label">Libelle</label>
                    <input
                        type="text"
                        class="form-control"
                        id="libelle"
                        v-model="salle.libelle"
                    />
                </div>
                <div class="col-md-6 ms-auto">
                    <label for="adresse" class="form-label">Adresse</label>
                    <input
                        type="text"
                        class="form-control"
                        id="adresse"
                        v-model="salle.adresse"
                    />
                </div>
            </div>
            <br />
            <button type="submit" class="btn btn-outline-primary">
                <i class="fa-solid fa-floppy-disk"></i> Enregister
            </button>
            <router-link to="/salles" class="btn btn-outline-danger mx-2">
                <i class="fa-solid fa-xmark"></i> Cancel
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();
const salle = ref({});

const fetchSalle = async () => {
    await axios
        .get(`http://localhost:8000/api/salles/${route.params.id}`)
        .then((res) => {
            salle.value = res.data;
        })
        .catch((error) => {
            console.error("Error fetching salle:", error);
        });
};

const modifierSalle = () => {
    axios
        .put(`http://localhost:8000/api/salles/${route.params.id}`, salle.value)
        .then(() => {
            router.push("/salles");
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
};

onMounted(() => {
    fetchSalle();
});
</script>

<style scoped></style>
