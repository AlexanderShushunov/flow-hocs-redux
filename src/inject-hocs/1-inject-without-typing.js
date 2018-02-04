import * as React from 'react';

const injectProp = WrappedComponent => props => <WrappedComponent {...props} injected={42} />;

const MyComponent = (shouldBePassed, injected) => shouldBePassed.toFixed() + injected.toFixed();

const MyEnhancedComponent = injectProp(MyComponent);

export const Usage = () => (
    <div>
        <MyEnhancedComponent shouldBePassed={-1} />
        <MyEnhancedComponent shouldBePassed={'bla-bla'} /> {/* runtime error */}
        <MyEnhancedComponent /> {/* runtime error */}
        <MyEnhancedComponent shouldBePassed={-1} injected={3} /> {/* erase prop without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} injected={'text'} /> {/* erase prop (with wrong type) without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> {/* unnecessary prop */}
    </div>
);
