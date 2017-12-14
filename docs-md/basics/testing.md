# 测试

Stencil 让你的组件通过Jset 和Stencil 单元测试框架来进行单元测试变得更加简单。 这个测试框架只需要非常少的配置并提供一个由两个函数组成的极小的API： `render()` 和 `flush()`。 Stencil 的单元测试框架能测试组件的渲染过程和定义在组件类中的方法。

## 测试配置

要想让一个Stencil 组件工程能够运行单元测试需要在 `package.json` 文件中进行一些少量的配置。 所有的配置都包含在了Stencil App Starter 和Stencil Component Starter 中，如果你要用这些模板来开始你的项目，你就不需要再添加任何东西。 这里介绍的信息仅供查阅。

Jest 作为开依赖来安装：

```json
  "devDependencies": {
	  ...
	  "@types/jest": "^21.1.1",
	  "jest": "^21.2.1"
  },
```

设置NPM 脚本来运行这些测试：

```json
  "scripts": {
  	...
	  "test": "jest --no-cache",
	  "test.watch": "jest --watch --no-cache"
  },
```

配置Jest 来查找测试文件并且用Stencil 预处理器脚本来编译源文件：

```json
  "jest": {
	  "transform": {
  	  "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/@stencil/core/testing/jest.preprocessor.js"
	  },
	  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$",
	  "moduleFileExtensions": [
    	"ts",
    	"tsx",
  	  "js",
  	  "json",
  	  "jsx"
	  ]
  }
```

## 组件渲染测试

Stencil 测试框架的API包含两个用来渲染测试组件的函数：
- `render({ components: [], html: string })` - `render()` 函数接收一个组件的列表和一个HTML 片段，并返回一个包含渲染完成的HTML 元素的promise实例。

- `flush(element)` - `flush()` 函数用来在一个元素的属性更改后，刷新这个元素的渲染过程。这个函数在刷新完成以后返回一个已完成的promise实例。

这些函数都是异步执行的。

渲染时的一个共通测试模式是在`beforeEach()` 中`render()` 这个组件来进行一套测试。然后，每个测试用例修改元素并使用`flush(element)` 刷新节点。

### 渲染一个组件

用`render()` 函数来初始化渲染一个组件。

这个函数需要一个包含两个参数的配置对象：

- `components` ： 一个渲染器需要了解的组件列表。 通常来说， 这个列表只需要包含被测试的组件。如果你需要为你的测试渲染子组件也可以包含他们，
不过不需要单独添加。

- `html` ： 一个用来渲染组件的HTML 片段。通常这个片段类似于`<my-component></my-component>`。 这个函数返回一个包含渲染完成的HTML 元素的promise实例。

```ts
beforeEach(async () => {
  element = await render({
    components: [MyName],
    html: '<my-name></my-name>'
  });
});
```

### 刷新一个组件

用`flush()` 函数来按需要重新渲染一个节点。这通常用于更改组件的属性值之后。

```ts
it('should work with both the first and the last name', async () => {
  element.first = 'Peter'
  element.last = 'Parker';
  await flush(element);
  expect(element.textContent).toEqual('Hello, my name is Peter Parker');
});
```

### 检测元素

由于所呈现的元素是一个HTML元素， 你能用[HTMLElement interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)中的方法和属性来测试元素中的内容。

替代打印姓和名，我们的组件需要把名字用空格分隔开并姓名的每个部分的列表打印出来。我们就可以这么写一个渲染测试，如下：

```ts
    it('should least each part of the name breaking on spaces', async () => {
      element.first = 'Pasta Primavera';
      element.last = 'O Shea Buttersworth';
      await flush(element);
      const list = element.querySelector('ul');
      expect(list.children.length).toEqual(5);
      expect(list.children[0].textContent).toEqual('Pasta');
      expect(list.children[1].textContent).toEqual('Primavera');
      expect(list.children[2].textContent).toEqual('O');
      expect(list.children[3].textContent).toEqual('Shea');
      expect(list.children[4].textContent).toEqual('Buttersworth');
    });
```
任何你能在[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) 用到的都可以在这个测试中用上。


## 组件方法测试

为了测试组件的方法， 只需实例化组件并调用其中的方法。

```ts
it('should return an empty string if there is no first or last name', () => {
  const myName = new MyName();
  expect(myName.formatted()).toEqual('');
});
```

```ts
it('should return a formatted string if there is no first or last name', () => {
  const myName = new MyName();
  myName.first = 'Lucas';
  myName.last = 'Kalrickson';
  expect(myName.formatted()).toEqual('Kalrickson, Lucas');
});
```

<stencil-route-link url="/docs/handling-arrays" router="#router" custom="true">
  <button class="backButton">
    返回
  </button>
</stencil-route-link>

<stencil-route-link url="/docs/stencil-config" custom="true">
  <button class="nextButton">
    继续
  </button>
</stencil-route-link>
