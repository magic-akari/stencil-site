# 将 Stencil 构建的 Web 组件集成到框架中

在这个部分，我们将概述最简单的方法，将使用 Stencil 构建的 Web 组件，集成到已使用流行框架框架编写的应用中。

## Angular

将使用 Stencil 构建的 Web 组件集成到使用 Angular CLI 构建的项目中，需要四个步骤。我们需要：

1. 获取组件集合，比如通过 NPM 安装获取
1. 在使用组件的 modules 中包含 CUSTOM_ELEMENTS_SCHEMA
1. 在 `index.html` 中包含载入脚本
1. 构建过程中复制组件集合

### 包含 Custom Elements Schema

在 modules 中包含 CUSTOM_ELEMENTS_SCHEMA 允许你使用 web 组件中而不会让编译器产生错误。这是一个将其添加到 `AppModule` 的例子：

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
```

### 包含载入脚本

一个由 Stencil 构建的组件集合，包含了一个主脚本用于载入这些组件集合。该脚本需要像这样在你的应用中载入：

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Test Component Usage</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script src='test-components/testcomponents.js'></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### 复制组件

在构建过程中，组件需要被复制到输出文件夹。最简单的方法是修改 `.angular-cli.json` 文件里的 `assets` 数组，将组件集合添加到其中。

```
      "assets": [
        "assets",
        "favicon.ico",
        { "glob": "**/*", "input": "../node_modules/test-components", "output": "./test-components" }
      ],
```

## React

在使用 `create-react-app` 脚本构建的应用中，有两个可选的选项来集成 Stencil 构建的 Web 组件集合。

1. 在项目中运行 npm run eject ~或者~
1. [使用 `public` 文件夹](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder)

在这份指南中，我们选择后者。这个流程需要单个步骤：

1. 获取组件集合，比如通过 NPM 安装获取
1. 复制组件集合到 `public` 文件夹
1. 在 `index.html` 中包含载入脚本

### 复制组件集合到 `public` 文件夹

React 的构建流程会自动复制所有 `public` 文件夹下的东西到 `build` 文件夹。最简单的复制组件集合方法是设置 npm 的 `postinstall` 脚本来完成包被安装到项目后的复制工作。

下面是一个关于 `package.jsom` 中的 `postinstall` 的简单的例子。当这个包从 NPM 源安装后，将会自动把组件集合复制到项目中。这个例子仅在 *nix 系统下能正常工作，如 Linux 或者 macOS。如果你要支持更多的系统，或者做一些更复杂到操作，你可以创建一个 NodeJS 脚本来完成这些操作，并在你的 `postinstall` 中调用它。

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "postinstall": "cp -R node_modules/my-components public"
  }
```

**注:** 上边的例子中，你可能希望将 `/public/my-components` 添加到你的 `.gitignore` 文件中，让 git 忽略它。

### 包含载入脚本

使用 Stencil 构建的组件集合包含一个主脚本，用来载入集合中的组件。那个脚本需要你将它包含在你的应用中的 `pubic/index.html` 文件里来载入它，比如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <script src='%PUBLIC_URL%/my-components/mycomponents.js'></script>
    <title>Test Components in React</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>
```

<stencil-route-link url="/docs/distribution" router="#router" custom="true">
  <button class='backButton'>
    返回
  </button>
</stencil-route-link>

<stencil-route-link url="/docs/css-variables" custom="true">
  <button class='nextButton'>
    继续
  </button>
</stencil-route-link>