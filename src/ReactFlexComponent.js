import React from 'react';

class Flex extends React.Component {
  render() {
    let {
      display, direction, justifyContent,
      wrap, alignItems, alignContent,
      basis, grow, shrink, order, alignSelf,
      tagName, children, style, ...props
    } = this.props;

    return React.createElement(tagName, {
      ...props,
      style: {
        flexDirection: direction,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        display, justifyContent,
        alignItems, alignContent,
        order, alignSelf,
        ...style
      }
    }, children);
  }
}

Flex.defaultProps = {
  tagName: "div",
  // parent defaults
  display: 'flex',
  // direction: 'row',
  // justifyContent: 'flex-start',
  // wrap: 'nowrap',
  // alignItems: 'stretch',
  // alignContent: 'stretch',
  // child defaults
  // basis: 'auto',
  // grow: 0,
  // shrink: 1,
  // order: 0,
  // alignSelf: 'flex-start'
}

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

export default Flex;
