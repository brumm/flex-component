var React = require('react');
var Flex = require('react-flex-component');

var App = React.createClass({
	render () {
		return (
			<div>
				<Flex>
					<Flex className='foo'>foo</Flex>
					<Flex className='bar'>bar</Flex>
					<Flex className='baz'>baz</Flex>
				</Flex>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
