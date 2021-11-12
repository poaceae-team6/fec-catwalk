import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component
class Track extends React.Component {
  handleEvent = e => {
    console.log("TRACK", this.props.eventName, Math.round(e.timeStamp / 1000), this.props.module);
  };

  handleChildMounted = (element, child) => {
    const DOMNode = ReactDOM.findDOMNode(element);
    if (DOMNode) {
      DOMNode.addEventListener("click", this.handleEvent);
    }
    if (typeof child.ref === "function") {
      child.ref(element);
    }
  };

  // wrapWithClass = comp =>
  //   class extends React.Component {
  //     render() {
  //       return comp;
  //     }
  //   };

  remapChildren(children) {
    return React.Children.map(children, child => {
      const ref = element => this.handleChildMounted(element, child);

      // DOM Component, such as:
      // <button />
      if (typeof child.type === "string") {
        return React.cloneElement(child, { ref });
      }
        // Custom Component w/props.children, such as:
        // <MyComponent ... />
        //   <.../>
        //   <.../>
        // </MyComponent>
      // } else if (React.Children.count(child.props.children)) {
      //   return React.cloneElement(child, {
      //     children: this.remapChildren(child.props.children)
      //   });

      //   // Custom Class Component w/o props.children, such as:
      //   // <MyClassComponent ... />
      // } else if (child.type.prototype.render) {
      //   return React.cloneElement(child, { ref });

      //   // Custom Function Component w/o props.children, such as:
      //   // <MyFunctionComponent ... />
      // } else {
      //   return React.createElement(this.wrapWithClass(child), { ref });
      // }
    });
  }

  render() {
    return this.remapChildren(this.props.children);
  }
}

export default Track;