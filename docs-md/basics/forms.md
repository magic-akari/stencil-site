# 表单

### 基础表单

这里有一个基础表单组件的例子：

```jsx
@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @State() value: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // 向我们的后端发送数据
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.value} onInput={() => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

让我们看看这里发生了什么。首先我们把 input 组件的 value 值绑定到了以一个 state 变量 `this.value` 上。然后我们在 `handleChange` 方法中，把新的值赋给了我们的 state 变量，并把这个方法绑定在了 `onInput` 上。每一次用户的键入都会触发调用 `onInput`。


### 高级表单

这里有一个更加高级表单组件的例子：

```jsx
@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @State() value: string;
  @State() selectValue: string;

  handleSubmit() {
    console.log(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Email:
          <input type="email" value={this.value} onInput={(e) => this.handleChange(e)} />
        </label>

        <select value={this.selectValue} onInput={() => this.handleSelect(event)}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

正如你所见，这个表单更加高级，因为它有一个 select 组件和一个输入 email 的组件。同时我们在 email 的 `handleChange` 方法中检验输入合法性。正如你所见，我们就像处理 input 元素一样处理 `select` 元素。

对于输入合法性验证，我们使用 [constraint validation api](https://www.w3.org/TR/html5/forms.html#the-constraint-validation-api) ，这是浏览器内置的用来检验用户是否真的输入 email 的方法。

<stencil-route-link url="/docs/component-lifecycle" router="#router" custom="true">
  <button class="backButton">
    返回
  </button>
</stencil-route-link>

<stencil-route-link url="/docs/handling-arrays" custom="true">
  <button class="nextButton">
    继续
  </button>
</stencil-route-link>