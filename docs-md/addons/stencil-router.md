# Stencil 路由

`@stencil/router` 是 NPM 上的一个路由的包，可以被用于 Stencil apps 内。

路由的开发体验被设计为和 [React Router](https://reacttraining.com/react-router/) 相似，并且使其构建从非常简单到非常复杂所有规模的 app 都变得容易。

## 安装

在你的项目文件夹中，运行 `npm install @stencil/router`。

## 添加到 Stencil Config Collection

首先，确保 `stencil.config.js` 中的 `collections` 入口有 `@stencil/router` 包。如果没有的话，手动添加它。

打开项目的 `stencil.config.js` 文件，查看 `config` 导出项。

如下，添加一个对象到 `collections` 数组中，name 为 `@stencil/router`，若果没有的话。

```js
exports.config = {
  publicPath: '/build',
  bundles: [
    { components: ['stencil-site', 'site-header', 'landing-page'] },
    { components: ['app-marked', 'site-menu'] },
    { components: ['demos-page', 'document-component'] }
  ],
  collections: [{ name: '@stencil/router' }]
};
```

## 包含的组件

- **stencil-router**

  在你的项目里，你应该只有单一的一个 stencil-router 组件。该组建控制着所有的和浏览器历史的交互，并且处理来自事件系统的更新。

- **stencil-route**

  这个组件根据当前路径是否匹配所提供的url，来决定是否渲染。

  *properties*:
  - **url** (*Array || string*): 需要匹配的路径。也可以传递一个数组，这样路由就可以匹配多个路径。可接受的路径于 expressjs 相似，所以你可以在 url 中定义参数如 `/foo/:bar` 这样你就能使用 bar 这个参数了。
  - **component** (*string*):需要被渲染的组件。
  - **componentProps** (*key/value Object*): 对象构成的键值对 (`{ 'red': true, 'blue': 'white'}`) 将被作为属性传递给定义好的需要渲染的组件。
  - **routeRender** (*function*): 一个接受 props 作为参数的函数。如果这一项存在，它将被用来决定放置什么组件。
  - **exact** (*boolean*): 如果该值为 true 那么只有 url 严格匹配路径才会渲染。

- **stencil-route-link**

  该组件被用来渲染定义好对路由链接。当它匹配当前路径时，会应用特定的样式。

  *properties*:
  - **url** (*string*): 链接指向对路径。
  - **exact** (*boolean*): 如果该值为 true，仅当 url 严格匹配当前路径才会应用样式。
  - **activeClass** (*string*): 当链接于当前路径匹配时，所使用的 class 值，默认是 'link-active'。

- **stencil-route-redirect**

  该组件重定向当前的路径。

  *properties*:
  - **url** (*string*): 重定向的目标 url。


## 配置路由

Stencil 构建的应用，整个应用应该只有一个 `stencil-router` 元素。确保在它上边声明一个 `id` 属性。

```
<stencil-router>
...
</stencil-router>
```

在 `stencil-router` 元素内, 我们想定义我们的 `stencil-route` 集合. 每一个 `stencil-route` 需要引用一个路由，一个 url，和一个 Html元素的标签名。

```jsx
<stencil-router>
  <stencil-route url="/" component="landing-page" exact={true}/>
  <stencil-route url="/demos" component="demos-page"/>
  <stencil-route url="/demos/rendering" component="fiber-demo"/>
  <stencil-route url="/docs" component="docs"/>
  <stencil-route url="/docs/getting-started" component="getting-started"/>
  <stencil-route url="/components" component="basics-components"/>
</stencil-router>
```

根据上边的配置，当导航到 `/demos/rendering` 时，`demos-page` 组件会被载入，并且有一个 `fiber-demo` 子组件。它们都会作为相关的 stencil-routes 的孩子被载入，但是它们互相之间没有关系。嵌套路由/组件同样起作用。

## 导航

要在 app 里导航，使用 `stencil-route-link` 组件。

```jsx
<stencil-route-link url="/">
<stencil-route-link url="/demos">
<stencil-route-link url="/docs/getting-started">
```

如果你想以编程的方式导航，首先你需要将路由历史作为属性传入你的组件。以下是一个示例：

```ts
import { RouterHistory } from '@stencil/router';

export class askPage {
  @Prop() history: RouterHistory;
}
```

你可以在 history 对象上使用 `push` 方法来导航到一个新的页面：

```ts
this.history.push(`/demos`, {});
```

## URL 参数

你可能对 [React Router](https://reacttraining.com/react-router/web/example/url-params) 中的 URL 参数的概念熟悉。URL 参数允许你向组件传递来自路由的数据。要在 Stencil 实现，我们首先需要设置我们的路由，让其接受参数。这里有一个例子：

```jsx
 <stencil-route url='/show/:pageNum' component='show-page' />
```

路由中的关键部分是 `:pageNum` 语法。这意味着现在我们可以从传递参数给路由，并且数据会保存到 `pageNum` 变量中。以下是一个如何传递这个数据的例子：

```jsx
<stencil-route-link url={`/show/${someData}`} />
```

现在我们看看如何访问来自 `show-page` 组件的数据。


首先，我们需要传递 `match` 参数到我们的 `show-page` 组件：

```ts
export class ShowPage {
  @Prop() match: any;
}
```

然后我们可以通过使用 `match` 属性来访问我们的数据：

```ts
// myData 就是我们在我们的 stencil-route-link 组件中传入的数据
const myData = this.match.params.pageNum
```

<stencil-route-link url="/docs/angular-integration" router="#router" custom="true">
  <button class="backButton">
    返回
  </button>
</stencil-route-link>
