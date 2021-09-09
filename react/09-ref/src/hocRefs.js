import React from 'react'

/*
function FancyButton (props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  )
}
*/

const FancyButton = React.forwardRef((props,ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))


//Forwarding refs in high-order components
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps)
      console.log('new components:', this.props)
    }
    render () {
      const {forwardedRef, ...rest} = this.props

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest}/>
    }
  }

  // Note the second param "ref" provided by React.fowardRef
  // We can pass it along to LogProps as a regular prop, e.g.
  // forwadedRef and it can then be attached to the Component

  return React.forwardRef((props, ref)=>{
    return <LogProps {...props} forwardedRef={ref} />
  })
}

export default logProps(FancyButton)


//<FancyButton ref={ref} />...


/*
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return LogProps;
}
*/