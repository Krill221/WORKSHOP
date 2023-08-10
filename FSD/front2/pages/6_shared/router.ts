import { createRouter } from "@nanostores/router";

export const $router = createRouter({
  home: '/',
  tutorials: '/tutorials',
  track: 'track/:trackId',
})