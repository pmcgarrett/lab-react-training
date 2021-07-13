import React from 'react';

class LikeButton extends React.Component {
    state = {
        bgColor: "purple",
        counter: 0,
        index: 1,
        array: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    };

    handleCounter = () => {

        this.setState((state) => {
            if (!state.array[state.index]) {
                state.index = -1;
            }
            return {
                index: state.index + 1,
                counter: state.counter + 1,
                bgColor: state.array[state.index],

            };
        });
    };

    render() {
        const { bgColor, counter } = this.state;
        return (
            <>
                <button onClick={this.handleCounter}
                    style={{ backgroundColor: bgColor}}>
                    {counter} Likes
                </button>

            </>
        )
    }
}

export default LikeButton;