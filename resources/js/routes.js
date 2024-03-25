import AddSalles from './components/addSalle.vue';
import Salles from './components/salle.vue';
import EditSalles from './components/editSalles.vue';
import AddSpectacles from './components/addSpectacle.vue';
import Spectacles from './components/spectacle.vue';
export const routes = [
    {
        name: 'salles',
        path: '/salles',
        component: Salles
    },
    {
        name: 'AddSalles',
        path: '/AddSalles',
        component: AddSalles
    },
    {
        name: 'EditSalles',
        path: '/EditSalles/:id',
        component: EditSalles
    },
    {
        name: 'AddSpectacles',
        path: '/AddSpectacles',
        component: AddSpectacles
    },
    {
        name: 'spectacles',
        path: '/spectacles',
        component: Spectacles
    }
];