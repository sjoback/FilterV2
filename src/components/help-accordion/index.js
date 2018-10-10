import Collapsible from 'react-collapsible';
import React, { Component } from 'react';
import Search from '../../assets/images/icons/search.png';
import './style.css';

class Accordion extends Component {
  render(){
    return (
      <div>
        <div className="Outer">
          <Collapsible trigger="Var rapporterar jag tekniska fel med hemsidan?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Var rapporterar jag redaktionella misstag och faktafel?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Hur kommer jag i kontakt med redaktionen?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill annonsera?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill frilansa för Filter?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill skicka brev?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
        </div>

        <div className="premium-kund">
          <Collapsible trigger="Var rapporterar jag tekniska fel med hemsidan?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Var rapporterar jag redaktionella misstag och faktafel?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Hur kommer jag i kontakt med redaktionen?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill annonsera?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill frilansa för Filter?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <Collapsible trigger="Vem kontaktar jag om jag vill skicka brev?">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
        </div>
      </div>
    )
  }
};

export default Accordion;
