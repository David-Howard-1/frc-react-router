import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  layout('./layout.tsx', [
    ...prefix('cases', [
      index('cases/list.tsx'),
      route(':recordId', 'cases/detail.tsx'),
    ]),
    ...prefix('people', [
      index('people/list.tsx'),
      route(':recordId', 'people/detail.tsx'),
    ]),
    route('loading', 'loading.tsx'),
  ]),
] satisfies RouteConfig;
