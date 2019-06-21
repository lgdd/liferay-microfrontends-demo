class CounterService {

    setCounter(counter) {
        this.counter = counter;
    }

    getCounter() {
        return this.counter.state.value;
    }

    increment() {
        this.counter.setState({
            value: this.counter.state.value + 1
        });
    }
}

export default CounterService;
