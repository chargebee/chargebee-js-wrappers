import React from 'react';
import dynamic from 'next/dynamic'

const Example1 = dynamic(
    () => import('../src/examples/example1/Example1.js'),
    { ssr: false }
)

const Example2 = dynamic(
    () => import('../src/examples/example2/Example2.js'),
    { ssr: false }
)

const Example3 = dynamic(
    () => import('../src/examples/example3/Example3.js'),
    { ssr: false }
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 1
        };

        this.setExample = this.setExample.bind(this)
    }

    componentDidMount() {
        window.Chargebee.init({
            site: "honeycomics-v3-test",
            publishableKey: "test_qoH22RugUvm5IcxoqUD5Svdcu9mX5figf"
        })
    };

    setExample(show_number) {
        this.setState({
            show: show_number
        })
    };

    render() {
        return (
            <>
                <script src="https://js.chargebee.com/v2/chargebee.js" ></script>
                <div >
                    <ul className="base_page_ul">
                        <li className="base_page_li" onClick={() => this.setExample(1)}>Example 1</li>
                        <li className="base_page_li" onClick={() => this.setExample(2)}>Example 2</li>
                        <li className="base_page_li" onClick={() => this.setExample(3)}>Example 3</li>
                    </ul>
                    <div>{this.state.show == 1 ? <Example1 /> : this.state.show == 2 ? <Example2 /> : <Example3 />}</div>
                </div>
            </>
        )
    }
}

export default App;

