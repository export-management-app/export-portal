import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Shipments from "@/views/Shipments/Shipments.vue";
import AddShipment from "@/views/AddShipment/AddShipment.vue";
import DetailShipment from "@/views/DetailShipment/DetailShipment.vue";

const routes = [
   {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
   },
   {
      path: '/shipments',
      name: 'Shipments',
      component: Shipments,
   },
   {
      path: '/add-shipment',
      name: 'AddShipment',
      component: AddShipment,
   },
   {
      path: '/detail-shipment/:id',
      name: 'DetailShipment',
      component: DetailShipment,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach(() => {
   console.log('test')
});

export default router


