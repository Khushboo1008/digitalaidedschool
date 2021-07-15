import React from 'react'
import Title from './Title'
import Wrapper from './Wrapper'
import './Tree.scss'
import { TREE_DATA } from '../helpers/Tree'

function Tree() {
    return (
        <Wrapper dir="column">
            <Title>Why Digital Aided School ?</Title>
            <div className="tree__box">
                        <p className="tree__text"> <span>Technology -</span> State of the art technology used in every aspect of working.</p>
                        <p className="tree__text"><span>Quality -</span> Focus on Quality driven achievement.</p>
                        <p className="tree__text"><span>Knowledge -</span> Upto on date on ultra modern content and technology.</p>
                        <p className="tree__text"><span>Create Difference -</span> We want to create a positive difference in the life of every sentient being we come across. Hence the focus on designing modules to improve life & technology requirements.</p>
                        <p className="tree__text"><span>Fees -</span> We understand the value of your hard-earned money. So we state that if you come across and show us a fee plan that beats us, we’ll do it 20% less in the fee you present to us.</p>
                        <p className="tree__text"><span>Technology -</span> State of the art technology used in every aspect of working.</p>
            </div>
        </Wrapper>
    )
}

export default Tree
