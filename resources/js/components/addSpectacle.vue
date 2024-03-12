<template>
    <form @submit.prevent="addSpectacle">
        <h6>Ajout de Spectacle</h6>
        <div class="row">
            <div class="col-md-3">
                .
                <label for="piece" class="form-label">Pièce</label>
                <select class="form-control" v-model="spectacle.idpiece">
                    <option v-for="pc in pieces" :key="pc.id" :value="pc.id">
                        {{ pc.libelle }}
                    </option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="salle" class="form-label">Salle</label>
                <select class="form-control" v-model="spectacle.idsalle">
                    <option v-for="sl in salles" :key="sl.id" :value="sl.id">
                        {{ sl.libelle }}
                    </option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="libsalle" class="form-label"
                    >Date du Spectacle
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="date"
                    vmodel="spectacle.datespectacle"
                />
            </div>
        </div>
        <br />
        <button type="submit" className="btn btn-outline-primary">
            Enregister
        </button>
    </form>
</template>
<style scoped></style>
<script setup>
/* Les imports nécessaires*/
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const spectacle = ref({});
const salles = ref([]);
const pieces = ref([]);
const getsPieces = async () => {
    await axios
        .get("http://localhost:8000/api/pieces")
        .then((res) => {
            pieces.value = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const getSalles = async () => {
    await axios
        .get("http://localhost:8000/api/salles")
        .then((res) => {
            salles.value = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const addSpectacle = async () => {
    await axios
        .post("http://localhost:8000/api/spectacles/", spectacle.value)
        .then(() => router.push({ name: "spectacles" }))
        .catch((err) => console.log(err));
};
onMounted(() => {
    getSalles();
    getsPieces();
});
</script>
<style lang="scss" scoped></style>
