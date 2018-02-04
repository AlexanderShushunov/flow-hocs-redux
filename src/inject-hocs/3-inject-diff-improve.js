// @flow

import * as React from 'react';

type InjectProps = {
    injected: number;
}

function injectProp<AllProps: InjectProps>(
    WrappedComponent: React.ComponentType<AllProps>
): React.ComponentType<$Diff<$Exact<AllProps>, InjectProps>> {
    return function WrapperComponent(props: $Diff<$Exact<AllProps>, InjectProps>) {
        return <WrappedComponent {...props} injected={42} />;
    };
}

class MyComponent extends React.Component<{
    shouldBePassed: number,
    injected: number, // it can NOT be optional or skipped
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


type AllProps = {|
    shouldBePassed: number,
    injected: number, // it can NOT be optional or skipped
|}

const MyFunctionalComponent: React.ComponentType<AllProps> = // type annotation is required!
    ({shouldBePassed, injected}) => shouldBePassed.toFixed() + injected.toFixed();
const MyFunctionalEnhancedComponent = injectProp(MyFunctionalComponent);


export const Usage = () => (
    <div>
        <MyEnhancedComponent shouldBePassed={-1} />
        {/* <MyEnhancedComponent shouldBePassed={'bla-bla'} /> type check error (runtime error) */}
        {/* <MyEnhancedComponent /> type check error  (runtime error) */}
        {/* <MyEnhancedComponent shouldBePassed={-1} injected={3} /> type check error (erase prop) */}
        {/* <MyEnhancedComponent shouldBePassed={-1} injected={'text'} /> type check error (erase prop with wrong type) */}
        {/* <MyEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> type check error (unnecessary prop) */}
        <MyFunctionalEnhancedComponent shouldBePassed={-1} />
        {/* <MyFunctionalEnhancedComponent shouldBePassed={'bla-bla'} /> type check error (runtime error) */}
        {/* <MyFunctionalEnhancedComponent /> type check error  (runtime error) */}
        {/* <MyFunctionalEnhancedComponent shouldBePassed={-1} injected={3} /> type check error (erase prop) */}
        {/* <MyFunctionalEnhancedComponent shouldBePassed={-1} injected={'text'} /> type check error (erase prop with wrong type) */}
        {/* <MyFunctionalEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> type check error (unnecessary prop) */}
    </div>
);
