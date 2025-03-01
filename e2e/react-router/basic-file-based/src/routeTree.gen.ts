/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as EditingBImport } from './routes/editing-b'
import { Route as EditingAImport } from './routes/editing-a'
import { Route as AnchorImport } from './routes/anchor'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as RedirectIndexImport } from './routes/redirect/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as StructuralSharingEnabledImport } from './routes/structural-sharing.$enabled'
import { Route as RedirectTargetImport } from './routes/redirect/$target'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as LayoutLayout2Import } from './routes/_layout/_layout-2'
import { Route as groupLazyinsideImport } from './routes/(group)/lazyinside'
import { Route as groupInsideImport } from './routes/(group)/inside'
import { Route as groupLayoutImport } from './routes/(group)/_layout'
import { Route as anotherGroupOnlyrouteinsideImport } from './routes/(another-group)/onlyrouteinside'
import { Route as RedirectTargetIndexImport } from './routes/redirect/$target/index'
import { Route as RedirectPreloadThirdImport } from './routes/redirect/preload/third'
import { Route as RedirectPreloadSecondImport } from './routes/redirect/preload/second'
import { Route as RedirectPreloadFirstImport } from './routes/redirect/preload/first'
import { Route as RedirectTargetViaLoaderImport } from './routes/redirect/$target/via-loader'
import { Route as RedirectTargetViaBeforeLoadImport } from './routes/redirect/$target/via-beforeLoad'
import { Route as PostsPostIdEditImport } from './routes/posts_.$postId.edit'
import { Route as ParamsSingleValueImport } from './routes/params.single.$value'
import { Route as LayoutLayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as LayoutLayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'
import { Route as groupSubfolderInsideImport } from './routes/(group)/subfolder/inside'
import { Route as groupLayoutInsidelayoutImport } from './routes/(group)/_layout.insidelayout'

// Create Virtual Routes

const groupImport = createFileRoute('/(group)')()

// Create/Update Routes

const groupRoute = groupImport.update({
  id: '/(group)',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const EditingBRoute = EditingBImport.update({
  id: '/editing-b',
  path: '/editing-b',
  getParentRoute: () => rootRoute,
} as any)

const EditingARoute = EditingAImport.update({
  id: '/editing-a',
  path: '/editing-a',
  getParentRoute: () => rootRoute,
} as any)

const AnchorRoute = AnchorImport.update({
  id: '/anchor',
  path: '/anchor',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RedirectIndexRoute = RedirectIndexImport.update({
  id: '/redirect/',
  path: '/redirect/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const StructuralSharingEnabledRoute = StructuralSharingEnabledImport.update({
  id: '/structural-sharing/$enabled',
  path: '/structural-sharing/$enabled',
  getParentRoute: () => rootRoute,
} as any)

const RedirectTargetRoute = RedirectTargetImport.update({
  id: '/redirect/$target',
  path: '/redirect/$target',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const LayoutLayout2Route = LayoutLayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const groupLazyinsideRoute = groupLazyinsideImport
  .update({
    id: '/lazyinside',
    path: '/lazyinside',
    getParentRoute: () => groupRoute,
  } as any)
  .lazy(() => import('./routes/(group)/lazyinside.lazy').then((d) => d.Route))

const groupInsideRoute = groupInsideImport.update({
  id: '/inside',
  path: '/inside',
  getParentRoute: () => groupRoute,
} as any)

const groupLayoutRoute = groupLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => groupRoute,
} as any)

const anotherGroupOnlyrouteinsideRoute =
  anotherGroupOnlyrouteinsideImport.update({
    id: '/(another-group)/onlyrouteinside',
    path: '/onlyrouteinside',
    getParentRoute: () => rootRoute,
  } as any)

const RedirectTargetIndexRoute = RedirectTargetIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => RedirectTargetRoute,
} as any)

const RedirectPreloadThirdRoute = RedirectPreloadThirdImport.update({
  id: '/redirect/preload/third',
  path: '/redirect/preload/third',
  getParentRoute: () => rootRoute,
} as any)

const RedirectPreloadSecondRoute = RedirectPreloadSecondImport.update({
  id: '/redirect/preload/second',
  path: '/redirect/preload/second',
  getParentRoute: () => rootRoute,
} as any)

const RedirectPreloadFirstRoute = RedirectPreloadFirstImport.update({
  id: '/redirect/preload/first',
  path: '/redirect/preload/first',
  getParentRoute: () => rootRoute,
} as any)

const RedirectTargetViaLoaderRoute = RedirectTargetViaLoaderImport.update({
  id: '/via-loader',
  path: '/via-loader',
  getParentRoute: () => RedirectTargetRoute,
} as any)

const RedirectTargetViaBeforeLoadRoute =
  RedirectTargetViaBeforeLoadImport.update({
    id: '/via-beforeLoad',
    path: '/via-beforeLoad',
    getParentRoute: () => RedirectTargetRoute,
  } as any)

const PostsPostIdEditRoute = PostsPostIdEditImport.update({
  id: '/posts_/$postId/edit',
  path: '/posts/$postId/edit',
  getParentRoute: () => rootRoute,
} as any)

const ParamsSingleValueRoute = ParamsSingleValueImport.update({
  id: '/params/single/$value',
  path: '/params/single/$value',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const LayoutLayout2LayoutARoute = LayoutLayout2LayoutAImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const groupSubfolderInsideRoute = groupSubfolderInsideImport.update({
  id: '/subfolder/inside',
  path: '/subfolder/inside',
  getParentRoute: () => groupRoute,
} as any)

const groupLayoutInsidelayoutRoute = groupLayoutInsidelayoutImport.update({
  id: '/insidelayout',
  path: '/insidelayout',
  getParentRoute: () => groupLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/anchor': {
      id: '/anchor'
      path: '/anchor'
      fullPath: '/anchor'
      preLoaderRoute: typeof AnchorImport
      parentRoute: typeof rootRoute
    }
    '/editing-a': {
      id: '/editing-a'
      path: '/editing-a'
      fullPath: '/editing-a'
      preLoaderRoute: typeof EditingAImport
      parentRoute: typeof rootRoute
    }
    '/editing-b': {
      id: '/editing-b'
      path: '/editing-b'
      fullPath: '/editing-b'
      preLoaderRoute: typeof EditingBImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/(another-group)/onlyrouteinside': {
      id: '/(another-group)/onlyrouteinside'
      path: '/onlyrouteinside'
      fullPath: '/onlyrouteinside'
      preLoaderRoute: typeof anotherGroupOnlyrouteinsideImport
      parentRoute: typeof rootRoute
    }
    '/(group)': {
      id: '/(group)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof groupImport
      parentRoute: typeof rootRoute
    }
    '/(group)/_layout': {
      id: '/(group)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof groupLayoutImport
      parentRoute: typeof groupRoute
    }
    '/(group)/inside': {
      id: '/(group)/inside'
      path: '/inside'
      fullPath: '/inside'
      preLoaderRoute: typeof groupInsideImport
      parentRoute: typeof groupImport
    }
    '/(group)/lazyinside': {
      id: '/(group)/lazyinside'
      path: '/lazyinside'
      fullPath: '/lazyinside'
      preLoaderRoute: typeof groupLazyinsideImport
      parentRoute: typeof groupImport
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2Import
      parentRoute: typeof LayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/redirect/$target': {
      id: '/redirect/$target'
      path: '/redirect/$target'
      fullPath: '/redirect/$target'
      preLoaderRoute: typeof RedirectTargetImport
      parentRoute: typeof rootRoute
    }
    '/structural-sharing/$enabled': {
      id: '/structural-sharing/$enabled'
      path: '/structural-sharing/$enabled'
      fullPath: '/structural-sharing/$enabled'
      preLoaderRoute: typeof StructuralSharingEnabledImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/redirect/': {
      id: '/redirect/'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectIndexImport
      parentRoute: typeof rootRoute
    }
    '/(group)/_layout/insidelayout': {
      id: '/(group)/_layout/insidelayout'
      path: '/insidelayout'
      fullPath: '/insidelayout'
      preLoaderRoute: typeof groupLayoutInsidelayoutImport
      parentRoute: typeof groupLayoutImport
    }
    '/(group)/subfolder/inside': {
      id: '/(group)/subfolder/inside'
      path: '/subfolder/inside'
      fullPath: '/subfolder/inside'
      preLoaderRoute: typeof groupSubfolderInsideImport
      parentRoute: typeof groupImport
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutAImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/params/single/$value': {
      id: '/params/single/$value'
      path: '/params/single/$value'
      fullPath: '/params/single/$value'
      preLoaderRoute: typeof ParamsSingleValueImport
      parentRoute: typeof rootRoute
    }
    '/posts_/$postId/edit': {
      id: '/posts_/$postId/edit'
      path: '/posts/$postId/edit'
      fullPath: '/posts/$postId/edit'
      preLoaderRoute: typeof PostsPostIdEditImport
      parentRoute: typeof rootRoute
    }
    '/redirect/$target/via-beforeLoad': {
      id: '/redirect/$target/via-beforeLoad'
      path: '/via-beforeLoad'
      fullPath: '/redirect/$target/via-beforeLoad'
      preLoaderRoute: typeof RedirectTargetViaBeforeLoadImport
      parentRoute: typeof RedirectTargetImport
    }
    '/redirect/$target/via-loader': {
      id: '/redirect/$target/via-loader'
      path: '/via-loader'
      fullPath: '/redirect/$target/via-loader'
      preLoaderRoute: typeof RedirectTargetViaLoaderImport
      parentRoute: typeof RedirectTargetImport
    }
    '/redirect/preload/first': {
      id: '/redirect/preload/first'
      path: '/redirect/preload/first'
      fullPath: '/redirect/preload/first'
      preLoaderRoute: typeof RedirectPreloadFirstImport
      parentRoute: typeof rootRoute
    }
    '/redirect/preload/second': {
      id: '/redirect/preload/second'
      path: '/redirect/preload/second'
      fullPath: '/redirect/preload/second'
      preLoaderRoute: typeof RedirectPreloadSecondImport
      parentRoute: typeof rootRoute
    }
    '/redirect/preload/third': {
      id: '/redirect/preload/third'
      path: '/redirect/preload/third'
      fullPath: '/redirect/preload/third'
      preLoaderRoute: typeof RedirectPreloadThirdImport
      parentRoute: typeof rootRoute
    }
    '/redirect/$target/': {
      id: '/redirect/$target/'
      path: '/'
      fullPath: '/redirect/$target/'
      preLoaderRoute: typeof RedirectTargetIndexImport
      parentRoute: typeof RedirectTargetImport
    }
  }
}

declare module './routes/index' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/'>
}
declare module './routes/_layout' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/_layout'>
}
declare module './routes/anchor' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/anchor'>
}
declare module './routes/editing-a' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/editing-a'>
}
declare module './routes/editing-b' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/editing-b'>
}
declare module './routes/posts' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/posts'>
}
declare module './routes/(another-group)/onlyrouteinside' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(another-group)/onlyrouteinside'>
}
declare module './routes/(group)' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)'>
}
declare module './routes/(group)/_layout' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)/_layout'>
}
declare module './routes/(group)/inside' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)/inside'>
}
declare module './routes/(group)/lazyinside' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)/lazyinside'>
}
declare module './routes/_layout/_layout-2' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/_layout/_layout-2'>
}
declare module './routes/posts.$postId' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/posts/$postId'>
}
declare module './routes/redirect/$target' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/$target'>
}
declare module './routes/structural-sharing.$enabled' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/structural-sharing/$enabled'>
}
declare module './routes/posts.index' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/posts/'>
}
declare module './routes/redirect/index' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/'>
}
declare module './routes/(group)/_layout.insidelayout' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)/_layout/insidelayout'>
}
declare module './routes/(group)/subfolder/inside' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/(group)/subfolder/inside'>
}
declare module './routes/_layout/_layout-2/layout-a' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/_layout/_layout-2/layout-a'>
}
declare module './routes/_layout/_layout-2/layout-b' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/_layout/_layout-2/layout-b'>
}
declare module './routes/params.single.$value' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/params/single/$value'>
}
declare module './routes/posts_.$postId.edit' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/posts_/$postId/edit'>
}
declare module './routes/redirect/$target/via-beforeLoad' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/$target/via-beforeLoad'>
}
declare module './routes/redirect/$target/via-loader' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/$target/via-loader'>
}
declare module './routes/redirect/preload/first' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/preload/first'>
}
declare module './routes/redirect/preload/second' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/preload/second'>
}
declare module './routes/redirect/preload/third' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/preload/third'>
}
declare module './routes/redirect/$target/index' {
  const createFileRoute: typeof import('@tanstack/react-router').createFileRouteImpl<'/redirect/$target/'>
}

// Create and export the route tree

interface LayoutLayout2RouteChildren {
  LayoutLayout2LayoutARoute: typeof LayoutLayout2LayoutARoute
  LayoutLayout2LayoutBRoute: typeof LayoutLayout2LayoutBRoute
}

const LayoutLayout2RouteChildren: LayoutLayout2RouteChildren = {
  LayoutLayout2LayoutARoute: LayoutLayout2LayoutARoute,
  LayoutLayout2LayoutBRoute: LayoutLayout2LayoutBRoute,
}

const LayoutLayout2RouteWithChildren = LayoutLayout2Route._addFileChildren(
  LayoutLayout2RouteChildren,
)

interface LayoutRouteChildren {
  LayoutLayout2Route: typeof LayoutLayout2RouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayout2Route: LayoutLayout2RouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

interface groupLayoutRouteChildren {
  groupLayoutInsidelayoutRoute: typeof groupLayoutInsidelayoutRoute
}

const groupLayoutRouteChildren: groupLayoutRouteChildren = {
  groupLayoutInsidelayoutRoute: groupLayoutInsidelayoutRoute,
}

const groupLayoutRouteWithChildren = groupLayoutRoute._addFileChildren(
  groupLayoutRouteChildren,
)

interface groupRouteChildren {
  groupLayoutRoute: typeof groupLayoutRouteWithChildren
  groupInsideRoute: typeof groupInsideRoute
  groupLazyinsideRoute: typeof groupLazyinsideRoute
  groupSubfolderInsideRoute: typeof groupSubfolderInsideRoute
}

const groupRouteChildren: groupRouteChildren = {
  groupLayoutRoute: groupLayoutRouteWithChildren,
  groupInsideRoute: groupInsideRoute,
  groupLazyinsideRoute: groupLazyinsideRoute,
  groupSubfolderInsideRoute: groupSubfolderInsideRoute,
}

const groupRouteWithChildren = groupRoute._addFileChildren(groupRouteChildren)

interface RedirectTargetRouteChildren {
  RedirectTargetViaBeforeLoadRoute: typeof RedirectTargetViaBeforeLoadRoute
  RedirectTargetViaLoaderRoute: typeof RedirectTargetViaLoaderRoute
  RedirectTargetIndexRoute: typeof RedirectTargetIndexRoute
}

const RedirectTargetRouteChildren: RedirectTargetRouteChildren = {
  RedirectTargetViaBeforeLoadRoute: RedirectTargetViaBeforeLoadRoute,
  RedirectTargetViaLoaderRoute: RedirectTargetViaLoaderRoute,
  RedirectTargetIndexRoute: RedirectTargetIndexRoute,
}

const RedirectTargetRouteWithChildren = RedirectTargetRoute._addFileChildren(
  RedirectTargetRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/posts': typeof PostsRouteWithChildren
  '/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/inside': typeof groupInsideRoute
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/redirect/$target': typeof RedirectTargetRouteWithChildren
  '/structural-sharing/$enabled': typeof StructuralSharingEnabledRoute
  '/posts/': typeof PostsIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/subfolder/inside': typeof groupSubfolderInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target/': typeof RedirectTargetIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/inside': typeof groupInsideRoute
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/structural-sharing/$enabled': typeof StructuralSharingEnabledRoute
  '/posts': typeof PostsIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/subfolder/inside': typeof groupSubfolderInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target': typeof RedirectTargetIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/posts': typeof PostsRouteWithChildren
  '/(another-group)/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/(group)': typeof groupRouteWithChildren
  '/(group)/_layout': typeof groupLayoutRouteWithChildren
  '/(group)/inside': typeof groupInsideRoute
  '/(group)/lazyinside': typeof groupLazyinsideRoute
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/redirect/$target': typeof RedirectTargetRouteWithChildren
  '/structural-sharing/$enabled': typeof StructuralSharingEnabledRoute
  '/posts/': typeof PostsIndexRoute
  '/redirect/': typeof RedirectIndexRoute
  '/(group)/_layout/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/(group)/subfolder/inside': typeof groupSubfolderInsideRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts_/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target/': typeof RedirectTargetIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/posts'
    | '/onlyrouteinside'
    | '/inside'
    | '/lazyinside'
    | '/posts/$postId'
    | '/redirect/$target'
    | '/structural-sharing/$enabled'
    | '/posts/'
    | '/redirect'
    | '/insidelayout'
    | '/subfolder/inside'
    | '/layout-a'
    | '/layout-b'
    | '/params/single/$value'
    | '/posts/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/onlyrouteinside'
    | '/inside'
    | '/lazyinside'
    | '/posts/$postId'
    | '/structural-sharing/$enabled'
    | '/posts'
    | '/redirect'
    | '/insidelayout'
    | '/subfolder/inside'
    | '/layout-a'
    | '/layout-b'
    | '/params/single/$value'
    | '/posts/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/posts'
    | '/(another-group)/onlyrouteinside'
    | '/(group)'
    | '/(group)/_layout'
    | '/(group)/inside'
    | '/(group)/lazyinside'
    | '/_layout/_layout-2'
    | '/posts/$postId'
    | '/redirect/$target'
    | '/structural-sharing/$enabled'
    | '/posts/'
    | '/redirect/'
    | '/(group)/_layout/insidelayout'
    | '/(group)/subfolder/inside'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
    | '/params/single/$value'
    | '/posts_/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  AnchorRoute: typeof AnchorRoute
  EditingARoute: typeof EditingARoute
  EditingBRoute: typeof EditingBRoute
  PostsRoute: typeof PostsRouteWithChildren
  anotherGroupOnlyrouteinsideRoute: typeof anotherGroupOnlyrouteinsideRoute
  groupRoute: typeof groupRouteWithChildren
  RedirectTargetRoute: typeof RedirectTargetRouteWithChildren
  StructuralSharingEnabledRoute: typeof StructuralSharingEnabledRoute
  RedirectIndexRoute: typeof RedirectIndexRoute
  ParamsSingleValueRoute: typeof ParamsSingleValueRoute
  PostsPostIdEditRoute: typeof PostsPostIdEditRoute
  RedirectPreloadFirstRoute: typeof RedirectPreloadFirstRoute
  RedirectPreloadSecondRoute: typeof RedirectPreloadSecondRoute
  RedirectPreloadThirdRoute: typeof RedirectPreloadThirdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  AnchorRoute: AnchorRoute,
  EditingARoute: EditingARoute,
  EditingBRoute: EditingBRoute,
  PostsRoute: PostsRouteWithChildren,
  anotherGroupOnlyrouteinsideRoute: anotherGroupOnlyrouteinsideRoute,
  groupRoute: groupRouteWithChildren,
  RedirectTargetRoute: RedirectTargetRouteWithChildren,
  StructuralSharingEnabledRoute: StructuralSharingEnabledRoute,
  RedirectIndexRoute: RedirectIndexRoute,
  ParamsSingleValueRoute: ParamsSingleValueRoute,
  PostsPostIdEditRoute: PostsPostIdEditRoute,
  RedirectPreloadFirstRoute: RedirectPreloadFirstRoute,
  RedirectPreloadSecondRoute: RedirectPreloadSecondRoute,
  RedirectPreloadThirdRoute: RedirectPreloadThirdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/anchor",
        "/editing-a",
        "/editing-b",
        "/posts",
        "/(another-group)/onlyrouteinside",
        "/(group)",
        "/redirect/$target",
        "/structural-sharing/$enabled",
        "/redirect/",
        "/params/single/$value",
        "/posts_/$postId/edit",
        "/redirect/preload/first",
        "/redirect/preload/second",
        "/redirect/preload/third"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_layout-2"
      ]
    },
    "/anchor": {
      "filePath": "anchor.tsx"
    },
    "/editing-a": {
      "filePath": "editing-a.tsx"
    },
    "/editing-b": {
      "filePath": "editing-b.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/(another-group)/onlyrouteinside": {
      "filePath": "(another-group)/onlyrouteinside.tsx"
    },
    "/(group)": {
      "filePath": "(group)",
      "children": [
        "/(group)/_layout",
        "/(group)/inside",
        "/(group)/lazyinside",
        "/(group)/subfolder/inside"
      ]
    },
    "/(group)/_layout": {
      "filePath": "(group)/_layout.tsx",
      "parent": "/(group)",
      "children": [
        "/(group)/_layout/insidelayout"
      ]
    },
    "/(group)/inside": {
      "filePath": "(group)/inside.tsx",
      "parent": "/(group)"
    },
    "/(group)/lazyinside": {
      "filePath": "(group)/lazyinside.tsx",
      "parent": "/(group)"
    },
    "/_layout/_layout-2": {
      "filePath": "_layout/_layout-2.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_layout-2/layout-a",
        "/_layout/_layout-2/layout-b"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/redirect/$target": {
      "filePath": "redirect/$target.tsx",
      "children": [
        "/redirect/$target/via-beforeLoad",
        "/redirect/$target/via-loader",
        "/redirect/$target/"
      ]
    },
    "/structural-sharing/$enabled": {
      "filePath": "structural-sharing.$enabled.tsx"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/redirect/": {
      "filePath": "redirect/index.tsx"
    },
    "/(group)/_layout/insidelayout": {
      "filePath": "(group)/_layout.insidelayout.tsx",
      "parent": "/(group)/_layout"
    },
    "/(group)/subfolder/inside": {
      "filePath": "(group)/subfolder/inside.tsx",
      "parent": "/(group)"
    },
    "/_layout/_layout-2/layout-a": {
      "filePath": "_layout/_layout-2/layout-a.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/_layout/_layout-2/layout-b": {
      "filePath": "_layout/_layout-2/layout-b.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/params/single/$value": {
      "filePath": "params.single.$value.tsx"
    },
    "/posts_/$postId/edit": {
      "filePath": "posts_.$postId.edit.tsx"
    },
    "/redirect/$target/via-beforeLoad": {
      "filePath": "redirect/$target/via-beforeLoad.tsx",
      "parent": "/redirect/$target"
    },
    "/redirect/$target/via-loader": {
      "filePath": "redirect/$target/via-loader.tsx",
      "parent": "/redirect/$target"
    },
    "/redirect/preload/first": {
      "filePath": "redirect/preload/first.tsx"
    },
    "/redirect/preload/second": {
      "filePath": "redirect/preload/second.tsx"
    },
    "/redirect/preload/third": {
      "filePath": "redirect/preload/third.tsx"
    },
    "/redirect/$target/": {
      "filePath": "redirect/$target/index.tsx",
      "parent": "/redirect/$target"
    }
  }
}
ROUTE_MANIFEST_END */
