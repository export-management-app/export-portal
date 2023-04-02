import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Shipments from "@/views/Shipments/Shipments.vue";
import AddShipment from "@/views/AddShipment/AddShipment.vue";

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
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach(() => {
   console.log('test')
});

export default router


