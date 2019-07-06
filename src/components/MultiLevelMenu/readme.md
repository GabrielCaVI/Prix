# prix-multi-level



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description       | Type      | Default     |
| --------- | --------- | ----------------- | --------- | ----------- |
| `color`   | `color`   |                   | `string`  | `'#0033a0'` |
| `dark`    | `dark`    |                   | `boolean` | `false`     |
| `data`    | `data`    |                   | `any`     | `{}`        |
| `message` | `message` | COMMON ATTRIBUTES | `string`  | `undefined` |


## Dependencies

### Depends on

- [prix-multi-level-item](Funtional Components)
- [prix-multi-level-submenu](Funtional Components)

### Graph
```mermaid
graph TD;
  prix-multi-level --> prix-multi-level-item
  prix-multi-level --> prix-multi-level-submenu
  prix-multi-level-submenu --> prix-multi-level-submenu
  prix-multi-level-submenu --> prix-multi-level-item
  style prix-multi-level fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
