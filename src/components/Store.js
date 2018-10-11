import React, { Component } from 'react';
import { ResourceStore, Resource } from '@claudiucelfilip/resource-store';

export const store = new ResourceStore();

export const addStore = (key, resOptions) => {
  store.add(new Resource(key, resOptions));
}

export const withStore = (propsKeys, storekey, Component) => {
  let resource = store.get(storekey);
  let props = propsKeys.reduce((acc, item) => {
    acc[item] = resource[item];
    return acc;
  }, {});

  props.store = resource;
  return <Component {...props}></Component>;
}

export default class Store extends Component {
  resource = {};


  componentWillMount() {
    this.resource = store.get(this.props.storekey);
    // Object.keys(this.props)
    //   .filter(key => ['storekey', 'children'].indexOf(key) === -1)
    //   .forEach((key) => {
    //     if (typeof this.props[key] !== 'function') {
    //       throw new Error(`Prop ${key} must be a function`);
    //     }
    //     this.props[key](resource[key]);
    //   }, {});

    this.resource.subscribe(res => {
      this.forceUpdate();
    });
  }

  render() {
    // const childrenWithProps = React.Children.map(this.props.children, child => {
    //   if (typeof child.type === 'string') {
    //     return child;
    //   }
    //   return React.cloneElement(child, Object.assign({}, this.storeProps, {
    //     storekey: this.props.storekey
    //   }));
    // });
    
    return this.props.children(this.resource);
  }

}