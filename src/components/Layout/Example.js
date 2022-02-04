import React from 'react'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'

export default function Example() {
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);
  return (
    <>
    <div className="flex-container">
      <div className="blank-space"></div>
      <Button variant="danger" ref={target} onMouseOver={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
      </div>
    </>
  );
}
