import { createRouter, createWebHashHistory } from "vue-router";
import SeriesInfo from "./SeriesInfo.vue";
import { nextTick } from "vue";

const routes = [
  {
    path: "/",
    name: "hxh",
    component: SeriesInfo,
    meta: {
      dir: "HunterXHunter",
      title: "HUNTERĂ—HUNTER",
    },
  },
  {
    path: "/YuYuHakusho",
    name: "yuyu",
    meta: {
      dir: "YuYuHakusho",
      title: "Yu Yu Hakusho",
    },
    component: SeriesInfo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to) => {
  await nextTick(() => {
    const suffix = import.meta.env.VITE_TITLE_SUFFIX;
    document.title = `${to.meta.title} ${suffix}`;
  });
});
export default router;
