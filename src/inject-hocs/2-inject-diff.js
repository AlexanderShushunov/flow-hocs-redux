// @flow
// from https://flow.org/en/docs/react/hoc/#toc-injecting-props-with-a-higher-order-component
import * as React from 'react';

type InjectProps = {
    injected: number | void;
}

function injectProp<AllProps: {}>(
    WrappedComponent: React.ComponentType<AllProps>
): React.ComponentType<$Diff<AllProps, InjectProps>> {
    return function WrapperComponent(props: AllProps) {
        return <WrappedComponent {...props} foo={42} />;
    };
}

class MyComponent extends React.Component<{
    shouldBePassed: number,
    injected: number, // it can be optional or skipped
}> {
    render() {
        const {
            shouldBePassed,
            injected
        } = this.props;
        return shouldBePassed.toFixed() + injected.toFixed()
    }
}

const MyEnhancedComponent = injectProp(MyComponent);

export const Usage = () => (
    <div>
        <MyEnhancedComponent shouldBePassed={-1} />
        {/* <MyEnhancedComponent shouldBePassed={'bla-bla'} /> type check error (runtime error) */}
        {/* <MyEnhancedComponent /> type check error (runtime error) */}
        <MyEnhancedComponent shouldBePassed={-1} injected={3} /> {/* erase prop without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} injected={'text'} /> {/* erase prop (with wrong type) without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> {/* unnecessary prop */}
    </div>
);
