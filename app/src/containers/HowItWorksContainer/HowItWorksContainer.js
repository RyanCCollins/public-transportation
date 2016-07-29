import React, { PropTypes, Component } from 'react';
import { HowItWorks } from 'components';
import { connect } from 'react-redux';

class HowItWorksContainer extends Component {
  constructor() {
    super();
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.state = {
      width: window.innerWidth
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize() {
    this.setState({
      width: window.innerWidth
    });
  }
  render() {
    const {
      width
    } = this.state;
    return (
      <HowItWorks {...this.props} width={width} />
    );
  }
}

HowItWorksContainer.propTypes = {
  sections: PropTypes.array.isRequired,
  stepIndex: PropTypes.number.isRequired,
  onForwards: PropTypes.func.isRequired,
  onBackwards: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sections: state.help.sections
});

export default connect(mapStateToProps)(HowItWorksContainer);
