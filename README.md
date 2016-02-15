# flex-component

```
npm install flex-component --save
```

For me, flex-properties are not really styling and they feel weird cluttering up my css files...  
...So I made a `<Flex>` component instead.

## Usage

CSS properties that are prefixed with `flex-` are used without the prefix.  
`<Flex grow={1}>` instead of `<Flex flexGrow={1}>`

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
