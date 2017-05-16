/**
 * Copyright 2015 Eric Suh
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
var React = require('react');

class OutsideClickHandler extends React.Component {

    constructor(props) {
        super(props);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleMyClick = this.handleMyClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    render() {
        return React.DOM.div(
            {onClick: this.handleMyClick},
            this.props.children
        );
    }

    handleDocumentClick(event) {
        if (this.props.onOutsideClick !== null) {
            return this.props.onOutsideClick(event);
        }
    }

    handleMyClick(event) {
        event.stopPropagation();
        if(event.nativeEvent.stopImmediatePropagation)
            event.nativeEvent.stopImmediatePropagation();
    }
}

OutsideClickHandler.propTypes = {
    onOutsideClick: React.PropTypes.func
};

module.exports = OutsideClickHandler;
