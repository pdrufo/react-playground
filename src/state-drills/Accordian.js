import React , {Component} from 'react';

class Accordian extends Component {
    static defaultProps = {sections:[]};
    state = {
        currentSectionIndex: null,
    }

    handleButtonClick = (sectionIndex) => {
        this.setState({currentSectionIndex: sectionIndex})
    }

    renderContent(section, index, currentSectionIndex) {
        return (
                <li key={index}>
                    <button  onClick = {() => this.handleButtonClick(index)}>
                    {section.title}
              </button>
              {(currentSectionIndex === index) && <p>{section.content}</p>}
              </li>
           
        )

    }

    

    render() {
        const {currentSectionIndex} = this.state
        const {sections} = this.props
        return (
            <ul>
            {sections.map((section, index) =>
                this.renderContent(section, index, currentSectionIndex)
                )}
            </ul>
        )
    }

    } 


export default Accordian