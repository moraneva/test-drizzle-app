import React, { Component } from 'react';
import './App.css';
import ReadString from './ReadString';
import SetString from './SetString';

export default class App extends Component<{ drizzle: any }> {

  state = { loading: true, drizzleState: null };
  subscription!: () => void;

  componentDidMount() {
    const drizzle = this.props.drizzle;

    // subscribe to changes in the store
    this.subscription = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });

    console.log(this.subscription)
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div className="App">
        <ReadString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SetString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }
}
