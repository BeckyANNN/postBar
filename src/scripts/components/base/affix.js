import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Affix extends Component {
  static NavBarHeight = 10;

  constructor(props) {
    super(props);
    this.state = {
      affix: false,
    };
    this.offset = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.offset = this.refs.fixedNode.getBoundingClientRect().top - Affix.NavBarHeight - this.props.offset;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.switched !== nextProps.switched) {
      this.setState({ affix: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.switched !== prevProps.switched && !this.state.affix) {
      this.offset = this.refs.fixedNode.getBoundingClientRect().top - Affix.NavBarHeight - this.props.offset;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= this.offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < this.offset) {
      this.setState({
        affix: false,
      });
    }
  };

  render() {
    const affix = this.state.affix ? 'affix' : '';
    const style = this.state.affix ? this.props.style : {};
    const { className } = this.props;

    return (
      <div
        className={`${className || ''} ${affix}`}
        style={style}
        ref={'fixedNode'}
      >
        {this.props.children}
      </div>
    );
  }
}

Affix.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number,
  style: PropTypes.object,
  switched: PropTypes.bool,
};

Affix.defaultProps = {
  className: '',
  offset: 0,
  style: {},
  switched: false,
};

export default Affix;