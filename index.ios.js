'use-strict';

const ReactNative = require('react-native');
const React = require('react');
const SearchPage = require('./SearchPage');

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'Property Finder', component: SearchPage }}/>);
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
