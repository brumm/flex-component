# flex-component

For me, flex-properties are not really styling and feel weird to clutter up my css files...  
...So I made them a component instead.

CSS properties that are prefixed with `flex-` are used without the prefix.  
`<Flex grow={1}>` instead of `<Flex grow={1}>`

```
npm install flex-component --save
```


## Usage

```
<Flex direction='column' grow={1}>
  <Whatever />
</Flex>
```

Any other prop gets forwarded to the rendered component as-is.  
`tagName` allows you to specify the rendered tag.

```
<Flex tagName='ul' className='myList' onClick={this.click} />
```

```
Flex.propTypes = {
  tagName: React.PropTypes.string,
  // parent
  display: React.PropTypes.string,
  direction: React.PropTypes.string,
  justifyContent: React.PropTypes.string,
  wrap: React.PropTypes.string,
  alignItems: React.PropTypes.string,
  alignContent: React.PropTypes.string,
  // child
  basis: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  grow: React.PropTypes.number,
  shrink: React.PropTypes.number,
  order: React.PropTypes.number,
  alignSelf: React.PropTypes.number
}
```
