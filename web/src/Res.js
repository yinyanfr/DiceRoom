import React, { Component } from 'react'

class Res extends Component{

    state = {
        drop: false
    }

    onDrop = e => {
        e.preventDefault()
        this.setState(prev => ({
            drop: !prev.drop
        }))
    }


    render = () => (

        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    {this.props.children.total}
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                <div className={
                                    this.state.drop
                                    ? "dropdown is-active"
                                    : "dropdown"
                                }>
                                <div className="dropdown-trigger">
                                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.onDrop}>
                                    <span>Detail</span>
                                    <span className="icon is-small">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                  </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    {
                                        this.props.children.res.map((e, i) => (
                                            <span key={i} className="dropdown-item">
                                                {e}
                                            </span>
                                        ))
                                    }
                                  </div>
                                </div>
                              </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Res
