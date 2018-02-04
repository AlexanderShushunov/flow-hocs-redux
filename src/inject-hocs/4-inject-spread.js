// @flow
// does not work. see https://github.com/facebook/flow/issues/2405
import * as React from 'react';

type InjectProps = {|
    injected: number
|};

function injectProp<PassedProps: {}>(
    WrappedComponent: React.ComponentType<{|...$Exact<PassedProps>, ...InjectProps|}>,
): React.ComponentType<$Exact<PassedProps>> {
    return function WrapperComponent(props: $Exact<PassedProps>) {
           // return <WrappedComponent {...props} injected={42} />;
    };
}

class MyComponent extends React.Component<{
    shouldBePassed: number,
    injected: number, // it can NOT be ?: or skipped
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
        <MyEnhancedComponent shouldBePassed={'bla-bla'} /> {/* type check error (runtime error) */}
        <MyEnhancedComponent /> {/* type check error (runtime error) */}
        <MyEnhancedComponent shouldBePassed={-1} injected={3} /> {/* erase prop without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} injected={'text'} /> {/* erase prop (with wrong type) without any warnings */}
        <MyEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> {/* unnecessary prop */}
    </div>
);
