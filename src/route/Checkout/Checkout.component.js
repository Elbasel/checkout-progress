import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";

import CheckoutProgress from "Route/Checkout/CheckoutProgress";

import "./Checkout.override.style";

export class Checkout extends SourceCheckout {
  renderCheckoutProgress() {
    const { checkoutStep } = this.props;

    const stepTitles = [];
    Object.values(this.stepMap).forEach((step) => stepTitles.push(step.title));

    const currentStepIndex = stepTitles.indexOf(
      this.stepMap[checkoutStep].title
    );

    return (
      <CheckoutProgress
        stepTitles={stepTitles}
        currentStepIndex={currentStepIndex}
      />
    );
  }

  // Override render method to add CheckoutProgress component
  render() {
    return (
      <main block="Checkout">
        {/* Add CheckoutProgress */}
        {this.renderCheckoutProgress()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
