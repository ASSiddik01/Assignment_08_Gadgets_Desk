import React from "react";

const Question = () => {
  return (
    <div>
      <h1 class="section_name">Question &#38; Answer</h1>
      <div class="qa">
        <h2>
          <span>Q:</span> How does useState Work
        </h2>
        <p>
          <span>Ans:</span> State variables can be assigned to functional
          components by using the useState Hook. The function takes a variable
          containing the initial state value along with another function that
          updates it. For Example:- const [count,setCount] = useState([]);. Hare
          count initial value is empty array. And setCount function is update
          the count value.
        </p>
      </div>
      <div class="qa">
        <h2>
          <span>Q:</span> Difference between Porps and State
        </h2>
        <p>
          <span>Ans:</span>
          <table width="100%" className="text-start">
            <thead>
              <tr>
                <th>
                  <p>Props</p>
                </th>
                <th>
                  <p>State</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Each component transmits data to the other.</p>
                </td>
                <td>
                  <p>Data is passed only within the component.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Props are read-only.</p>
                </td>
                <td>
                  <p>State is changeable</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Props are immutable.</p>
                </td>
                <td>
                  <p>State is mutable.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>The child component can access properties.</p>
                </td>
                <td>
                  <p>The child component can't access.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Components can be reused with props.</p>
                </td>
                <td>
                  <p>Components can be reused with state.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
    </div>
  );
};

export default Question;
