import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
  return (
    <div className='m-5 w-75 shadow-lg p-5 fs-5'>
      <h3 className='pb-4'>Question and Answer</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><span className='fw-bold fs-5'>Question : What is the Difference Between Props and State?</span> </Accordion.Header>
          <Accordion.Body>
            <span className='fw-bold'>Answer :</span> Props and State are not same.Props which can not be modified,but state can be modified.Props which pass data from one component to another.State can not be passed to other components.props are read-only.State changes whice can be asynchronous.Stateful component where state change..
            Props can be accessed by the child component.State can not be accessed by the child component.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className='fw-bold fs-5'>Question : How useState works?</span> </Accordion.Header>
          <Accordion.Body>
            <span className='fw-bold'>Answer :useState is function which we declare is called hook.It is special function which can create connection with react.It allows to have state variable in functional components.To set an initial value,we can pass the initial value as an argument to the useState function.useState will return the two-element array as usual but will assign the initial value to the first element of the array.This is how useState works.</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;