import React from 'react';
//import PropTypes from 'prop-types';
import "./InfoNode.css";

export class InfoNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            type: props.type,
            level: props.level
        };
    };
    render() {
        let classes = "InfoNode nesting-level--" + (this.state.level || 0);
        return (
            <div className={classes}>
                <div className="node">
                    <div className="content">
                        {this.state.content}
                    </div>
                </div>
            </div>
        );
    };
};

export class InfoNodesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: props.nodes
        };
    };

    render() {

        let infonodes = this.state.nodes.map(
            (node) => (<InfoNode key={node.id} content={node.content} type={node.type} level={node.level}/>)
        );

        let classes = "InfoNodesList";

        return (
            <div className={classes}>
                {infonodes}
            </div>
        );
    };
};

export var TestData = {
    "nodes": {
        1: {
            "id": 1,
            "type": "text",
            "content": "Первый узел",
            "parent": null,
            "level": 0
        },
        2: {
            "id": 2,
            "type": "text",
            "content": "Второй узел",
            "parent": 1,
            "level": 1
        },
        3: {
            "id": 3,
            "type": "text",
            "content": "Третий узел",
            "parent": 1,
            "level": 1
        },
        4: {
            "id": 4,
            "type": "text",
            "content": "Четвёртый узел",
            "parent": 2,
            "level": 2
        }
    },
    "nodes_order": [1, 2, 4, 3]
};